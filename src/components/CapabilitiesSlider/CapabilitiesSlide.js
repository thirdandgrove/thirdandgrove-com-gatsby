/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Button from '../Button';
import { colors, mediaQueries, container } from '../../styles';

import img from './icons/data.png';

function CapabilitiesSlide({ title, description, icon, link }) {
  const ref = useRef();
  const [width, setWidth] = useState(0);

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

  useEffect(() => {
    function handleResize() {
      let getWidth = 0;
      const w = window.innerWidth;
      switch (true) {
        case w >= 1025:
          getWidth =
            ref.current.children[0].children[1].clientWidth +
            window.innerWidth * 0.2;
          break;
        case w >= 900:
          getWidth =
            ref.current.children[0].children[1].clientWidth +
            window.innerWidth * 0.1;
          break;
        default:
          getWidth = window.innerWidth;
          break;
      }
      setWidth(getWidth);
    }

    const debouncedHandleResize = debounce(handleResize, 100);

    window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('orientationchange', debouncedHandleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.addEventListener('orientationchange', debouncedHandleResize);
    };
  }, []);

  const imageSrc = require(`${icon}`);
  const Card = styled.div`
    opacity: 1 !important;

    .animate-opacity {
      opacity: 0;
      transition: opacity 1s ease;
    }

    h3 {
      line-height: 1.57;
      letter-spacing: 1.5px;

      ${mediaQueries.desktop} {
        line-height: 1.375;
      }
    }
  `;

  const P = styled.p`
    color: ${colors.tagGray};
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 27px;
    text-align: center;
    max-width: 420px;
    width: calc(100% - 24px);
    min-height: 81px;

    ${mediaQueries.phoneLarge} {
      margin-top: 24px;
      margin-bottom: 84px;
    }
  `;

  const H3 = styled.h3`
    font-size: 60px !important;
    font-weight: 500;
    letter-spacing: -0.7px;
    line-height: 90px;
    text-align: center;
    color: ${colors.lightblue};
    transition: color 1s ease;
    text-stroke: ${colors.tagGray};
    -webkit-text-stroke: ${colors.tagGray};
    text-stroke-width: 1px;
    -webkit-text-stroke-width: 1px;
    -webkit-font-smoothing: antialiased;

    ${mediaQueries.phoneLarge} {
      font-size: 115px !important;
      font-weight: 500;
      letter-spacing: 1.53px;
      line-height: 76px;
    }
  `;

  return (
    <Card ref={ref} style={{ width }}>
      <span
        css={[
          container.max,
          css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
              width: 50px;
              height: 50px;
            }

            .slider-button {
              opacity: 0;
              transition: opacity 1s ease;
              margin-bottom: 48px;

              ${mediaQueries.phoneLarge} {
                margin-bottom: 0;
              }
            }
          `,
        ]}
      >
        <img className='animate-opacity' src={imageSrc} alt={title} />
        <H3>{title}</H3>
        <P className='animate-opacity'>{description}</P>
        <Button
          className='slider-button animate-opacity'
          onClick={() => navigate(`${link}`)}
        >
          Learn More
        </Button>
      </span>
    </Card>
  );
}

CapabilitiesSlide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
};

CapabilitiesSlide.defaultProps = {
  title: 'Title',
  description: 'Description',
  icon: img,
  link: 'Link',
};

export default CapabilitiesSlide;
