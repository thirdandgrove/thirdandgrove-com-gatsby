/* eslint-disable prefer-template */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Slider from 'react-slick';

import { mediaQueries, fonts, weights } from '../../styles';
import ProjectPreview from '../ProjectPreview';
import FullWidthSection from '../FullWidthSection';

const ProjectsSlider = ({ backgroundColor }) => {
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
    dots: false,
    infinite: true,
    speed: 0,
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
      backgroundColor={backgroundColor}
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
            opacity: 0.7;
            transition: 0.3s ease opacity;

            ${mediaQueries.phoneLarge} {
              bottom: 80px;
            }

            &:hover,
            &:focus {
              opacity: 1;
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
              margin-left: -555px;
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

ProjectsSlider.propTypes = {
  backgroundColor: PropTypes.string,
};

ProjectsSlider.defaultProps = {
  backgroundColor: 'none',
};

export default ProjectsSlider;
