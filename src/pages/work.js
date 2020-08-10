/* eslint-disable eslint no-nested-ternary */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import { FakeButton } from '../components/Button';
import { weights, mediaQueries, container, fonts } from '../styles';
import FullWidthSection from '../components/FullWidthSection';
import { useHasBeenVisible } from '../hooks/useVisibility';
import VideoSection from '../components/VideoSection';
import { ensureTrailingSlash } from '../util';
import CTA from '../components/CTA';

const Project = ({ study, index }) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);
  return (
    <FullWidthSection
      ref={nodeRef}
      height='0'
      padding='0'
      textAlign='left'
      css={css`
        &:nth-child(2) {
          margin-top: 20px;

          ${mediaQueries.phoneLarge} {
            margin-top: 175px;
          }
        }
      `}
    >
      <div css={container.medium}>
        <Link
          to={ensureTrailingSlash(study.path.alias)}
          css={css`
            display: block;
            margin-bottom: 125px;

            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              flex-direction: ${index % 2 ? 'row' : 'row-reverse'};
              align-items: center;
              margin-bottom: 170px;
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
                fluid={
                  study.relationships.field_image.localFile.childImageSharp
                    .fluid
                }
                alt={study.field_image.alt}
                style={{ transform, opacity }}
                css={css`
                  width: 100%;
                  margin-bottom: 20px;

                  ${mediaQueries.phoneLarge} {
                    flex: 0 0 ${index % 2 ? '64%' : index === 0 ? '64%' : '49%'};
                    width: ${index % 2 ? '64%' : index === 0 ? '64%' : '49%'};
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

              &::after {
                content: '+';
                position: absolute;
                right: 0;
                top: 0;
                font-size: 15px;
                line-height: 1.8;
                font-weight: ${weights.bold};
                font-family: ${fonts.sans};

                ${mediaQueries.phoneLarge} {
                  display: none;
                }
              }
            `}
          >
            <h2
              css={css`
                margin-bottom: 0;
                font-size: 21px;
                line-height: 1.4;
                font-weight: ${weights.bold};

                ${mediaQueries.phoneLarge} {
                  font-size: 33px;
                }
              `}
            >
              {study.title}
            </h2>
            <h3
              css={css`
                width: 75%;
                font-size: 16px;
                line-height: 1.6;
                font-weight: ${weights.thin};
                font-family: ${fonts.sans};
                letter-spacing: 0.2px;

                ${mediaQueries.phoneLarge} {
                  width: auto;
                  margin-bottom: 50px;
                  line-height: 1.69;
                }
              `}
            >
              {study.field_subtitle}
            </h3>
            <FakeButton
              css={css`
                display: none;

                ${mediaQueries.phoneLarge} {
                  display: inline-block;
                }
              `}
            >
              View Case Study
            </FakeButton>
          </div>
        </Link>
      </div>
    </FullWidthSection>
  );
};

Project.propTypes = {
  study: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default () => {
  const {
    allEntitySubqueueCaseStudies,
    allNodeHomePage,
  } = useStaticQuery(graphql`
    {
      allEntitySubqueueCaseStudies(limit: 6) {
        nodes {
          relationships {
            items {
              ...CaseStudyFragmentHere
            }
          }
        }
      }
      allNodeHomePage(limit: 1) {
        edges {
          node {
            field_video
            field_video_short
          }
        }
      }
    }
    fragment CaseStudyFragmentHere on case_study {
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
              fluid(maxWidth: 1250, maxHeight: 850, cropFocus: NORTH) {
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
  `);
  const studies = allEntitySubqueueCaseStudies.nodes[0].relationships.items;

  return (
    <Layout
      headerData={{
        title: 'We work with brands we love.',
        mobileMinHeight: '93vh',
        height: '400px',
      }}
    >
      <VideoSection
        url={allNodeHomePage.edges[0].node.field_video}
        teaser={allNodeHomePage.edges[0].node.field_video_short}
      />
      {studies.map((study, index) => (
        <Project study={study} index={index} key={study.id} />
      ))}
      <CTA />
    </Layout>
  );
};
