const path = require('path');

const { ensureTrailingSlash } = require('./src/util');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const studies = await graphql(`
    {
      allCaseStudy {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);

  studies.data.allCaseStudy.nodes.map(studyData =>
    createPage({
      path: ensureTrailingSlash(studyData.path.alias),
      component: path.resolve(`src/templates/studies.js`),
      context: {
        StudyId: studyData.id,
      },
    })
  );

  const insights = await graphql(`
    {
      allInsight {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `);
  insights.data.allInsight.nodes.map(insightData =>
    createPage({
      path: ensureTrailingSlash(insightData.path.alias),
      component: path.resolve(`src/templates/insights.js`),
      context: {
        PostId: insightData.id,
      },
    })
  );

  const legacyInsights = await graphql(`
    {
      allNodeLegacyInsight {
        nodes {
          id
          title
          created(formatString: "MMMM DD YYYY")
          body {
            value
          }
          path {
            alias
          }
          relationships {
            uid {
              name
            }
          }
        }
      }
    }
  `);
  legacyInsights.data.allNodeLegacyInsight.nodes.map(legacyInsight =>
    createPage({
      path: ensureTrailingSlash(legacyInsight.path.alias),
      component: path.resolve(`src/templates/legacyInsights.js`),
      context: {
        legacyInsight,
      },
    })
  );

  const jobs = await graphql(`
    query {
      allResumatorJob {
        nodes {
          title
          description
          board_code
          status
        }
      }
    }
  `);

  const JobTemplate = path.resolve(`src/templates/job.js`);
  jobs.data.allResumatorJob.nodes
    .filter(j => j.status === 'Open')
    .map(job =>
      createPage({
        path: `/careers/${job.title.toLowerCase().replace(/ /g, '-')}/`,
        component: JobTemplate,
        context: {
          job,
        },
      })
    );
};
