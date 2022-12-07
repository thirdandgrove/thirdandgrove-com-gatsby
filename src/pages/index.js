/* eslint-disable no-plusplus */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';

import Layout from '../components/layout';
import ProjectsSlider from '../components/ProjectsSlider';
import InsightsSlider from '../components/InsightsSlider';
import CapabilitiesSlider from '../components/CapabilitiesSlider';
import LogoGrid from '../components/LogoGrid';
import SplitSection from '../components/SplitSection';
import { ContactUs, BeUs } from '../components/Prefooter';
import { colors, mediaQueries } from '../styles';
import { useHasBeenVisible } from '../hooks/useVisibility';
import FullWidthSection from '../components/FullWidthSection';
import { NewsletterFullWidthSection } from '../components/NewsletterForm';

const Index = ({ data }) => {
  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);

  // Silly holiday treat.
  const today = new Date();
  const isThanksgiving = today.getMonth() === 10 && today.getDate() === 24;
  const isDayBeforeThanksgiving =
    today.getMonth() === 10 && today.getDate() === 23;
  const isDayAfterThanksgiving =
    today.getMonth() === 10 && today.getDate() === 25;

  return (
    <Layout
      headerData={{
        metaTitle: `We are an obsessive digital innovation company`,
        title: (
          <>
            {' '}
            Building delightful,
            <br />
            award-winning&nbsp;{' '}
            {isDayBeforeThanksgiving ||
            isThanksgiving ||
            isDayAfterThanksgiving ? (
              <>
                <span role='img' aria-label='turkey'>
                  🦃&nbsp;
                </span>
                <span role='img' aria-label='fork and knife with plate'>
                  🍽
                </span>
              </>
            ) : (
              `experiences`
            )}
          </>
        ),
        mobileMinHeight: '93vh',
      }}
    >
      {' '}
      <ProjectsSlider
        data={{
          nodes:
            data.allEntitySubqueueCaseStudySliderHomepage.nodes[0].relationships
              .items,
        }}
      />
      <CapabilitiesSlider
        title='What We Do'
        backgroundColor={colors.lightblue}
      />
      <LogoGrid
        logoset='partners'
        title='Our Partners'
        minHeight='100px !important'
        defaultItemWidth='20%'
        styles={css`
          > div {
            align-items: flex-start;
            height: 100%;

            ${mediaQueries.phoneLarge} {
              margin-bottom: 0;
            }
          }
          > div > div {
            margin-bottom: 70px;

            ${mediaQueries.phoneLarge} {
              margin-bottom: 0;
            }
          }
        `}
      />
      {hasScrolled || isScrolling ? (
        <>
          <InsightsSlider data={data.allInsight} />
          <LogoGrid title='A Few of Our Friends' />
          <LogoGrid
            backgroundColor={colors.lightblue}
            logoset='partnersCertified'
            title='Our Expertise'
            minHeight='100px !important'
            defaultItemWidth='20%'
            styles={css`
              > div {
                align-items: flex-start;
                height: 100%;

                ${mediaQueries.phoneLarge} {
                  margin-bottom: 0;
                }
              }
              > div > div {
                margin-bottom: 70px;

                ${mediaQueries.phoneLarge} {
                  margin-bottom: 0;
                }
              }
            `}
          />
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

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    allEntitySubqueueCaseStudySliderHomepage {
      nodes {
        relationships {
          items {
            ...CaseStudyFragment
          }
        }
      }
    }
    allCaseStudy(
      sort: { fields: created, order: DESC }
      limit: 8
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        ...CaseStudyFragment
      }
    }
    allInsight(
      sort: { fields: created, order: DESC }
      limit: 4
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
