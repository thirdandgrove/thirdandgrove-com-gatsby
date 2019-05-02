import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import css from '@emotion/core';

import ArticlePreview from '../ArticlePreview';
import FullWidthSection from '../FullWidthSection';

const Insights = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StaticQuery
      query={graphql`
        {
          allNodeArticle(sort: { fields: created, order: DESC }, limit: 10) {
            nodes {
              title
              body {
                processed
                summary
              }
              path {
                alias
              }
              created(formatString: "MMMM DD YYYY")
              relationships {
                uid {
                  name
                  field_last_name
                  field_first_name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <FullWidthSection height='900px'>
          <Slider
            {...settings}
            css={css`
              max-width: 100%;
              max-height: 100%;
            `}
          >
            {data.allNodeArticle.nodes.map(node => {
              return <ArticlePreview article={node} />;
            })}
          </Slider>
        </FullWidthSection>
      )}
    />
  );
};

export default Insights;
