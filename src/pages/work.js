import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import mp4 from '../../static/thirdgrove-work.mp4';
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
              <GatsbyImage
                image={
                  study.relationships.field_image.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={study.field_image.alt}
                imagestyle={{ transform, opacity }}
                css={css`
                  width: 100%;
                  margin-bottom: 20px;

                  ${mediaQueries.phoneLarge} {
                    flex: 0 0 64%;
                    width: 64%;
                    margin-bottom: 0;
                  }
                `}
              />
            )}
          </Spring>

          <div
            css={css`
              position: relative;

              ${mediaQueries.phoneLarge} {
                flex: 0 0 32%;
                width: 32%;
              }

              &::after {
                content: ' ';
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

const Work = () => {
  const {
    allEntitySubqueueCaseStudies,
    allNodeHomePage,
  } = useStaticQuery(graphql`
    {
      allEntitySubqueueCaseStudies {
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
        width
        height
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
                transformOptions: { cropFocus: CENTER }
                layout: CONSTRAINED
                width: 1250
                height: 850
              )
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
      <VideoSection url={allNodeHomePage.edges[0].node.field_video} mp4={mp4} />
      {studies.map((study, index) => (
        <Project study={study} index={index} key={study.id} />
      ))}
      <CTA />
    </Layout>
  );
};

export default Work;
