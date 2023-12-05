/* eslint-disable no-plusplus */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import ProjectsSlider from '../components/ProjectsSlider';
import InsightsSlider from '../components/InsightsSlider';
import CapabilitiesSlider from '../components/CapabilitiesSlider';
import LogoGrid from '../components/LogoGrid';
import SplitSection from '../components/SplitSection';
import { ContactUs, BeUs } from '../components/Prefooter';
import { colors } from '../styles';
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
      sort: { created: DESC }
      limit: 8
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        ...CaseStudyFragment
      }
    }
    allInsight(
      sort: { created: DESC }
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
            gatsbyImageData(
              height: 400
              width: 530
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageSlideMobile: childImageSharp {
            gatsbyImageData(
              height: 250
              width: 325
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageSlideDesktop: childImageSharp {
            gatsbyImageData(
              height: 400
              width: 450
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
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
                  gatsbyImageData(width: 500, height: 500, layout: FIXED)
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
            gatsbyImageData(
              width: 850
              height: 850
              transformOptions: { cropFocus: NORTH }
              layout: FIXED
            )
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(
              height: 260
              width: 335
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              height: 320
              width: 450
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              height: 420
              width: 380
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              height: 340
              width: 420
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
        }
      }
      field_secondary_image {
        id
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 500, height: 500, layout: FIXED)
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(width: 1, height: 1, layout: FIXED)
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              height: 180
              width: 250
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              height: 260
              width: 340
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              height: 210
              width: 270
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
        }
      }
      field_tertiary_image {
        id
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 500, height: 500, layout: FIXED)
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(width: 1, height: 1, layout: FIXED)
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              height: 495
              width: 250
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              height: 210
              width: 230
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              height: 210
              width: 320
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
        }
      }
    }
  }
`;
