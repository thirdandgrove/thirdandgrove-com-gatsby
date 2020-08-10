/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import ProjectsSlider from '../../components/ProjectsSlider';
import LogoGrid from '../../components/LogoGrid';
import { colors } from '../../styles';
import SplitSection from '../../components/SplitSection';
import InsightsSlider from '../../components/InsightsSlider';
import Quote from '../../components/ContentBody/Quote';
import { partnersProjects, partnersSub } from '../../styles/custom-css';
import CTA from '../../components/CTA';

// eslint-disable-next-line react/prop-types
export default query => {
  const { insights, caseStudies } = query.data;

  return (
    <Layout
      headerData={{
        invert: true,
        label: 'End-to-End Agency — Deep Commerce Experience — Growth Focused',
        title: 'Get Shopify Plus without the limits.',
        color: colors.shopifyGreen,
        mobileMinHeight: '620px',
        width: '480px',
        titlePadding: '0 100px',
      }}
    >
      <FullWidthSection height='400px' align='left' css={partnersSub}>
        <h4>Scalable, commerce-first experiences</h4>
        <p>
          Commerce is increasingly less about selling and more about inspiring
          customers. We take the throttle off Shopify Plus to build experiences
          that you didn’t think were possible.
        </p>
        <div>
          <ul>
            <li>Bespoke Shopify store</li>
            <li>Migration</li>
            <li>Ongoing support &amp; optimization</li>
          </ul>
          <ul>
            <li>Custom apps &amp; integrations</li>
            <li>CRO</li>
            <li>Custom subscriptions/checkout</li>
          </ul>
        </div>
      </FullWidthSection>
      <ProjectsSlider
        data={caseStudies}
        backgroundColor={colors.lightgray}
        tech='Shopify'
      />
      <LogoGrid
        logoset='shopify'
        title='Some of Our Shopify Clients'
        backgroundColor={colors.white}
        minHeight='0'
      />
      <SplitSection gridColumnGap='16px' css={partnersProjects}>
        <article>
          <h2>Conquer complexity</h2>
          <p>
            Shopify is not complex, but your integration may be. We’ve pioneered
            robust integrations for both back and front-end experiences.
          </p>
        </article>
        <article>
          <h2>Maximize your budget</h2>
          <p>
            Minimize your build investment and reinvest into initiatives that
            move the needle. (We can help with that too).
          </p>
        </article>
        <article>
          <h2>Global first</h2>
          <p>
            Companies need to think globally to compete. We’ll help you lay the
            foundation from day one.
          </p>
        </article>
        <article>
          <h2>Automate with flow</h2>
          <p>
            Automation is about more than just saving time. We leverage Shopify
            Flow to create automated processes that create raving fans and big
            spenders.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote: `Working with Third and Grove has been nothing short of phenomenal. They've successfully built solutions and delivered experiences that help merchants win.`,
          field_footer_text: 'Rob Barr, Agency Partnerships, ReCharge Payments',
        }}
      />
      <InsightsSlider
        data={insights}
        showButton={false}
        backgroundColor={colors.lightgray}
      />
      <CTA />
    </Layout>
  );
};

export const query = graphql`
  {
    insights: allInsight(
      sort: { fields: created, order: DESC }
      limit: 5
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
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
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
              childImageSlideMobile: childImageSharp {
                fluid(maxWidth: 325, maxHeight: 250) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
              childImageSlideDesktop: childImageSharp {
                fluid(maxWidth: 450, maxHeight: 400) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
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
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                        presentationWidth
                        presentationHeight
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
    caseStudies: allCaseStudy(
      limit: 5
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
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
                fluid(maxWidth: 850, maxHeight: 850) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 335, height: 260) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 450, height: 320) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 380, height: 420) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 420, height: 340) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
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
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 1, height: 1) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 250, height: 180) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 340, height: 260) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 270, height: 210) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
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
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 1, height: 1) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 250, height: 495) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 230, height: 210) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 320, height: 210) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
