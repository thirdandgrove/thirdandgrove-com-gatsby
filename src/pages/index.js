/* eslint-disable react/jsx-one-expression-per-line */
import React, { useRef } from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
// import styled from '@emotion/styled';

import Layout from '../components/layout';
import ProjectsSlider from '../components/ProjectsSlider';
import WhatWeDo from '../components/WhatWeDo';
import InsightsSlider from '../components/InsightsSlider';
import CapabilitiesSlider from '../components/CapabilitiesSlider';
import LogoGrid from '../components/LogoGrid';
import SplitSection from '../components/SplitSection';
import { ContactUs, BeUs } from '../components/Prefooter';
import { mediaQueries, colors } from '../styles';
import { useHasBeenVisible } from '../hooks/useVisibility';
import FullWidthSection from '../components/FullWidthSection';
import { NewsletterFullWidthSection } from '../components/NewsletterForm';
import line from '../../static/images/line.png';

// eslint-disable-next-line react/prop-types
export default ({ data }) => {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);

  // silly holiday treats
  // const today = new Date();
  // const isHalloween = today.getMonth() === 9 && today.getDate() === 31;
  // const isChristmas = today.getMonth() === 11 && today.getDate() === 25;

  // const Underlined = styled.span`
  //   position: relative;

  //   &::after {
  //     content: '';
  //     display: block;
  //     position: absolute;
  //     height: 4px;
  //     left: -10px;
  //     width: calc(100% + 20px);
  //     top: 100%;
  //     background-image: ${isHalloween
  //       ? `url('/images/dripping_blood.gif')`
  //       : `url('/images/underline.png')`};
  //     background-size: ${isHalloween ? `cover` : `contain`};
  //     background-repeat: no-repeat;

  //     ${mediaQueries.phoneLarge} {
  //       top: auto;
  //       bottom: 0;
  //       height: 7px;
  //       left: -20px;
  //       width: calc(100% + 40px);
  //     }
  //   }
  // `;
  return (
    <Layout
      headerData={{
        metaTitle: `We are an obsessive digital innovation company`,
        title: (
          <>
            {/* This is going to re-implemented after a couple weeks */}
            {/* A digital agency{' '}
            <Underlined>{isChristmas ? `sleighing` : `slaying`}</Underlined> the
            mundane, one pixel at a time. */}
            Doing our{' '}
            <span
              css={css`
                position: relative;

                &::after {
                  content: '';
                  background-image: url(${line});
                  background-repeat: no-repeat;
                  background-size: contain;
                  position: absolute;
                  bottom: -3px;
                  left: 0;
                  width: 100%;
                  height: 8px;

                  ${mediaQueries.phoneLarge} {
                    bottom: 0;
                  }
                }
              `}
            >
              damndest
            </span>{' '}
            to make a difference, pixel by pixel.
            {/* Holy S%#*! that was fast.
            <br />
            (With{' '}
            <Link
              css={css`
                color: ${colors.darkgray};
                text-decoration: underline;
              `}
              to='/partners/gatsby/'
            >
              Gatsby
            </Link>{' '}
            it&apos;s all fire, no waiting) */}
          </>
        ),
        mobileMinHeight: '93vh',
      }}
    >
      {' '}
      <ProjectsSlider data={data.allCaseStudy} />
      <CapabilitiesSlider
        title='What We Do'
        backgroundColor={colors.lightblue}
      />
      {hasScrolled || isScrolling ? (
        <>
          <InsightsSlider data={data.allInsight} />
          <LogoGrid title='A Few of Our Friends' />
          <NewsletterFullWidthSection />
          <SplitSection>
            <ContactUs />
            <BeUs />
          </SplitSection>
        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}
    </Layout>
  );
};

// define fragments
export const query = graphql`
  {
    allCaseStudy(
      sort: { fields: created, order: DESC }
      limit: 5
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        ...CaseStudyFragment
      }
    }
    allInsight(
      sort: { fields: created, order: DESC }
      limit: 5
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        ...InsightFragment
      }
    }
  }
  fragment InsightFragment on insight {
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
        name
      }
      field_image {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 530, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          childImageSlideMobile: childImageSharp {
            fluid(maxWidth: 325, maxHeight: 250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          childImageSlideDesktop: childImageSharp {
            fluid(maxWidth: 450, maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
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
  fragment CaseStudyFragment on case_study {
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
`;
