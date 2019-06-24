import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import { colors, fonts, weights } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';

const Insights = ({ data }) => {
  const post = data.insight;

  // standin for when a description field for metadata is available
  const postText = post.relationships.field_components.find(
    comp => comp.relationships.component_type.name === 'Text'
  ).field_body.processed;
  const description = postText.slice(
    postText.indexOf('>') + 1,
    postText.indexOf('>') + 158
  );

  const keywords = post.relationships.field_tags;
  return (
    <Layout
      headerData={{
        title: post.title,
        invert: post.field_inverse_header,
        description,
        keywords,
      }}
    >
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
                    fluid(maxWidth: 850, maxHeight: 850) {
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
