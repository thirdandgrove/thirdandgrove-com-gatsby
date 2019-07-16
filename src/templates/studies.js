import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { fonts, weights, colors, mediaQueries, container } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';

const Studies = ({ data }) => {
  const post = data.caseStudy;
  const imageSrc =
    post.relationships.field_image &&
    post.relationships.field_image.localFile &&
    post.relationships.field_image.localFile.childImageSharp &&
    post.relationships.field_image.localFile.childImageSharp.fluid;

  return (
    <Layout
      headerData={{
        metaTitle: post.title,
        title: post.title,
        invert: post.field_inverse_header,
        defaultBackground: false,
        color: `${colors.lightgreen}`,
        mobileHeight: '470px',
        marginBottom: '70px',
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
          {imageSrc && (
            <Img
              fluid={
                post.relationships.field_image.localFile.childImageSharp.fluid
              }
              css={css`
                margin-left: 20px;
                margin-right: 20px;
                margin-top: -100px;
                max-width: 980px;

                ${mediaQueries.phoneLarge} {
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: -165px;
                }
              `}
            />
          )}
          {post.relationships.field_components.map(comp => (
            <ContentBody key={comp.id} comp={comp} />
          ))}

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
      field_image_arrangement
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
            field_primary_lead_in_text
            field_primary_body
            field_primary_cta {
              uri
              title
            }
            field_primary_color {
              color
            }
            field_secondary_lead_in_text
            field_secondary_body
            field_secondary_cta {
              uri
              title
            }
            field_secondary_color {
              color
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
                    fluid(maxWidth: 600, maxHeight: 600) {
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
                    fluid(maxWidth: 800, maxHeight: 600) {
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
              fluid(maxWidth: 800, maxHeight: 600) {
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
              fluid(maxWidth: 800, maxHeight: 600) {
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
              fluid(maxWidth: 800, maxHeight: 600) {
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
