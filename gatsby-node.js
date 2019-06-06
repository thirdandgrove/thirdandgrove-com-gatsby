const path = require('path');

const studiesQuery = require('./src/queries/studies');
const insightsQuery = require('./src/queries/insights');
const jobsQuery = require('./src/queries/jobs');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const studies = await graphql(studiesQuery);

  const Post = path.resolve(`src/templates/post.js`);

  studies.data.allCaseStudy.nodes.map(studyData =>
    createPage({
      path: `/studies/${studyData.title.toLowerCase().replace(/ /g, '-')}`,
      component: Post,
      context: {
        post: { ...studyData },
      },
    })
  );

  const insights = await graphql(insightsQuery);

  insights.data.allInsight.nodes.map(insightData =>
    createPage({
      path: `/insights/${insightData.title.toLowerCase().replace(/ /g, '-')}`,
      component: Post,
      context: {
        post: { ...insightData },
      },
    })
  );

  const jobs = await graphql(jobsQuery);

  const JobTemplate = path.resolve(`src/templates/job.js`);
  jobs.data.allResumatorJob.nodes
    .filter(j => j.status === 'Open')
    .map(job =>
      createPage({
        path: `/careers/${job.title.toLowerCase().replace(/ /g, '-')}`,
        component: JobTemplate,
        context: {
          job,
        },
      })
    );
};
