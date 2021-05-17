import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import ButtonFormDownload from '../components/ButtonFormDownload';
import { colors, mediaQueries } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';
import InsightsSlider from '../components/InsightsSlider';
import {
  NewsletterFullWidthSection,
  NewsletterOverlay,
} from '../components/NewsletterForm';
import FullWidthSection from '../components/FullWidthSection';

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
    label: `${post.created} - ${post.relationships.uid.name}`,
    invert: post.field_inverse_header,
    defaultBackground: false,
    color: backgroundColor || colors.yellow,
    mobileMinHeight: '470px',
    titleMarginBottom: '70px',
  };

  if (post.relationships.field_image) {
    headerData.image = post.relationships.field_image.localFile.publicURL;
  }

  return (
    <Layout headerData={headerData}>
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
        {post.relationships.field_image && (
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
        {/* {post.relationships.field_e_book_file.localFile.absolutePath} */}
        {post.relationships.field_e_book_file ? (
          <FullWidthSection minHeight='none' height='100px'>
            <ButtonFormDownload
              filepath={
                post.relationships.field_e_book_file.localFile.publicURL
              }
              text='Access Insight'
              header='Submit your email for free access to E-book.'
              confirmMessage='Thanks!'
              subheader=''
              formName='ebook-form'
              styles={css`
                margin: 0 auto;
                display: block;
              `}
            />
          </FullWidthSection>
        ) : (
          <ContentBody
            comps={post.relationships.field_components}
            type='insight'
            trim
          />
        )}
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
