/* eslint-disable prefer-template */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Slider from 'react-slick';

import { mediaQueries, fonts, weights } from '../../styles';
import ProjectPreview from '../ProjectPreview';
import FullWidthSection from '../FullWidthSection';

const ProjectsSlider = () => {
  const [count, setCount] = useState('01');

  const data = useStaticQuery(graphql`
    {
      allCaseStudy {
        nodes {
          ...CaseStudyFragment
        }
      }
    }
  `);

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: currentSlide => {
      // currentSlide starts at 0. Add 1 for human-readable slide number.
      let current = currentSlide + 1;
      // Add a leading zero if it's single-digit.
      current = current < 10 ? '0' + current : current;
      setCount(current);
    },
  };

  const totalSlides =
    data.allCaseStudy.nodes.length < 10
      ? '0' + data.allCaseStudy.nodes.length
      : data.allCaseStudy.nodes.length;

  const countStyles = css`
    position: absolute;
    bottom: 45px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 96px;
    text-align: center;
    font-size: 12px;
    line-height: 3.33;
    font-family: ${fonts.sans};
    font-weight: ${weights.regular};
    letter-spacing: 1px;

    ${mediaQueries.phoneLarge} {
      bottom: 75px;
    }
  `;

  return (
    <FullWidthSection
      height='750px'
      css={css`
        position: relative;
      `}
    >
      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
          padding-bottom: 120px;

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
              bottom: 80px;
            }

            &::before {
              display: none;
            }
          }

          .slick-prev {
            left: auto;
            right: calc(50% + 65px);
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
            left: calc(50% + 65px);
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
        {data.allCaseStudy.nodes.map(node => {
          return <ProjectPreview key={node.title} project={node} />;
        })}
      </Slider>
      <footer css={countStyles}>
        {count}
        &nbsp;-&nbsp;
        {totalSlides}
      </footer>
    </FullWidthSection>
  );
};

export default ProjectsSlider;
