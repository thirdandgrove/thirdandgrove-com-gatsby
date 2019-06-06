module.exports = `
{
  allInsight {
    nodes {
      id
      title
      field_inverse_header
      created(formatString: "MMMM DD YYYY")
      relationships {
        node_type {
          name
        }
        uid {
          name
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
            relationships {
              component_type {
                name
              }
              field_image {
                id
                localFile {
                  publicURL
                  childImageSharp {
                    fluid {
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
`;
