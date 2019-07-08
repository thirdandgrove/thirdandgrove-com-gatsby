import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { colors, fonts, weights } from '../styles';
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
      }}
    >
      {imageSrc ? (
        <Img
          fluid={post.relationships.field_image.localFile.childImageSharp.fluid}
        />
      ) : (
        undefined
      )}
      <p
        css={css`
          font-family: ${fonts.serif};
          font-weight: ${weights.thin};
          font-size: 39px;
          color: ${colors.darkgray};
          letter-spacing: -0.45px;
          line-height: 84px;
          padding-top: 3rem;
          padding-left: 3rem;
        `}
      >
        {post.field_subtitle}
      </p>
      {post.relationships.field_components.map(comp => (
        <ContentBody key={comp.id} comp={comp} />
      ))}
      <InsightsSlider showButton={false} />
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
