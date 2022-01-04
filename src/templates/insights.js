import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { colors, mediaQueries } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';
import InsightsSlider from '../components/InsightsSlider';
import {
  NewsletterFullWidthSection,
  NewsletterOverlay,
} from '../components/NewsletterForm';
import { updateExternalLinks } from '../util';

const Insights = ({ data }) => {
  const post = data.insight;
  const imageAlt = post.field_image && post.field_image.alt;

  const backgroundColor = post.field_color && post.field_color.color;
  const wrapperStyle = css`
    padding-top: 40px;

    ${mediaQueries.phoneLarge} {
      padding-top: 90px;
    }
  `;

  const headerData = {
    title: post.title,
    label: post.relationships.field_e_book_file
      ? `Special Report`
      : `${post.created} - ${post.relationships.uid.name}`,
    invert: post.field_inverse_header,
    defaultBackground: false,
    color: backgroundColor || colors.yellow,
    mobileMinHeight: '470px',
    titleMarginBottom: '70px',
  };

  const splitHeaderData = {
    title: post.title,
    label: post.relationships.field_e_book_file
      ? `Special Report`
      : `${post.created} - ${post.relationships.uid.name}`,
    invert: post.field_inverse_header,
    splitHeroImage: post.relationships.field_image,
    file: post.relationships.field_e_book_file,
    defaultBackground: false,
    color: backgroundColor || colors.yellow,
    mobileMinHeight: '470px',
    titleMarginBottom: '40px',
    imageAlt,
    summary: post.field_summary ? post?.field_summary.processed : '',
    ebook: post.relationships.field_e_book_file
      ? post.relationships.field_e_book_file
      : '',
  };

  if (post.relationships.field_image) {
    headerData.image = post.relationships.field_image.localFile.publicURL;
    splitHeaderData.image = post.relationships.field_image.localFile.publicURL;
  }

  useEffect(
    () => updateExternalLinks(document.querySelectorAll('main > div a')),
    []
  );

  return (
    <Layout
      headerData={headerData}
      split={post.relationships.field_e_book_file && true}
      splitHeaderData={
        post.relationships.field_e_book_file ? splitHeaderData : {}
      }
    >
      <div
        css={[
          css`
            ${mediaQueries.phoneLarge} {
              margin-bottom: 90px;
            }
          `,
          wrapperStyle,
        ]}
      >
        {!post.relationships.field_e_book_file &&
          post.relationships.field_image && (
            <Img
              fluid={
                post.relationships.field_image.localFile.childImageSharp.fluid
              }
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
          trim
        />
      </div>
      {!post.relationships.field_e_book_file && (
        <>
          <NewsletterOverlay />
          <NewsletterFullWidthSection />
        </>
      )}
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
      field_summary {
        processed
      }
      created(formatString: "MMM D, YYYY")
      relationships {
        node_type {
          name
        }
        uid {
          name: display_name
        }
        field_e_book_file {
          filename
          id
          localFile {
            publicURL
          }
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
            childImageSquare: childImageSharp {
              fluid(maxWidth: 1280, maxHeight: 1280) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            childImageLandscape: childImageSharp {
              fluid(maxWidth: 1280, maxHeight: 780) {
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
          ... on component__video {
            id
            relationships {
              component_type {
                name
              }
            }
            field_video_controls
            field_vimeo_video_link {
              uri
            }
          }
        }
      }
    }
  }
`;

export default Insights;
