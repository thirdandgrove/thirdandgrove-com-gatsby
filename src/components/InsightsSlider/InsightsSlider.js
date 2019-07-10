import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors, mediaQueries, smSectionHead } from '../../styles';
import ArticlePreviewSlide from '../ArticlePreviewSlide';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';

const InsightsSlider = ({ showButton, backgroundColor, title }) => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
    centerPadding: 100,
    infinite: true,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerPadding: 20,
        },
      },
    ],
  };
  const data = useStaticQuery(graphql`
    {
      allInsight {
        nodes {
          ...InsightFragment
        }
      }
    }
  `);
  return (
    <FullWidthSection
      height='0'
      css={css`
        padding-top: 25px;
        padding-bottom: 60px;
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
          margin-bottom: 75px;

          .slick-list {
            padding: 0 20px;

            ${mediaQueries.phoneLarge} {
              padding: 0 100px;
            }
          }
        `}
      >
        {data.allInsight.nodes.map((node, index) => {
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
        <Button onClick={() => navigate(`/insights`)}>Our Insights</Button>
      )}
    </FullWidthSection>
  );
};

InsightsSlider.propTypes = {
  showButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};

InsightsSlider.defaultProps = {
  showButton: true,
  backgroundColor: colors.white,
  title: `Insights`,
};

export default InsightsSlider;
