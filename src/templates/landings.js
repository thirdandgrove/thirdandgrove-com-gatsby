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
  let post = data.landingPage;
  const imageSrc =
    post.relationships.field_image &&
    post.relationships.field_image.localFile &&
    post.relationships.field_image.localFile.childImageSharp &&
    post.relationships.field_image.localFile.childImageSharp.fluid;

  const backgroundColor = post.field_color && post.field_color.color;
  let headerData = {
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
  };
  const hero = post.relationships.field_components[0];
  post = post.relationships.field_components;
  if (hero.relationships.component_type.name === 'Hero') {
    const {
      field_header_text: title,
      field_primary_cta: cta,
      field_body: body,
      field_primary_color: { color },
      field_text_color: textColor,
    } = hero;
    const backgroundImage =
      hero?.relationships?.field_media_background?.localFile?.publicURL;

    headerData = {
      title,
      body: body.processed,
      cta: [cta],
      color,
      textColor,
      heroImage: backgroundImage,
      heroImageMobile: backgroundImage,
      mobileMinHeight: '93vh',
    };
    post = post.filter(x => x !== hero);
  }

  useEffect(() => updateExternalLinks(document.querySelectorAll('main a')), []);

  return (
    <Layout headerData={headerData}>
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
      {post.field_subtitle && (
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
      )}
      {post && <ContentBody comps={post} type='landing' />}
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
          ... on component__logo_wall {
            id
            field_header_text
            field_subhead_text
            field_primary_cta {
              url
              title
              uri
            }
            relationships {
              component_type {
                name
              }
              field_images_list {
                field_header_text
                field_description
                field_image {
                  alt
                }
                relationships {
                  field_image {
                    id
                    node: localFile {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 850, maxHeight: 850, cropFocus: NORTH) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                      childImageMobile: childImageSharp {
                        fixed(width: 335, height: 260, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeA: childImageSharp {
                        fixed(width: 450, height: 320, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeB: childImageSharp {
                        fixed(width: 380, height: 420, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeC: childImageSharp {
                        fixed(width: 420, height: 340, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on component__stats {
            id
            field_header_text
            relationships {
              component_type {
                name
              }
              field_stats {
                field_description
                field_stat
                field_character
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
          ... on component__scrolling_logos {
            id
            field_header_text
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
              field_logos {
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
          ... on component__scrolling_logos {
            id
            field_header_text
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
              field_logos {
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
          ... on component__full_width_video {
            id
            relationships {
              component_type {
                name
              }
              field_main_video {
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
              field_autoplay_video {
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
          ... on component__scrolling_logos {
            id
            field_header_text
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
              field_logos {
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
          ... on component__full_width_video {
            id
            relationships {
              component_type {
                name
              }
              field_main_video {
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
              field_autoplay_video {
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
          ... on component__core_values {
            id
            relationships {
              component_type {
                name
              }
            }
          }
          ... on component__icon_list_component {
            id
            field_header_text
            field_primary_color {
              color
            }
            field_text_color
            relationships {
              component_type {
                name
              }
              field_icon_item {
                title: field_icon_text
                icon: field_icon {
                  alt
                }
                relationships {
                  field_icon {
                    id
                    node: localFile {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 850, maxHeight: 850, cropFocus: NORTH) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                      childImageMobile: childImageSharp {
                        fixed(width: 335, height: 260, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeA: childImageSharp {
                        fixed(width: 450, height: 320, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeB: childImageSharp {
                        fixed(width: 380, height: 420, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeC: childImageSharp {
                        fixed(width: 420, height: 340, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on component__faq {
            id
            field_heading
            relationships {
              component_type {
                name
              }
              field_faq_item {
                field_faq_answer {
                  processed
                }
                field_faq_question
              }
            }
          }
          ... on component__case_study_showcase {
            id
            relationships {
              component_type {
                name
              }
              field_case_studies {
                id
                title
                field_subtitle
                field_inverse_header
                field_image_arrangement
                field_image {
                  alt
                }
                field_secondary_image {
                  alt
                }
                field_tertiary_image {
                  alt
                }
                path {
                  alias
                }
                relationships {
                  field_tags {
                    name
                  }
                  field_image {
                    id
                    localFile {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 850, maxHeight: 850, cropFocus: NORTH) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                      childImageMobile: childImageSharp {
                        fixed(width: 335, height: 260, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeA: childImageSharp {
                        fixed(width: 450, height: 320, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeB: childImageSharp {
                        fixed(width: 380, height: 420, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeC: childImageSharp {
                        fixed(width: 420, height: 340, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                    }
                  }
                  field_secondary_image {
                    id
                    localFile {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 850, maxHeight: 850) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                      childImageMobile: childImageSharp {
                        fixed(width: 1, height: 1) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeA: childImageSharp {
                        fixed(width: 250, height: 180, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeB: childImageSharp {
                        fixed(width: 340, height: 260, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeC: childImageSharp {
                        fixed(width: 270, height: 210, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                    }
                  }
                  field_tertiary_image {
                    id
                    localFile {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 850, maxHeight: 850) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                      childImageMobile: childImageSharp {
                        fixed(width: 1, height: 1) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeA: childImageSharp {
                        fixed(width: 250, height: 495, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeB: childImageSharp {
                        fixed(width: 230, height: 210, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                      childImageTypeC: childImageSharp {
                        fixed(width: 320, height: 210, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on component__services_component {
            id
            field_header_text
            field_image_align
            field_link_id
            field_image {
              alt
              title
            }
            field_body {
              processed
            }
            field_primary_cta {
              url
              title
              uri
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
            relationships {
              component_type {
                name
              }
              field_testimonial_slide {
                field_image {
                  alt
                  title
                }
                field_quote
                relationships {
                  field_image {
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
          }
          ... on component__featured_content {
            id
            field_header_text
            relationships {
              component_type {
                name
              }
              field_content {
                type: __typename
                ... on insight {
                  id
                  title
                  field_inverse_header
                  field_image {
                    alt
                  }
                  created(formatString: "MMM D, YYYY")
                  path {
                    alias
                  }
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
                          fluid(maxWidth: 530, maxHeight: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          gatsbyImageData(
                            height: 400
                            width: 530
                            transformOptions: { cropFocus: CENTER }
                            layout: FULL_WIDTH
                          )
                        }
                        childImageSlideMobile: childImageSharp {
                          fluid(maxWidth: 325, maxHeight: 250) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          gatsbyImageData(
                            height: 250
                            width: 325
                            transformOptions: { cropFocus: CENTER }
                            layout: FULL_WIDTH
                          )
                        }
                        childImageSlideDesktop: childImageSharp {
                          fluid(maxWidth: 450, maxHeight: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          gatsbyImageData(
                            height: 400
                            width: 450
                            transformOptions: { cropFocus: CENTER }
                            layout: FULL_WIDTH
                          )
                        }
                      }
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
                                fluid(maxWidth: 630, maxHeight: 630) {
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
                ... on case_study {
                  id
                  title
                  field_subtitle
                  field_inverse_header
                  field_image_arrangement
                  field_image {
                    alt
                  }
                  field_secondary_image {
                    alt
                  }
                  field_tertiary_image {
                    alt
                  }
                  path {
                    alias
                  }
                  relationships {
                    field_tags {
                      name
                    }
                    field_image {
                      id
                      localFile {
                        publicURL
                        childImageSharp {
                          fluid(
                            maxWidth: 850
                            maxHeight: 850
                            cropFocus: NORTH
                          ) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                        childImageMobile: childImageSharp {
                          fixed(width: 335, height: 260, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeA: childImageSharp {
                          fixed(width: 450, height: 320, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeB: childImageSharp {
                          fixed(width: 380, height: 420, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeC: childImageSharp {
                          fixed(width: 420, height: 340, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                      }
                    }
                    field_secondary_image {
                      id
                      localFile {
                        publicURL
                        childImageSharp {
                          fluid(maxWidth: 850, maxHeight: 850) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                        childImageMobile: childImageSharp {
                          fixed(width: 1, height: 1) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeA: childImageSharp {
                          fixed(width: 250, height: 180, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeB: childImageSharp {
                          fixed(width: 340, height: 260, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeC: childImageSharp {
                          fixed(width: 270, height: 210, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                      }
                    }
                    field_tertiary_image {
                      id
                      localFile {
                        publicURL
                        childImageSharp {
                          fluid(maxWidth: 850, maxHeight: 850) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                        childImageMobile: childImageSharp {
                          fixed(width: 1, height: 1) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeA: childImageSharp {
                          fixed(width: 250, height: 495, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeB: childImageSharp {
                          fixed(width: 230, height: 210, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                        childImageTypeC: childImageSharp {
                          fixed(width: 320, height: 210, cropFocus: CENTER) {
                            ...GatsbyImageSharpFixed_withWebp_noBase64
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on component__contact_form {
            id
            field_header_text
            field_subhead_text
            field_header_style
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
              url
              text: title
              uri
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
                    fluid(maxWidth: 630, maxHeight: 630) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
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
          ... on component__text_image_split {
            id
            field_body {
              processed
            }
            field_image {
              alt
            }
            field_primary_cta {
              url
              title
              uri
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
