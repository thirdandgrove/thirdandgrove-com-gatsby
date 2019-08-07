import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors, mediaQueries, smSectionHead } from '../../styles';
import ArticlePreviewSlide from '../ArticlePreviewSlide';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';

const InsightsSlider = ({ showButton, backgroundColor, title, data }) => {
  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
    centerPadding: 90,
    infinite: true,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerPadding: 10,
        },
      },
    ],
  };
  return (
    <FullWidthSection
      height='0'
      css={css`
        padding-top: 25px;
        padding-bottom: 60px;
        padding-left: 0;
        padding-right: 0;
        background-color: ${backgroundColor};

        ${mediaQueries.phoneLarge} {
          padding-bottom: 115px;
          padding-top: 90px;
        }
      `}
    >
      <h2 css={smSectionHead}>{title}</h2>
      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
          margin-bottom: 65px;

          .slick-list {
            ${mediaQueries.phoneLarge} {
              padding: 0 90px;
            }
          }

          .slick-arrow {
            top: auto;
            bottom: -50px;
            width: 20px;
            height: 16px;
            z-index: 999;
            opacity: 0.7;
            transition: 0.3s ease opacity;

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
            right: calc(50% + 7.5px);
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
            left: calc(50% + 7.5px);
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
        {data &&
          data.nodes.map((node, index) => {
            return (
              <ArticlePreviewSlide
                key={node.title}
                article={node}
                index={index}
              />
            );
          })}
      </Slider>
      {showButton && (
        <Button onClick={() => navigate(`/insights/`)}>Our Insights</Button>
      )}
    </FullWidthSection>
  );
};

InsightsSlider.propTypes = {
  showButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object.isRequired,
};

InsightsSlider.defaultProps = {
  showButton: true,
  backgroundColor: colors.white,
  title: `Insights`,
};

export default InsightsSlider;
