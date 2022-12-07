/* eslint-disable import/newline-after-import */
/* eslint-disable array-callback-return */
const path = require('path');
const util = require('util');
const childProcess = require('child_process');

const express = require('express');

const { ensureTrailingSlash, updatePaths } = require('./src/util');

const exec = util.promisify(childProcess.exec);

const runQueries = async graphql => {
  const isProduction =
    process.env.BRANCH !== undefined && process.env.BRANCH === 'master'
      ? 'production'
      : 'development';

  let queries;
  if (isProduction) {
    queries = await graphql(`
      query {
        caseStudies: allCaseStudy(filter: { field_hidden: { eq: false } }) {
          nodes {
            id
            title
            drupal_internal__nid
            path {
              alias
            }
          }
        }
        insights: allInsight(filter: { field_hidden: { eq: false } }) {
          nodes {
            id
            title
            drupal_internal__nid
            path {
              alias
            }
            relationships {
              field_tags {
                name
              }
            }
          }
        }
        legacyInsights: allNodeLegacyInsight {
          nodes {
            id
            title
            drupal_internal__nid
            created(formatString: "MMM D, YYYY")
            body {
              processed
            }
            path {
              alias
            }
            relationships {
              uid {
                name: display_name
              }
            }
          }
        }
        redirects: allRedirectRedirect {
          edges {
            node {
              redirect_source {
                path
              }
              redirect_redirect {
                uri
              }
              status_code
            }
          }
        }
      }
    `);
  } else {
    queries = await graphql(`
      query {
        caseStudies: allCaseStudy(filter: { field_hidden: { eq: false } }) {
          nodes {
            id
            title
            drupal_internal__nid
            path {
              alias
            }
          }
        }
        insights: allInsight {
          nodes {
            id
            title
            drupal_internal__nid
            path {
              alias
            }
            relationships {
              field_tags {
                name
              }
            }
          }
        }
        legacyInsights: allNodeLegacyInsight {
          nodes {
            id
            title
            drupal_internal__nid
            created(formatString: "MMM D, YYYY")
            body {
              processed
            }
            path {
              alias
            }
            relationships {
              uid {
                name: display_name
              }
            }
          }
        }
        redirects: allRedirectRedirect {
          edges {
            node {
              redirect_source {
                path
              }
              redirect_redirect {
                uri
              }
              status_code
            }
          }
        }
      }
    `);
  }

  return queries.data;
};

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('static'));
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const { caseStudies, insights, legacyInsights, redirects } = await runQueries(
    graphql
  );
  const data = { data: { caseStudies, insights, legacyInsights, redirects } };

  const updatedRedirects = await updatePaths(data);

  caseStudies.nodes.map(studyData =>
    createPage({
      path: ensureTrailingSlash(studyData.path.alias),
      component: path.resolve(`src/templates/studies.js`),
      context: {
        StudyId: studyData.id,
      },
    })
  );

  insights.nodes.map(insightData =>
    createPage({
      path: ensureTrailingSlash(insightData.path.alias),
      component: path.resolve(`src/templates/insights.js`),
      context: {
        PostId: insightData.id,
        PostTags: insightData.relationships.field_tags.map(tag => tag.name),
      },
    })
  );

  legacyInsights.nodes.map(legacyInsight =>
    createPage({
      path: ensureTrailingSlash(legacyInsight.path.alias),
      component: path.resolve(`src/templates/legacyInsights.js`),
      context: {
        title: legacyInsight.title,
        author: legacyInsight.relationships.uid.name,
        created: legacyInsight.created,
        body: legacyInsight.body.processed,
      },
    })
  );

  updatedRedirects.edges.map(redirect => {
    createRedirect({
      fromPath: `/${redirect.node.redirect_source.path}`,
      toPath: redirect.node.redirect_redirect.uri.replace('internal:', ''),
      statusCode: redirect.node.status_code,
    });
  });

  createRedirect({
    fromPath: 'https://thirdandgrove.com/*',
    toPath: 'https://www.thirdandgrove.com/:splat',
    statusCode: '301',
    force: true,
  });

  createRedirect({
    fromPath: 'https://tagd8-gatsby.netlify.com/*',
    toPath: 'https://www.thirdandgrove.com/:splat',
    statusCode: '301',
    force: true,
  });

  createRedirect({
    fromPath: 'https://www.thirdandgrove.com/careers/',
    toPath: 'https://thirdandgrove.breezy.hr/',
    statusCode: '301',
    force: true,
  });

  createRedirect({
    fromPath: 'https://www.thirdandgrove.com/san-francisco/',
    toPath: 'https://www.thirdandgrove.com/about/',
    statusCode: '301',
    force: true,
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [{ test: /\.ics$/, use: 'raw-loader' }],
    },
    resolve: {
      fallback: {
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        fs: false,
      },
    },
  });
};

exports.onPostBuild = async gatsbyNodeHelpers => {
  const { reporter } = gatsbyNodeHelpers;

  const reportOut = report => {
    const { stderr, stdout } = report;
    if (stderr) reporter.error(stderr);
    if (stdout) reporter.info(stdout);
  };

  reportOut(await exec('npm run lambda'));
};
