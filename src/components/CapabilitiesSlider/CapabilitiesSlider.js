import React, { useState, useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors, mediaQueries, smSectionHead } from '../../styles';
import FullWidthSection from '../FullWidthSection';

import CapabilitiesSlide from './CapabilitiesSlide';
import CapabilitiesSlideNav from './CapabilitiesSlideNav';
import slides from './CapabilitiesSlide.json';

const CapabilitiesSlider = ({ backgroundColor, title }) => {
  const [width, setWidth] = useState(0);

  const settingsMain = {
    customPaging(i) {
      return (
        <button type='button'>
          <CapabilitiesSlideNav title={slides[i].title} />
        </button>
      );
    },
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2500,
    cssEase: 'ease',
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    variableWidth: true,
    focusOnSelect: true,
    dots: true,
    dotsClass: 'slick-pager slick-dots',
  };

  function debounce(fn, ms) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(_ => {
        timer = null;
        fn.apply(this, args);
      }, ms);
    };
  }

  function handleResize() {
    const getWidth =
      window.innerWidth >= 900 ? window.innerWidth / 2 : window.innerWidth;
    setWidth(getWidth);
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 50);

    window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('orientationchange', debouncedHandleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.addEventListener('orientationchange', debouncedHandleResize);
    };
  }, []);

  const NavStyles = css`
    width: 600px;
    margin-bottom: 48px;

    .slider-nav {
      cursor: pointer;
    }

    .slick-current .slider-nav span {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 0;
        background-color: ${colors.black};
        height: 1px;
        width: 100%;
      }
    }
  `;

  return (
    <FullWidthSection
      height='0'
      css={css`
        padding-top: 25px;
        padding-bottom: 60px;
        padding-left: 0;
        padding-right: 0;
        background-color: ${backgroundColor};

        .slick-slider {
          display: flex;
          flex-direction: column;
          margin-top: 24px;
          ${mediaQueries.phoneLarge} {
            margin-top: 0;
            display: flex;
            flex-direction: column-reverse;
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

        .slick-dots li.slick-active button:before,
        .slick-dots li button:before {
        }

        .slick-dots li {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
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

        ${mediaQueries.phoneLarge} {
          padding-bottom: 115px;
          padding-top: 90px;
        }
      `}
    >
      <h2 css={smSectionHead}>{title}</h2>

      <Slider
        {...settingsMain}
        css={css`
          .slick-slide {
            width: ${width};
            transition: width 0.2s ease;
          }

          .slick-center h3 {
            color: ${colors.tagGray};
            text-shadow: 1px 1px 0 ${colors.tagGray},
              -1px 1px 0 ${colors.tagGray}, 1px -1px 0 ${colors.tagGray},
              -1px -1px 0 ${colors.tagGray}, 1px 0 0 ${colors.tagGray},
              0 1px 0 ${colors.tagGray}, -1px 0 0 ${colors.tagGray},
              -1px 0 0 ${colors.tagGray};
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

          .slick-dots li {
            ${mediaQueries.phoneLarge} {
              width: 100%;
              height: 100%;
              margin: 0;
            }
          }

          .slick-dots li button:before {
            display: block;
            ${mediaQueries.phoneLarge} {
              display: none;
            }
          }
        `}
      >
        {slides.map(node => {
          return (
            <CapabilitiesSlide
              style={{ width }}
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
  title: `Insights`,
};

export default CapabilitiesSlider;
