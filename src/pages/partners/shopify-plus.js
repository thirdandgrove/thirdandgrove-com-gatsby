import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import LogoGrid from '../../components/LogoGrid';
import ProjectsSlider from '../../components/ProjectsSlider';
import CTA from '../../components/CTA';
import CTAGrid from '../../components/CTAGrid';
import { useHasBeenVisible } from '../../hooks/useVisibility';
import { colors, container, fonts, mediaQueries, weights } from '../../styles';
import { partnersSub } from '../../styles/custom-css';

const Capability = ({ imageSrc, imageAlt, content, index, id }) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  return (
    <FullWidthSection
      ref={nodeRef}
      height='0'
      padding='0'
      textAlign='left'
      css={css`
        ${container.max}
        &:first-of-type {
          margin-top: 20px;

          ${mediaQueries.phoneLarge} {
            margin-top: 175px;
          }
        }
      `}
    >
      <div id={id} css={container.max}>
        <div
          css={css`
            margin-bottom: 90px;

            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              flex-direction: ${index % 2 ? 'row-reverse' : 'row'};
              align-items: center;
              margin-bottom: 170px;
            }

            h2 {
              font-size: 33px;
              font-weight: ${weights.bold};
            }

            ul {
              margin: 0;

              li {
                font-size: 15px;
                font-family: ${fonts.sans};
                font-weight: ${weights.medium};
                font-variant-caps: all-small-caps;
                letter-spacing: 1px;
                list-style: none;
                margin-bottom: 6px;
              }
            }
          `}
        >
          <Spring
            delay={0}
            to={{
              transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
              opacity: isVisible ? '1' : '0',
            }}
          >
            {({ transform, opacity }) => (
              <Img
                fluid={imageSrc}
                alt={imageAlt}
                style={{ transform, opacity }}
                css={css`
                  width: 100%;
                  margin-bottom: 20px;

                  > div {
                    padding-bottom: 100% !important;
                  }

                  ${mediaQueries.phoneLarge} {
                    flex: 0 0 ${index % 2 ? '64%' : '49%'};
                    width: ${index % 2 ? '64%' : '49%'};
                    margin-bottom: 0;

                    > div {
                      padding-bottom: ${index % 2 ? '76% !important' : '100%'};
                      padding-bottom: ${index % 4 === 2
                        ? '131% !important'
                        : '100%'};
                    }
                  }
                `}
              />
            )}
          </Spring>

          <div
            css={css`
              position: relative;

              ${mediaQueries.phoneLarge} {
                flex: 0 0 ${index % 2 ? '30%' : '40%'};
                width: ${index % 2 ? '30%' : '40%'};
              }
            `}
          >
            {content}
          </div>
        </div>
      </div>
    </FullWidthSection>
  );
};

Capability.propTypes = {
  imageSrc: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default query => {
  const { caseStudies, allShopifyPlusCtaGridFourJson, allFile } = query.data;

  return (
    <Layout
      headerData={{
        title: 'Ecommerce that converts',
        color: colors.yellow,
        mobileMinHeight: '707px',
        width: '480px',
        titlePadding: '0 100px',
      }}
    >
      <FullWidthSection height='400px' align='left' css={partnersSub}>
        <h4>Shopify Plus</h4>
      </FullWidthSection>
      <CTA
        headline={
          <>
            The premier Shopify
            <br />
            Plus-Certified Agency
          </>
        }
        subTitle={
          <>
            We build brands through goal-busting experiences.
            <br />
            Ready to get started?
          </>
        }
        cta="LET'S Talk"
        headlineStyle={css`
          font-size: 3rem;
        `}
        subTitleStyle={css`
          text-align: center;
        `}
        padding='238px 20px'
      />
      <CTAGrid
        items={allShopifyPlusCtaGridFourJson.edges}
        images={allFile.edges}
        gridColumns='1fr 1fr 1fr 1fr'
        altStyle={false}
        maxWidth
        invisibleCta
      />
      <Capability
        id='weknow'
        imageSrc={query.data.weKnowImageDesktop.childImageSharp.fluid}
        imageAlt='We know that one'
        content={
          <>
            <h2>Yeah. we know that one</h2>
            <div
              css={css`
                display: flex;
              `}
            >
              <ul>
                <li>SAP</li>
                <li>Net Suite</li>
                <li>Salesforce Marketing Cloud</li>
                <li>Salesforce CRM</li>
                <li>ReCharge</li>
                <li>Bold Apps</li>
                <li>Klaviyo</li>
                <li>Yotpo</li>
                <li>PowerReviews</li>
                <li>Shipstation</li>
                <li>AS/400</li>
              </ul>
              <ul>
                <li>ShipWorks</li>
                <li>Nosto</li>
                <li>Shogun</li>
                <li>Swell</li>
                <li>Loyalty Lion</li>
                <li>Smile.io</li>
                <li>Shippo</li>
                <li>Gorgias</li>
                <li>ZenDesk</li>
                <li>Drupal</li>
                <li>Wordpress</li>
              </ul>
            </div>
          </>
        }
        index={0}
      />
      <Capability
        id='migration'
        imageSrc={
          query.data.platformMigrationImageDesktop.childImageSharp.fluid
        }
        imageAlt='White shoe'
        content={
          <>
            <h2>Platform Migrations</h2>
            <ul>
              <li>Woo Commerce</li>
              <li>SAP Hybris</li>
              <li>Magento 1&2</li>
              <li>Oracle Commerce Cloud</li>
              <li>Salesforce Commerce Cloud</li>
            </ul>
          </>
        }
        index={1}
      />
      <LogoGrid
        logoset='shopifyPlus'
        title='Taking Names'
        backgroundColor={colors.lightgray}
        minHeight='0'
      />
      <ProjectsSlider
        data={caseStudies}
        backgroundColor={colors.white}
        tech='Shopify Plus'
      />
      <CTA headline="Now let's get you promoted" padding='127px 20px' />
    </Layout>
  );
};

export const query = graphql`
  {
    allShopifyPlusCtaGridFourJson {
      edges {
        node {
          icon
          title
          description
        }
      }
    }
    allFile(filter: { absolutePath: { regex: "/shopify-plus/" } }) {
      edges {
        node {
          name
          publicURL
          absolutePath
        }
      }
    }
    weKnowImageDesktop: file(relativePath: { eq: "we-know.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    platformMigrationImageDesktop: file(
      relativePath: { eq: "platform-migration.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    caseStudies: allCaseStudy(
      limit: 10
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
`;
