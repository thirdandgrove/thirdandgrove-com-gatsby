import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { colors, mediaQueries } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';
import InsightsSlider from '../components/InsightsSlider';

const Insights = ({ data }) => {
  const post = data.insight;
  const imageSrc =
    post.relationships.field_image &&
    post.relationships.field_image.localFile &&
    post.relationships.field_image.localFile.childImageSharp &&
    post.relationships.field_image.localFile.childImageSharp.fluid;

  return (
    <Layout
      headerData={{
        title: post.title,
        label: `${post.created} - ${post.relationships.uid.name}`,
        invert: post.field_inverse_header,
        defaultBackground: false,
        color: `${colors.lightgreen}`,
        mobileHeight: '470px',
      }}
    >
      {imageSrc && (
        <Img
          fluid={post.relationships.field_image.localFile.childImageSharp.fluid}
          css={css`
            margin-left: 20px;
            margin-right: 20px;
            margin-top: -100px;
            max-width: 980px;

            ${mediaQueries.phoneLarge} {
              margin-top: -165px;
            }

            ${mediaQueries.desktop} {
              margin-left: auto;
              margin-right: auto;
            }
          `}
        />
      )}
      {post.relationships.field_components.map(comp => (
        <ContentBody key={comp.id} comp={comp} />
      ))}
      <InsightsSlider
        showButton={false}
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
