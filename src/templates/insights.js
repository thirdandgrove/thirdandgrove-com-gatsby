import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import useWindow from '../hooks/useWindow';
import { colors, mediaQueries, jsBreakpoints } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';
import InsightsSlider from '../components/InsightsSlider';

const Insights = ({ data }) => {
  const { width } = useWindow();
  const isPhone = width < jsBreakpoints.phoneLarge;
  const post = data.insight;
  const imageSrc =
    post.relationships.field_image &&
    post.relationships.field_image.localFile &&
    post.relationships.field_image.localFile.childImageSharp &&
    post.relationships.field_image.localFile.childImageSharp.fluid;

  const backgroundColor = post.field_color && post.field_color.color;

  return (
    <Layout
      headerData={{
        title: post.title,
        label: `${post.created} - ${post.relationships.uid.name}`,
        invert: post.field_inverse_header,
        defaultBackground: false,
        color: backgroundColor || colors.yellow,
        mobileMinHeight: '470px',
        marginBottom: '70px',
      }}
    >
      {imageSrc && (
        <Img
          fluid={post.relationships.field_image.localFile.childImageSharp.fluid}
          alt={post.field_image.alt}
          css={css`
            margin-left: 20px;
            margin-right: 20px;
            margin-top: -100px;
            margin-bottom: 60px;
            max-width: 980px;

            ${mediaQueries.phoneLarge} {
              margin-left: auto;
              margin-right: auto;
              margin-top: -165px;
              margin-bottom: 80px;
            }
          `}
        />
      )}
      <ContentBody comps={post.relationships.field_components} type='insight' />
      <InsightsSlider
        showButton={isPhone}
        backgroundColor={colors.lightgray}
        title='You May Also Like'
      />
    </Layout>
  );
};

Insights.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($PostId: String!) {
    insight(id: { eq: $PostId }) {
      id
      title
      field_inverse_header
      field_color {
        color
      }
      field_image {
        alt
      }
      created(formatString: "MMMM DD YYYY")
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
            publicURL
            childImageSharp {
              fluid(maxWidth: 980, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        field_components {
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
                    fluid(maxWidth: 800, maxHeight: 600) {
                      ...GatsbyImageSharpFluid
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
        }
      }
    }
  }
`;

export default Insights;
