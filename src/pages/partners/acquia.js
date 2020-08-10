/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import ProjectsSlider from '../../components/ProjectsSlider';
import LogoGrid from '../../components/LogoGrid';
import {
  colors,
  mediaQueries,
  fonts,
  weights,
  container,
  pLight,
} from '../../styles';
import SplitSection from '../../components/SplitSection';
import InsightsSlider from '../../components/InsightsSlider';
import Quote from '../../components/ContentBody/Quote';
import CTA from '../../components/CTA';

// eslint-disable-next-line react/prop-types
export default query => {
  const { insights, caseStudies } = query.data;

  const Tripple = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    h1 {
      font-size: 48px;
      margin-bottom: 8px;

      ${mediaQueries.phoneLarge} {
        margin-bottom: 30px;
      }
    }
    p {
      ${pLight};
    }

    ${mediaQueries.phoneLarge} {
      justify-content: flex-start;
    }
  `;
  const sectionPadding = css`
    padding: 50px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 110px 0;
    }
  `;
  return (
    <Layout
      headerData={{
        invert: true,
        label:
          'Deep Integrations — Rich Personalization — Efficient Development',
        title: 'Squeeze every last drop out of your Acquia investment.',
        color: colors.acquiaBlue,
        mobileMinHeight: '620px',
      }}
    >
      <FullWidthSection
        height='400px'
        align='left'
        css={css`
          ${sectionPadding}
          h3 {
            font-family: ${fonts.sans};
            font-size: 18px;
            font-weight: ${weights.bold};
            line-height: 1.39;
            margin-bottom: 12px;
          }
          p {
            font-weight: ${weights.light};
          }
          div {
            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
            }
          }
          ul {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: ${fonts.sans};
            font-weight: ${weights.bold};
            list-style: none;

            ${mediaQueries.phoneLarge} {
              &:last-of-type {
                margin-right: 100px;
              }
            }

            li {
              margin-bottom: 4px;
              padding-left: 0;

              &:before {
                content: '—';
                padding-right: 2px;
              }
            }
          }

          ${mediaQueries.phoneLarge} {
            ${container.min}
          }
        `}
      >
        <h3>Team up with a partner who is tight with Acquia</h3>
        <p>
          We’ve invested over 130,000 hours on the Acquia platform (we’re good
          friends with the team by now but feel free to ask around). This means
          fewer conversations about development and more about how to improve
          visitor engagement.
        </p>
        <div>
          <ul>
            <li>Migration</li>
            <li>Replatform/redesign</li>
            <li>Personalization</li>
            <li>Performance optimization</li>
          </ul>
          <ul>
            <li>Ongoing support</li>
            <li>Infrastructure Audit</li>
            <li>Training and resource augmentation</li>
          </ul>
        </div>
      </FullWidthSection>
      <ProjectsSlider
        data={caseStudies}
        backgroundColor={colors.lightgray}
        tech='Acquia'
      />
      <LogoGrid
        logoset='acquia'
        title='Some of Our Acquia Clients'
        backgroundColor={colors.white}
        minHeight='0'
      />
      <SplitSection
        gridTemplateColumns='repeat(3, 1fr)'
        css={css`
          ${mediaQueries.phoneLarge} {
            ${container.textOnly}
            padding-top: 96px;
          }
        `}
      >
        <Tripple>
          <h1>100%</h1>
          <p>Acquia Certified</p>
        </Tripple>
        <Tripple>
          <h1>26+</h1>
          <p>Drupal 8 Projects Launched on Acquia</p>
        </Tripple>
        <Tripple>
          <h1>2014</h1>
          <p>Acquia MVP</p>
        </Tripple>
      </SplitSection>
      <SplitSection
        gridTemplateColumns='repeat(2, 350px)'
        css={css`
          ${container.min}
          ${mediaQueries.phoneLarge} {
            padding: 70px 0 0;
          }
          article {
            ${mediaQueries.phoneLarge} {
              &:first-child {
                padding-right: 20px;
              }
              &:last-of-type {
                width: 460px;
              }
            }
          }
          img {
            width: 100px;
            margin-bottom: 35px;
          }
          h2 {
            color: ${colors.reallydarkgray};
            font-family: ${fonts.sans};
            font-size: 21px;
            font-weight: bold;
            margin-bottom: 14px;
          }
          p {
            font-weight: ${weights.light};
            margin-bottom: 50px;

            ${mediaQueries.phoneLarge} {
              margin-bottom: 83px;
            }
          }
        `}
      >
        <article>
          <img src='/images/acquia-cloud.png' alt='cloud' />
          <h2>Acquia Cloud</h2>
          <p>
            Expertise with Cloud Hooks and APIs for faster, less error-prone
            development.
          </p>
        </article>
        <article>
          <img src='/images/acquia-lift.png' alt='lift' />
          <h2>Acquia Lift</h2>
          <p>
            Improve visitor engagement with an achievable &amp; data-driven
            personalization plan.
          </p>
        </article>
        <article>
          <img src='/images/mautic.png' alt='mautic' />
          <h2>Mautic (Marketing Automation)</h2>
          <p>
            Own your entire digital experience across every channel and
            interaction—whether at your desk, on the go, or sound asleep.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote:
            'Through their significant contributions to the Drupal ecosystem and to helping clients like Mint.com engage in new ways with their audience, Third & Grove have proven themselves to be an invaluable partner as the Acquia community continues to grow.',
          field_footer_text:
            'Joe Wykes - SVP Global Channels & eCommerce - Acquia',
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
