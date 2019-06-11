import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import { colors, fonts, weights } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';

export default ({ data }) => {
  const post = data.insight;
  const isInsight = post.relationships.node_type.name === 'Insight';
  return (
    <Layout
      headerData={{
        backgroundImage: isInsight
          ? null
          : post.relationships.field_image.localFile.publicURL,
        title: isInsight ? post.title : null,
        invert: post.field_inverse_header,
      }}
    >
      {!isInsight && (
        <header
          css={css`
            padding-left: 3rem;
            padding-top: 3rem;
          `}
        >
          {!isInsight && (
            <h1
              css={css`
                font-family: ${fonts.serif};
                font-weight: ${weights.black};
                font-size: 100px;
                color: ${colors.darkgray};
                letter-spacing: 1.33px;
                line-height: 76px;
                padding-top: 3rem;
              `}
            >
              {post.title}
            </h1>
          )}
          {post.relationships.field_tags && (
            <h4
              css={css`
                font-family: ${fonts.sans};
                font-weight: ${weights.regular};
                font-size: 12px;
                color: ${colors.darkgray};
                letter-spacing: 3px;
                line-height: 16px;
              `}
            >
              {post.relationships.field_tags.map(tag => tag.name).join(', ')}
            </h4>
          )}
        </header>
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
      {post.relationships.field_components.map(comp => {
        // Dynamically select a component based on field name
        const componentName = comp.relationships.component_type.name
          .split(' ')
          .join('');
        const Component = ContentBody[componentName];
        return <Component key={JSON.stringify(comp)} data={comp} />;
      })}
    </Layout>
  );
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
