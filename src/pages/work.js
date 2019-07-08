import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Button from '../components/Button';
import { weights, mediaQueries, container } from '../styles';
import FullWidthSection from '../components/FullWidthSection';
import { useHasBeenVisible } from '../hooks/useVisibility';

const Project = ({ study, index }) => {
  const nodeRef = useRef();
  const isVisible = useHasBeenVisible(nodeRef);
  return (
    <FullWidthSection
      ref={nodeRef}
      height='0'
      css={css`
        &:first-child {
          margin-top: 40px;

          ${mediaQueries.phoneLarge} {
            margin-top: 175px;
          }
        }
      `}
    >
      <div css={container.medium}>
        <Link
          to={study.path.alias}
          css={css`
            display: block;
            margin-bottom: 40px;

            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              flex-direction: ${index % 2 ? 'row-reverse' : 'row'};
              align-items: center;
              margin-bottom: 175px;
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
              ${mediaQueries.phoneLarge} {
                flex-grow: 0;
                flex-shrink: 0;
                flex-basis: ${index % 2 ? '30%' : '45%'};
                width: ${index % 2 ? '30%' : '45%'};
              }
            `}
          >
            <h1
              css={css`
                margin-bottom: 0;
                font-size: 27px;
                line-height: 1;
                font-weight: ${weights.bold};

                ${mediaQueries.phoneLarge} {
                  font-size: 48px;
                }
              `}
            >
              {study.title}
            </h1>
            <h3
              css={css`
                font-size: 21px;
                line-height: 1.6;
                font-weight: ${weights.thin};

                ${mediaQueries.phoneLarge} {
                  font-size: 30px;
                }
              `}
            >
              {study.field_subtitle}
            </h3>
            <Button>View Case Study</Button>
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
  const data = useStaticQuery(graphql`
    {
      allCaseStudy {
        nodes {
          ...CaseStudyFragment
        }
      }
    }
  `);
  const studies = data.allCaseStudy.nodes;
  return (
    <Layout
      headerData={{
        title: 'We work with brands we love.',
        height: '450px',
      }}
    >
      {studies.map((study, index) => (
        <Project study={study} index={index} key={study.id} />
      ))}
    </Layout>
  );
};
