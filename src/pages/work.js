import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Button from '../components/Button';
import { colors, weights, mediaQueries } from '../styles';
import FullWidthSection from '../components/FullWidthSection';
import VisibilitySensor from '../components/VisibilitySensor/VisibilitySensor';

export default () => {
  const BrandList = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-around;
    padding-top: 2rem;
  `;
  const data = useStaticQuery(graphql`
    {
      allCaseStudy {
        nodes {
          ...CaseStudyFragment
        }
      }
      allTaxonomyTermCaseStudyTags {
        nodes {
          id
          name
        }
      }
    }
  `);
  const studies = data.allCaseStudy.nodes;
  return (
    <Layout
      headerData={{
        children: (
          <BrandList>
            <p>Google</p>
            <p>Quicken</p>
            <p>Benefit</p>
          </BrandList>
        ),
        title: 'We work with brands we love.',
      }}
    >
      {studies.map((study, idx) => (
        <FullWidthSection height='0' key={study.id}>
          <div>
            <Link
              to={study.path.alias}
              css={css`
                text-decoration: none;
                color: ${colors.darkgrayFaded};
                transition: 0.3s ease color;

                &:hover,
                &:focus {
                  color: ${colors.darkgray};
                }
              `}
            >
              <VisibilitySensor
                once
                partialVisibility
                offset={{ bottom: -100 }}
              >
                {({ isVisible }) => (
                  <Spring
                    delay={0}
                    to={{
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(200px)',
                      opacity: isVisible ? '1' : '0',
                    }}
                  >
                    {({ transform, opacity }) => (
                      <Img
                        fluid={
                          study.relationships.field_image.localFile
                            .childImageSharp.fluid
                        }
                        style={{ transform, opacity }}
                      />
                    )}
                  </Spring>
                )}
              </VisibilitySensor>

              <div>
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
      ))}
    </Layout>
  );
};
