const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allNodeArticle(sort: { fields: created, order: DESC }, limit: 25) {
        nodes {
          title
          body {
            processed
            summary
          }
          path {
            alias
          }
          created(formatString: "MMMM DD YYYY")
          relationships {
            uid {
              name
              field_last_name
              field_first_name
            }
          }
        }
      }
    }
  `);

  const Article = path.resolve(`src/templates/Article/index.js`);

  return data.allNodeArticle.nodes.map(articleData => {
    return createPage({
      path: `/articles${articleData.path.alias}`,
      component: Article,
      context: {
        article: { ...articleData },
      },
    });
  });
};
