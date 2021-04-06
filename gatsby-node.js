/* eslint-disable array-callback-return */
const path = require('path');
const util = require('util');
const childProcess = require('child_process');

const express = require('express');

const { ensureTrailingSlash, updatePaths } = require('./src/util');

const exec = util.promisify(childProcess.exec);

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('static'));
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const queries = await graphql(`
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
      jobs: allResumatorJob(filter: { status: { eq: "Open" } }) {
        nodes {
          title
          description
          board_code
          status
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

  const {
    jobs,
    caseStudies,
    insights,
    legacyInsights,
    redirects,
  } = queries.data;

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

  jobs.nodes.map(job =>
    createPage({
      path: `/careers/${job.title.toLowerCase().replace(/ /g, '-')}/`,
      component: path.resolve(`src/templates/job.js`),
      context: {
        title: job.title,
        boardCode: job.board_code,
        description: job.description,
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
};

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
    module: {
      rules: [{ test: /\.ics$/, use: 'raw-loader' }],
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
