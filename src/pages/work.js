import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Button from '../components/Button';
import { weights, mediaQueries, container, fonts } from '../styles';
import FullWidthSection from '../components/FullWidthSection';
import { useHasBeenVisible } from '../hooks/useVisibility';
import VideoSection from '../components/VideoSection';
import { ensureTrailingSlash } from '../util';

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
              flex-direction: ${index % 2 ? 'row-reverse' : 'row'};
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
            <h1
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
            </h1>
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
            <Button
              css={css`
                display: none;

                ${mediaQueries.phoneLarge} {
                  display: inline-block;
                }
              `}
            >
              View Case Study
            </Button>
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
  const { allCaseStudy, allNodeHomePage } = useStaticQuery(graphql`
    {
      allCaseStudy(filter: { field_hidden: { eq: false } }) {
        nodes {
          ...CaseStudyFragment
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
  `);
  const studies = allCaseStudy.nodes;

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
    </Layout>
  );
};
