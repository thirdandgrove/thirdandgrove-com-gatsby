import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { colors, mediaQueries, jsBreakpoints } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';
import InsightsSlider from '../components/InsightsSlider';
import {
  NewsletterFullWidthSection,
  NewsletterOverlay,
} from '../components/NewsletterForm';

const Insights = ({ data }) => {
  const post = data.insight;
  const imageSrc =
    post.relationships.field_image &&
    post.relationships.field_image.localFile &&
    post.relationships.field_image.localFile.childImageSharp &&
    post.relationships.field_image.localFile.childImageSharp.fluid;

  const imageAlt = post.field_image && post.field_image.alt;

  const backgroundColor = post.field_color && post.field_color.color;
  const wrapperStyle = css`
    padding-top: 40px;

    ${mediaQueries.phoneLarge} {
      padding-top: 110px;
    }
  `;

  return (
    <Layout
      headerData={{
        title: post.title,
        label: `${post.created} - ${post.relationships.uid.name}`,
        invert: post.field_inverse_header,
        defaultBackground: false,
        color: backgroundColor || colors.yellow,
        mobileMinHeight: '470px',
        titleMarginBottom: '70px',
        image: imageSrc ? imageSrc.src : '',
      }}
    >
      <div
        css={[
          css`
            ${mediaQueries.phoneLarge} {
              margin-bottom: 90px;
            }
          `,
          imageSrc === undefined && wrapperStyle,
        ]}
      >
        {imageSrc && (
          <Img
            fluid={[
              post.relationships.field_image.localFile.mobileImage.fluid,
              {
                ...post.relationships.field_image.localFile.desktopImage.fluid,
                media: `(min-width: ${jsBreakpoints.phoneLarge}px)`,
              },
            ]}
            alt={imageAlt}
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
        <ContentBody
          comps={post.relationships.field_components}
          type='insight'
        />
      </div>
      <NewsletterOverlay />
      <NewsletterFullWidthSection />
      <InsightsSlider
        data={data.allInsight}
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
  query($PostId: String!, $PostTags: [String]) {
    allInsight(
      limit: 5
      filter: {
        field_hidden: { eq: false }
        relationships: {
          field_tags: { elemMatch: { name: { in: $PostTags } } }
        }
        id: { ne: $PostId }
      }
      sort: { fields: created, order: DESC }
    ) {
      nodes {
        ...InsightFragment
      }
    }
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
      created(formatString: "MMM D, YYYY")
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            mobileImage: childImageSharp {
              fluid(maxHeight: 250) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            desktopImage: childImageSharp {
              fluid(
                maxWidth: 980
                maxHeight: 500
                srcSetBreakpoints: [480, 900, 1200]
              ) {
                ...GatsbyImageSharpFluid_withWebp
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
                    fluid(maxWidth: 600, maxHeight: 600) {
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
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid_withWebp
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
