import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { fonts, mediaQueries } from '../../styles';
import { mediaQueriesMax } from '../../styles/css-utils';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import LogoGridSlider from '../LogoGrid/LogoGridSlider';

const ScrollingLogos = ({ data }) => {
  const { field_header_text: header } = data;
  const backgroundImage =
    data.relationships.field_media_background?.localFile.publicURL;
  const images = data.relationships.field_logos;

  const awardSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 20000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    draggable: false,
  };

  const awardStyle = css`
    justify-content: start;
    position: relative;
    padding: 0;

    .gatsby-image-wrapper {
      width: 100%;
    }
    ${mediaQueriesMax.phoneLarge} {
      margin: 20px auto;
    }

    .award-image {
      display: initial;
      ${mediaQueriesMax.phoneLarge} {
        display: none;
      }
    }
    .award-image-mobile {
      display: none;
      ${mediaQueriesMax.phoneLarge} {
        display: initial;
        max-height: 700px;
      }
    }
  `;

  const sectionBackgroundCSS = backgroundImage
    ? css`
        background-image: url(${backgroundImage});
      `
    : css``;

  const sectionCSS = css`
    padding: 88px 0;
    ${sectionBackgroundCSS}
  `;

  const awardsLogo = css`
    position: absolute;
    top: 0;

    > div {
      flex-wrap: nowrap;
      min-width: 400px;

      > div {
        margin-left: 0;
        margin-right: 0;
      }
    }

    .slick-slider {
      width: 100%;
      margin: auto;

      .slick-slide > div > div {
        margin-bottom: 0;
      }
    }

    img {
      margin: auto;
      padding: 0 25px;
    }
  `;

  return (
    <>
      <h3
        css={css`
          font-family: ${fonts.serif};
          text-align: center;
          font-size: xxx-large;
          ${mediaQueries.desktop} {
            line-height: 130px;
            font-size: 95px;
          }
          ${mediaQueriesMax.xs} {
            width: 75%;
            margin: auto;
          }
        `}
      >
        {header}
      </h3>
      <FullWidthSection css={[sectionCSS, awardStyle]}>
        <LogoGridSlider
          minHeight='0'
          styles={awardsLogo}
          logoset='awards'
          backgroundColor='none'
          sliderSettings={awardSliderSettings}
          images={images}
          isScrollingLogos
        />
      </FullWidthSection>
    </>
  );
};

ScrollingLogos.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ScrollingLogos;
