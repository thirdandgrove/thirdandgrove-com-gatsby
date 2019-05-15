const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const articles = await graphql(`
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

  articles.data.allNodeArticle.nodes.map(articleData =>
    createPage({
      path: `/articles${articleData.path.alias}`,
      component: Article,
      context: {
        article: { ...articleData },
      },
    })
  );

  const studies = await graphql(`
    query {
      allCaseStudy {
        nodes {
          id
          title
          field_subtitle
          field_inverse_header
          field_primary_image_scale
          field_tertiary_image_scale
          field_secondary_image_scale
          relationships {
            field_components {
              ... on component__text {
                relationships {
                  component_type {
                    name
                  }
                }
                field_body {
                  processed
                }
              }
              ... on component__image {
                relationships {
                  component_type {
                    name
                  }
                  field_image {
                    localFile {
                      publicURL
                    }
                  }
                }
              }
              ... on component__quote {
                relationships {
                  component_type {
                    name
                  }
                }
                field_quote
                field_footer_text
              }
              ... on component__prefooter {
                field_body {
                  processed
                }
                field_secondary_body {
                  processed
                }
                relationships {
                  component_type {
                    name
                  }
                  field_image {
                    localFile {
                      publicURL
                    }
                  }
                }
              }
              ... on component__text_image_split {
                field_body {
                  processed
                }
                field_reversed
                relationships {
                  component_type {
                    name
                  }
                  field_image {
                    localFile {
                      publicURL
                    }
                  }
                }
              }
              ... on component__text_quote_split {
                field_body {
                  processed
                }
                field_quote
                field_reversed
                relationships {
                  component_type {
                    name
                  }
                }
              }
            }
            field_tags {
              name
            }
            field_image {
              id
              localFile {
                publicURL
              }
            }
            field_tertiary_image {
              id
              localFile {
                publicURL
              }
            }
            field_secondary_image {
              id
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const Study = path.resolve(`src/templates/Study/index.js`);

  studies.data.allCaseStudy.nodes.map(studyData =>
    createPage({
      path: `/studies/${studyData.title.toLowerCase().replace(' ', '-')}`,
      component: Study,
      context: {
        study: { ...studyData },
      },
    })
  );
};
