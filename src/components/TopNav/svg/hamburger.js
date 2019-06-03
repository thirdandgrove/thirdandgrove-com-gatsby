import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Hamburger = ({ fill, isOpen }) => (
  <svg
    width='25px'
    height='23px'
    viewBox='0 0 25 23'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='Hamburger'>
      <rect
        fill={fill}
        id='Rectangle'
        x='0'
        y='0'
        width='25'
        height='3'
        css={css`
          display: block;
          transform-box: fill-box;
          transition: 0.3s ease transform;
          transform: ${isOpen
            ? 'rotate(-45deg) translateY(10px)'
            : 'rotate(0) translateY(0)'};
          transform-origin: 12.5px 10.5px;
        `}
      />
      <rect
        fill={fill}
        id='Rectangle'
        x='8'
        y='10'
        width='17'
        height='3'
        css={css`
          display: block;
          transform-box: fill-box;
          transition: 0.3s ease transform;
          transform: ${isOpen ? 'scaleX(0)' : 'scaleX(1)'};
          transform-origin: ${isOpen ? '0 0' : '100% 100%'};
        `}
      />
      <rect
        fill={fill}
        id='Rectangle'
        x='0'
        y='20'
        width='25'
        height='3'
        css={css`
          display: block;
          transform-box: fill-box;
          transition: 0.3s ease transform;
          transform: ${isOpen
            ? 'rotate(45deg) translateY(-10px)'
            : 'rotate(0deg) translateY(0)'};
          transform-origin: 12.5px -7.5px;
        `}
      />
    </g>
  </svg>
);

Hamburger.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default Hamburger;
