import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import { fonts, weights, mediaQueries, container } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';

const Studies = ({ data }) => {
  const post = data.caseStudy;

  return (
    <Layout
      headerData={{
        backgroundImage: post.relationships.field_image.localFile.publicURL,
        metaTitle: post.title,
        invert: post.field_inverse_header,
      }}
    >
      <div css={container.max}>
        <header
          css={css`
            padding-top: 20px;

            ${mediaQueries.phoneLarge} {
              padding-top: 50px;
            }
          `}
        >
          <h1 className='h1--xl'>{post.title}</h1>
          {post.relationships.field_tags && (
            <h4
              css={css`
                margin-bottom: 40px;
                font-family: ${fonts.sans};
                font-weight: ${weights.regular};
                font-size: 12px;
                letter-spacing: 3px;
                line-height: 21px;
                text-transform: uppercase;

                ${mediaQueries.phoneLarge} {
                  margin-bottom: 65px;
                }
              `}
            >
              {post.relationships.field_tags.map(tag => tag.name).join(', ')}
            </h4>
          )}

          <p
            css={css`
              margin-bottom: 5px;
              font-family: ${fonts.serif};
              font-weight: ${weights.thin};
              font-size: 24px;
              line-height: 1.5;

              ${mediaQueries.phoneLarge} {
                margin-bottom: 40px;
                font-size: 39px;
                line-height: 2.15;
                letter-spacing: -0.45px;
              }
            `}
          >
            {post.field_subtitle}
          </p>
        </header>
      </div>

      {post.relationships.field_components.map(comp => (
        <ContentBody key={comp.id} comp={comp} />
      ))}
    </Layout>
  );
};

Studies.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($StudyId: String!) {
    caseStudy(id: { eq: $StudyId }) {
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
          ... on component__quote {
            id
            relationships {
              component_type {
                name
              }
            }
            field_quote
            field_footer_text
          }
          ... on component__prefooter {
            id
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
                id
                localFile {
                  publicURL
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on component__text_image_split {
            id
            field_body {
              processed
            }
            field_reversed
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
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on component__text_quote_split {
            id
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
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        field_tertiary_image {
          id
          localFile {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        field_secondary_image {
          id
          localFile {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Studies;
