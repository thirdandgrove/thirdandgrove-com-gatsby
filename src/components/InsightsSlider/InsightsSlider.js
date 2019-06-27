import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import { css } from '@emotion/core';

import ArticlePreviewSlide from '../ArticlePreviewSlide';
import FullWidthSection from '../FullWidthSection';

const InsightsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
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
    <FullWidthSection height='900px'>
      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
        `}
      >
        {data.allInsight.nodes.map(node => {
          return <ArticlePreviewSlide key={node.title} article={node} />;
        })}
      </Slider>
    </FullWidthSection>
  );
};

export default InsightsSlider;
