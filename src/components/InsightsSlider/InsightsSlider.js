import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import { css } from '@emotion/core';

import ArticlePreview from '../ArticlePreview';
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
  return (
    <StaticQuery
      query={graphql`
        {
          allInsight {
            nodes {
              id
              title
              field_inverse_header
              created(formatString: "MMMM DD YYYY")
              relationships {
                node_type {
                  name
                }
                uid {
                  name
                }
                field_components {
                  ... on component__text {
                    relationships {
                      component_type {
                        name
                      }
                    }
                    field_body {
                      processed
                    }
                  }
                  ... on component__image {
                    relationships {
                      component_type {
                        name
                      }
                      field_image {
                        localFile {
                          publicURL
                        }
                      }
                    }
                  }
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
            {data.allInsight.nodes.map(node => {
              return <ArticlePreview key={node.title} article={node} />;
            })}
          </Slider>
        </FullWidthSection>
      )}
    />
  );
};

export default InsightsSlider;
