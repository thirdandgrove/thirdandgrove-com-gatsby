import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import { css } from '@emotion/core';

import { jsBreakpoints, mediaQueries, weights } from '../../styles';
import ArticlePreviewSlide from '../ArticlePreviewSlide';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';

const InsightsSlider = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: 100,
    infinite: true,
    speed: 500,
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

        ${mediaQueries.phoneLarge} {
          padding-bottom: 115px;
          padding-top: 90px;
        }
      `}
    >
      <h2
        css={css`
          margin-bottom: 0;
          font-size: 21px;
          font-weight: ${weights.thin};
          letter-spacing: 0.23px;
          line-height: 76px;

          ${mediaQueries.phoneLarge} {
            margin-bottom: 30px;
            font-size: 36px;
            letter-spacing: 0.4px;
          }
        `}
      >
        Insights
      </h2>
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
        {data.allInsight.nodes.map(node => {
          return <ArticlePreviewSlide key={node.title} article={node} />;
        })}
      </Slider>
      <Button>Our Insights</Button>
    </FullWidthSection>
  );
};

// @todo link the button to the landing page
// @todo consolidate text styles for this h2 and the other hp section headings

export default InsightsSlider;
