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

// eslint-disable-next-line react/prop-types
export default query => {
  const { insights, caseStudies } = query.data;

  const Tripple = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    h2 {
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
          'Battle Tested Processes — Damn Good Engineers — Decoupled Pioneer',
        title: 'Building the biggest, most complex Drupal sites.',
        color: colors.drupalBlue,
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
        <h3>A leader and contributor since inception</h3>
        <p>
          We’re the only agency on Earth with a Drupal 8 core maintainer on our
          team. (Read: We know Drupal because we’re writing it.)
        </p>
        <div>
          <ul>
            <li>Drupal migration</li>
            <li>Replatform/redesign</li>
            <li>Content Migration</li>
          </ul>
          <ul>
            <li>Ongoing support</li>
            <li>Training and resource augmentation</li>
            <li>Performance optimization</li>
          </ul>
        </div>
      </FullWidthSection>
      <ProjectsSlider data={caseStudies} backgroundColor={colors.lightgray} />
      <LogoGrid
        logoset='drupal'
        title='Some of Our Drupal Clients'
        backgroundColor={colors.white}
        minHeight='0'
      />
      <SplitSection
        gridTemplateColumns='repeat(3, 1fr)'
        css={css`
          ${mediaQueries.phoneLarge} {
            ${container.textOnly}
            padding-top: 30px;
          }
        `}
      >
        <Tripple>
          <h2>1200+</h2>
          <p>Open Source Contributions</p>
        </Tripple>
        <Tripple>
          <h2>177,000+</h2>
          <p>Hours on D8</p>
        </Tripple>
        <Tripple>
          <h2>Drupal 9</h2>
          <p>Building it as we speak</p>
        </Tripple>
      </SplitSection>
      <SplitSection
        gridColumnGap='16px'
        css={css`
          ${container.min}
          ${mediaQueries.phoneLarge} {
            padding: 110px 0;
          }
          article {
            ${mediaQueries.phoneLarge} {
              padding-bottom: 30px;
            }
          }
          h2 {
            color: ${colors.reallydarkgray};
            font-family: ${fonts.sans};
            font-size: 21px;
            font-weight: ${weights.bold};
            margin-bottom: 14px;
          }
          p {
            font-weight: ${weights.light};
            margin-bottom: 50px;
            letter-spacing: -0.1px;
          }
        `}
      >
        <article>
          <h2>Drupal 8</h2>
          <p>
            See for yourself what a smooth migration feels like when we fully
            map out your existing setup/integrations, confirm our detailed game
            plan, and execute. We got you covered—we migrated one of the
            highest-trafficked sites in the world to Drupal in six weeks.
          </p>
        </article>
        <article>
          <h2>Decoupled</h2>
          <p>
            Build a cutting-edge site that takes the best of Drupal and modern
            front end tech (like Gatsby). Our engineers have worked on some of
            the largest decoupled Drupal builds, including the largest decoupled
            Drupal site ever.
          </p>
        </article>
        <article>
          <h2>Digital Experience Platform</h2>
          <p>
            Empower your team with Drupal will as the foundation of your Digital
            Experience Platform, enabling more personalized marketing, better
            customer analytics, and higher developer velocity.
          </p>
        </article>
        <article>
          <h2>Commerce</h2>
          <p>
            Redefine your digital experience with the right blend of content +
            commerce. You&apos;ll work with a team that understands commerce
            just as much as the tech.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote:
            'It’s a rare opportunity that an agency like TAG can fit in so well with our in-house team. The support, partnership, and commitment to creating a custom solution for our multi-lingual sites made all the difference in our successful launch.',
          field_footer_text:
            'Steve Reichgut,  Former Director of Web Engineering & Web Operations at Benefit Cosmetics',
        }}
      />
      <InsightsSlider
        data={insights}
        showButton={false}
        backgroundColor={colors.lightgray}
      />
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
