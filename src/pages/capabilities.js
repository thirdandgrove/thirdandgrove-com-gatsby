import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

import {
  fonts,
  mediaQueries,
  jsBreakpoints,
  container,
  weights,
} from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { useHasBeenVisible } from '../hooks/useVisibility';

const Capability = ({ imageSrc, imageAlt, content, index }) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);

  return (
    <FullWidthSection
      ref={nodeRef}
      height='0'
      padding='0'
      textAlign='left'
      css={css`
        &:first-of-type {
          margin-top: 20px;

          ${mediaQueries.phoneLarge} {
            margin-top: 175px;
          }
        }
      `}
    >
      <div css={container.medium}>
        <div
          css={css`
            display: block;
            margin-bottom: 90px;

            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              flex-direction: ${index % 2 ? 'row-reverse' : 'row'};
              align-items: center;
              margin-bottom: 170px;
            }

            h2 {
              font-size: 2.0625rem; /* 33px */
              font-weight: ${weights.bold};
            }

            p {
              font-weight: ${weights.light};
            }

            ul {
              margin: 0;
              li {
                font-family: ${fonts.sans};
                font-weight: ${weights.bold};
                font-variant-caps: all-small-caps;
                letter-spacing: 1px;
                list-style: none;
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
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex-basis: ${index % 2 ? '64%' : '49%'};
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
                flex-grow: 0;
                flex-shrink: 0;
                flex-basis: ${index % 2 ? '30%' : '40%'};
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
};

const CapabilitiesPage = ({ data }) => {
  return (
    <Layout
      headerData={{
        title: `All the stuff we’re good at.`,
        mobileMinHeight: '93vh',
        height: '400px',
      }}
    >
      <Capability
        imageSrc={[
          data.technologyImageMobile.childImageSharp.fluid,
          {
            ...data.technologyImageDesktop.childImageSharp.fluid,
            media: `(min-width: ${jsBreakpoints.phoneLarge}px)`,
          },
        ]}
        imageAlt='Laptop on desk with drink'
        content={
          <>
            <h2>Technology</h2>
            <p>
              Work with the best engineers in the room—no matter what room
              you’re in. Our engineers are writing and discovering the future of
              digital excellence.
            </p>
            <ul>
              <li>Front-End Development</li>
              <li>Back-End Development</li>
              <li>Content Management</li>
              <li>Drupal</li>
              <li>Gatsby</li>
              <li>Shopify</li>
            </ul>
          </>
        }
        index={0}
      />
      <Capability
        imageSrc={[
          data.strategyImageMobile.childImageSharp.fluid,
          {
            ...data.strategyImageDesktop.childImageSharp.fluid,
            media: `(min-width: ${jsBreakpoints.phoneLarge}px)`,
          },
        ]}
        imageAlt='Two office workers looking at a chart on a laptop'
        content={
          <>
            <h2>Strategy</h2>
            <p>
              The foundation for great work. Know your customer, your goals, and
              how to reach them.
            </p>
            <ul>
              <li>Digital Strategy</li>
              <li>Trends &amp; Insights</li>
              <li>Customer Research</li>
              <li>Industry Research</li>
              <li>Analytics / Data / SEO</li>
              <li>Omnichannel Strategy</li>
            </ul>
          </>
        }
        index={1}
      />
      <Capability
        imageSrc={[
          data.creativeImageMobile.childImageSharp.fluid,
          {
            ...data.creativeImageDesktop.childImageSharp.fluid,
            media: `(min-width: ${jsBreakpoints.phoneLarge}px)`,
          },
        ]}
        imageAlt='Man drawing logos in a notebook'
        content={
          <>
            <h2>Creative</h2>
            <p>
              Where data, culture, and good looks come together. Create the
              strongest connection to the brand experience, and look good doing
              it.
            </p>
            <ul>
              <li>Art Direction</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Social Content</li>
              <li>Content Development</li>
              <li>Interaction / Motion</li>
            </ul>
          </>
        }
        index={2}
      />
    </Layout>
  );
};

export const query = graphql`
  query CapabilitiesQuery {
    technologyImageMobile: file(relativePath: { eq: "technology-mobile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    technologyImageDesktop: file(relativePath: { eq: "technology.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    strategyImageMobile: file(relativePath: { eq: "strategy-mobile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    strategyImageDesktop: file(relativePath: { eq: "strategy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    creativeImageMobile: file(relativePath: { eq: "creative-mobile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    creativeImageDesktop: file(relativePath: { eq: "creative.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default CapabilitiesPage;

CapabilitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
};
