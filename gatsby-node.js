/* eslint-disable array-callback-return */
const path = require('path');

const { ensureTrailingSlash } = require('./src/util');

const partners = ['acquia', 'drupal', 'gatsby', 'shopify'];

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
          created(formatString: "MMM D, YYYY")
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

  // handle creation of static partner pages
  // because page queries only work in root level pages
  const insightSlider = await graphql(`
    {
      allInsight(sort: { fields: created, order: DESC }, limit: 5) {
        nodes {
          id
          title
          field_inverse_header
          field_image {
            alt
          }
          created(formatString: "MMM D, YYYY")
          path {
            alias
          }
          relationships {
            node_type {
              name
            }
            uid {
              name
            }
            field_image {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 530, maxHeight: 400) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
                childImageSlideMobile: childImageSharp {
                  fluid(maxWidth: 325, maxHeight: 250) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
                childImageSlideDesktop: childImageSharp {
                  fluid(maxWidth: 450, maxHeight: 400) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
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
                id
                field_image {
                  alt
                }
                relationships {
                  component_type {
                    name
                  }
                  field_image {
                    id
                    localFile {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 630, maxHeight: 630) {
                          base64
                          tracedSVG
                          aspectRatio
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                          sizes
                          originalImg
                          originalName
                          presentationWidth
                          presentationHeight
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const projectSlider = await graphql(`
    {
      allCaseStudy(limit: 5) {
        nodes {
          id
          title
          field_subtitle
          field_inverse_header
          field_image_arrangement
          field_image {
            alt
          }
          field_secondary_image {
            alt
          }
          field_tertiary_image {
            alt
          }
          path {
            alias
          }
          relationships {
            field_tags {
              name
            }
            field_image {
              id
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 850, maxHeight: 850) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageMobile: childImageSharp {
                  fixed(width: 335, height: 260) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeA: childImageSharp {
                  fixed(width: 450, height: 320) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeB: childImageSharp {
                  fixed(width: 380, height: 420) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeC: childImageSharp {
                  fixed(width: 420, height: 340) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
            field_secondary_image {
              id
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 850, maxHeight: 850) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageMobile: childImageSharp {
                  fixed(width: 1, height: 1) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeA: childImageSharp {
                  fixed(width: 250, height: 180) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeB: childImageSharp {
                  fixed(width: 340, height: 260) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeC: childImageSharp {
                  fixed(width: 270, height: 210) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
            field_tertiary_image {
              id
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 850, maxHeight: 850) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageMobile: childImageSharp {
                  fixed(width: 1, height: 1) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeA: childImageSharp {
                  fixed(width: 250, height: 495) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeB: childImageSharp {
                  fixed(width: 230, height: 210) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
                childImageTypeC: childImageSharp {
                  fixed(width: 320, height: 210) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  partners.map(partner => {
    createPage({
      path: `/partners/${partner}/`,
      component: path.resolve(`src/templates/${partner}.js`),
      context: {
        insightSlider,
        projectSlider,
      },
    });
  });
};
