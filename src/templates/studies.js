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

  const backgroundColor = post.field_color && post.field_color.color;

  return (
    <Layout
      headerData={{
        metaTitle: post.title,
        title: post.title,
        invert: post.field_inverse_header,
        defaultBackground: false,
        color: backgroundColor || colors.yellow,
        height: '500px',
        mobileMinHeight: '470px',
        titleMarginBottom: '70px',
        label: post.relationships.field_tags.map(tag => tag.name).join(', '),
        labelMobileOnly: true,
      }}
    >
      {imageSrc && (
        <Img
          fluid={post.relationships.field_image.localFile.childImageSharp.fluid}
          alt={post.field_image.alt}
          css={css`
            margin-left: 20px;
            margin-right: 20px;
            margin-top: calc(-25.5% + 15px);
            max-width: 980px;

            ${mediaQueries.xs} {
              margin-top: -165px;
            }

            ${mediaQueries.phoneLarge} {
              margin-left: auto;
              margin-right: auto;
            }
          `}
        />
      )}
      <p
        css={css`
          ${container.min};
          font-family: ${fonts.sans};
          font-size: 21px;
          font-weight: ${weights.bold};
          line-height: 1;
          padding: 55px 20px 0;
          margin-bottom: 20px;

          ${mediaQueries.phoneLarge} {
            letter-spacing: normal;
            padding: 75px 0 0;
            margin-bottom: 60px;
          }
        `}
      >
        {post.field_subtitle}
      </p>
      <ContentBody comps={post.relationships.field_components} type='study' />
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
      field_color {
        color
      }
      field_image {
        alt
      }
      field_secondary_image {
        alt
      }
      field_tertiary_image {
        alt
      }
      relationships {
        node_type {
          name
        }
        uid {
          name
        }
        field_components {
          ... on component__text_split_with_video_phone {
            id
            field_video_file_name
            field_reversed
            field_body {
              processed
            }
            relationships {
              component_type {
                name
              }
            }
          }
          ... on component__text {
            id
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
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
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
                    fluid(maxWidth: 600, maxHeight: 600, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid_withWebp
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
            field_image {
              alt
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
                    fluid(maxWidth: 800, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
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
              fluid(maxWidth: 980, maxHeight: 500, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp
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
                ...GatsbyImageSharpFluid_withWebp
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default Studies;
