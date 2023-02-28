import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { fonts, weights, colors, mediaQueries, container } from '../styles';
import Layout from '../components/layout';
import ContentBody from '../components/ContentBody';
import { updateExternalLinks } from '../util';

const Landings = ({ data }) => {
  const post = data.landingPage;
  const imageSrc =
    post.relationships.field_image &&
    post.relationships.field_image.localFile &&
    post.relationships.field_image.localFile.childImageSharp &&
    post.relationships.field_image.localFile.childImageSharp.fluid;

  const backgroundColor = post.field_color && post.field_color.color;

  useEffect(() => updateExternalLinks(document.querySelectorAll('main a')), []);

  return (
    <Layout
      headerData={{
        metaTitle: post.field_meta_title || post.title,
        description: post.field_meta_description,
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
      <ContentBody comps={post.relationships.field_components} type='landing' />
    </Layout>
  );
};

Landings.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($landingId: String!) {
    landingPage(id: { eq: $landingId }) {
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
          name: display_name
        }
        field_components {
          ... on component__big_links {
            id
          }
          ... on component__logo_wall {
            id
            field_header_text
            field_subhead_text
            field_images {
              alt
              title
            }
            relationships {
              component_type {
                name
              }
              field_images {
                id
                localFile {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 800, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on component__stats {
            id
            field_stat
            field_description
            relationships {
              component_type {
                name
              }
            }
          }
          ... on component__services_component {
            id
            field_header_text
            field_image {
              alt
              title
            }
            field_body {
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
                    fluid(maxWidth: 800, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on component__testimonial {
            id
            field_header_text
            field_images {
              alt
              title
            }
            field_quotes
            relationships {
              component_type {
                name
              }
              field_images {
                id
                localFile {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 800, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    squareImage: gatsbyImageData(
                      width: 700
                      height: 700
                      transformOptions: { cropFocus: CENTER }
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
          ... on component__contact_form {
            id
            field_header_text
            field_subhead_text
            relationships {
              component_type {
                name
              }
            }
          }
          ... on component__hero {
            id
            field_header_text
            field_body {
              processed
            }
            field_primary_cta {
              url: uri
              text: title
            }
            field_primary_color {
              color
            }
            field_text_color
            relationships {
              component_type {
                name
              }
              field_media_background {
                id
                localFile {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 800, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    squareImage: gatsbyImageData(
                      width: 700
                      height: 700
                      transformOptions: { cropFocus: CENTER }
                      layout: CONSTRAINED
                    )
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

export default Landings;
