import React, { useState, useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors, mediaQueries, smSectionHead } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';

import CapabilitiesSlide from './CapabilitiesSlide';
import CapabilitiesSlideNav from './CapabilitiesSlideNav';
import slides from './CapabilitiesSlide.json';

const CapabilitiesSlider = ({ backgroundColor, title }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef();
  const slider2 = useRef();

  const [width, setWidth] = useState(0);

  const settingsNav = {
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    focusOnSelect: true,
  };

  const settingsMain = {
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
    setWidth(window.innerWidth / 2);
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 100);

    window.addEventListener('resize', debouncedHandleResize);

    handleResize();
    setNav1(slider1.current);
    setNav2(slider2.current);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

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
        asNavFor={nav1}
        ref={slider2}
        {...settingsNav}
        css={css`
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
        `}
      >
        {slides.map(node => {
          return <CapabilitiesSlideNav title={node.title} key={node.index} />;
        })}
      </Slider>
      <Slider
        swipeToSlide
        focusOnSelect
        asNavFor={nav2}
        ref={slider1}
        {...settingsMain}
        css={css`
          max-width: 100%;
          max-height: 100%;
          margin-bottom: 65px;

          .slick-slide {
            width: ${width};
            transition: width 0.2s ease;
          }

          .slick-center h3 {
            color: #000;
            text-shadow: -1.25px -1.25px 0 #000, 1.25px -1.25px 0 #000,
              -1.25px 1.25px 0 #000, 1.25px 1.25px 0 #000;
            transition: color 1s ease;
          }

          .slick-center p,
          .slick-center .slider-button {
            opacity: 1;
            transition: opacity 1s ease;
            animation: fadeoutBg 3s;
          }

          .slick-list {
            ${mediaQueries.desktop} {
              padding: 0 90px;
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
