import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import { mediaQueries } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const ImageSlider = ({ data }) => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7500,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
    infinite: true,
    speed: 1000,
    slidesToShow: 3.25,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2.25,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };
  return (
    <FullWidthSection
      height='0'
      css={css`
        padding-top: 25px;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;

        ${mediaQueries.phoneLarge} {
          padding-bottom: 0;
          padding-top: 90px;
        }
      `}
    >
      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
          margin-bottom: 0;
          overflow: hidden;

          .slick-list {
            overflow: hidden;
            ${mediaQueries.desktop} {
              padding: 0 90px;
              overflow: hidden;
            }
          }

          .slick-list .slick-slide {
            padding-right: 15px;
          }
        `}
      >
        {data &&
          data.nodes.map(node => {
            return (
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                key={node.publicURL}
                alt='Boston'
              />
            );
          })}
      </Slider>
    </FullWidthSection>
  );
};

ImageSlider.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ImageSlider;
