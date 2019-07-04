import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Slider from 'react-slick';

import { mediaQueries } from '../../styles';

import ProjectPreview from '../ProjectPreview';
import FullWidthSection from '../FullWidthSection';

const ProjectsSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = useStaticQuery(graphql`
    {
      allCaseStudy {
        nodes {
          ...CaseStudyFragment
        }
      }
    }
  `);

  return (
    <FullWidthSection height='750px'>
      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
          padding-bottom: 125px;

          ${mediaQueries.phoneLarge} {
            padding-bottom: 0;
          }

          .slick-arrow {
            top: auto;
            bottom: 50px;
            width: 20px;
            height: 16px;
            z-index: 999;

            ${mediaQueries.phoneLarge} {
              bottom: 0;
            }

            &::before {
              display: none;
            }
          }

          .slick-prev {
            left: auto;
            right: 50%;
            background: url('/images/arrow-l.svg');

            ${mediaQueries.phoneLarge} {
              left: 20px;
              right: auto;
            }

            ${mediaQueries.desktop} {
              left: 50%;
              margin-left: -590px;
            }
          }

          .slick-next {
            left: 50%;
            right: auto;
            background: url('/images/arrow-r.svg');

            ${mediaQueries.phoneLarge} {
              left: 50px;
            }

            ${mediaQueries.desktop} {
              left: 50%;
              margin-left: -560px;
            }
          }
        `}
      >
        {data.allCaseStudy.nodes.map((node, i) => {
          return <ProjectPreview key={node.title} index={i} project={node} />;
        })}
      </Slider>
    </FullWidthSection>
  );
};

export default ProjectsSlider;
