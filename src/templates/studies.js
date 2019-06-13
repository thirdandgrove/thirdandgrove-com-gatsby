import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import { colors, fonts, weights } from '../styles';
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
      <header
        css={css`
          padding-left: 3rem;
          padding-top: 3rem;
        `}
      >
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
