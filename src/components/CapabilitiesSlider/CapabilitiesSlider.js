import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors, mediaQueries, smSectionHead } from '../../styles';
import FullWidthSection from '../FullWidthSection';

import CapabilitiesSlide from './CapabilitiesSlide';
import CapabilitiesSlideNav from './CapabilitiesSlideNav';
import slides from './CapabilitiesSlide.json';

const CapabilitiesSlider = ({ backgroundColor, title }) => {
  const settingsMain = {
    customPaging(i) {
      return (
        <button type='button'>
          <CapabilitiesSlideNav title={slides[i].title} />
        </button>
      );
    },
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    focusOnSelect: true,
    dotsClass: 'slick-pager slick-dots',
  };

  const SliderSectionStyles = css`
    padding-top: 25px;
    padding-bottom: 60px;
    padding-left: 0;
    padding-right: 0;
    background-color: ${backgroundColor};

    ${mediaQueries.phoneLarge} {
      padding-bottom: 115px;
      padding-top: 90px;
    }

    .slick-list {
      cursor: pointer;
    }

    .slick-slider {
      margin-top: 24px;
      width: 100vw;

      ${mediaQueries.phoneLarge} {
        margin-top: 0;
        display: flex;
        flex-direction: column-reverse;
        width: 100vw;
      }
    }

    .slick-slider .slick-pager {
      display: flex !important;
      justify-content: space-between;
      flex-direction: row;
      list-style: none;
      max-width: 150px;
      width: calc(100% - 24px);
      margin: auto;
      padding: 0;
      margin-bottom: 48px;
      position: relative;

      ${mediaQueries.phoneLarge} {
        display: flex !important;
        justify-content: space-between;
        flex-direction: row;
        list-style: none;
        max-width: 450px;
        width: calc(100% - 24px);
        margin: auto;
        padding: 0;
        margin-bottom: 136px;
        position: relative;
      }
    }

    .slick-slider .slick-pager li.slick-active button {
      border-bottom: 1px solid;
    }

    .slick-dots li {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      ${mediaQueries.phoneLarge} {
        width: initial;
        margin: 0;
      }
    }

    .slick-dots li button {
      width: 20px;
      height: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slick-dots li button:before {
      content: '';
      border: 1px solid ${colors.tagGray};
      border-radius: 50%;
      width: 10px;
      height: 10px;
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      ${mediaQueries.phoneLarge} {
        display: none;
      }
    }

    .slick-dots li.slick-active button:before {
      content: '';
      background-color: ${colors.tagGray};
      transition: all 1s ease;
      width: 12px;
      height: 12px;
    }

    .slick-slider .slick-pager button {
      all: unset;
      cursor: pointer;
    }

    .slick-slide {
      width: 100vw;
      ${mediaQueries.phoneLarge} {
        width: calc(100vw / 2);
        transition: width 0.2s ease;
      }
    }

    .slick-center h3 {
      color: ${colors.tagGray};
      text-shadow: 1px 1px 0 ${colors.tagGray}, -1px 1px 0 ${colors.tagGray},
        1px -1px 0 ${colors.tagGray}, -1px -1px 0 ${colors.tagGray},
        1px 0 0 ${colors.tagGray}, 0 1px 0 ${colors.tagGray},
        -1px 0 0 ${colors.tagGray}, -1px 0 0 ${colors.tagGray};
      transition: color 1s ease;
    }

    .slick-center p,
    .slick-center .slider-button,
    .slick-center .animate-opacity {
      opacity: 1;
      transition: opacity 1s ease;
    }

    .slick-list {
      ${mediaQueries.desktop} {
        padding: 0 90px;
      }
    }
  `;

  return (
    <FullWidthSection height='0' css={SliderSectionStyles}>
      <h2 css={smSectionHead}>{title}</h2>

      <Slider {...settingsMain}>
        {slides.map(node => {
          return (
            <CapabilitiesSlide
              key={node.title}
              title={node.title}
              description={node.description}
              icon={node.icon}
              link={node.link}
            />
          );
        })}
      </Slider>
    </FullWidthSection>
  );
};

CapabilitiesSlider.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};

CapabilitiesSlider.defaultProps = {
  backgroundColor: colors.white,
  title: `What we do`,
};

export default CapabilitiesSlider;
