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

  // silly holiday treats
  // const today = new Date();
  // const isHalloween = today.getMonth() === 9 && today.getDate() === 31;
  // const isChristmas = today.getMonth() === 11 && today.getDate() === 25;

  return (
    <Layout
      headerData={{
        metaTitle: `We are an obsessive digital innovation company`,
        title: (
          <>
            {/* This is going to re-implemented after a couple weeks */}
            {/* A digital agency{' '} */}
            slaying the mundane,
            <br /> pixel by pixel.
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

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    allCaseStudy(
      sort: { fields: created, order: DESC }
      limit: 7
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
      field_image {
        id
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 530, height: 400, layout: CONSTRAINED)
          }
          childImageSlideMobile: childImageSharp {
            gatsbyImageData(width: 325, height: 250, layout: CONSTRAINED)
          }
          childImageSlideDesktop: childImageSharp {
            gatsbyImageData(width: 450, height: 400, layout: CONSTRAINED)
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
                  gatsbyImageData(width: 630, height: 630, layout: CONSTRAINED)
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
              layout: CONSTRAINED
            )
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(
              width: 335
              height: 260
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              width: 450
              height: 320
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              width: 380
              height: 420
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              width: 420
              height: 340
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
            gatsbyImageData(width: 850, height: 850, layout: CONSTRAINED)
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(width: 1, height: 1, layout: FIXED)
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              width: 250
              height: 180
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              width: 340
              height: 260
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              width: 270
              height: 210
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
            gatsbyImageData(width: 850, height: 850, layout: CONSTRAINED)
          }
          childImageMobile: childImageSharp {
            gatsbyImageData(width: 1, height: 1, layout: FIXED)
          }
          childImageTypeA: childImageSharp {
            gatsbyImageData(
              width: 250
              height: 495
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeB: childImageSharp {
            gatsbyImageData(
              width: 230
              height: 210
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
          childImageTypeC: childImageSharp {
            gatsbyImageData(
              width: 320
              height: 210
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
            )
          }
        }
      }
    }
  }
`;
