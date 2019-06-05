module.exports = `
{
  allCaseStudy {
    nodes {
      id
      title
      field_subtitle
      field_primary_image_scale
      field_tertiary_image_scale
      field_secondary_image_scale
      field_inverse_header
      relationships {
        node_type {
          name
        }
        uid {
          name
        }
        field_components {
          # ... on component__text {
          #   relationships {
          #     component_type {
          #       name
          #     }
          #   }
          #   field_body {
          #     processed
          #   }
          # }
          # ... on component__image {
          #   relationships {
          #     component_type {
          #       name
          #     }
          #     field_image {
          #       localFile {
          #         publicURL
          #       }
          #     }
          #   }
          # }
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
`;
