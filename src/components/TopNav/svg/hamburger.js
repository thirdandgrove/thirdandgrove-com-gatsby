import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Hamburger = ({ fill, isOpen }) => {
  const rectBase = css`
    fill: ${fill};
    display: block;
    transition: 0.3s ease transform;
    transform-origin: 50% 50%;
  `;

  const rect1 = css`
    transform: ${isOpen
      ? 'rotate(-45deg) translateY(10px)'
      : 'rotate(0) translateY(0)'};
  `;

  const rect2 = css`
    transform: ${isOpen ? 'scaleX(0)' : 'scaleX(1)'};
  `;

  const rect3 = css`
    transform: ${isOpen
      ? 'rotate(45deg) translateY(-10px)'
      : 'rotate(0deg) translateY(0)'};
  `;

  return (
    <svg
      width='25px'
      height='23px'
      viewBox='0 0 25 23'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Hamburger'>
        <rect x='0' y='0' width='25' height='3' css={[rectBase, rect1]} />
        <rect x='8' y='10' width='17' height='3' css={[rectBase, rect2]} />
        <rect x='0' y='20' width='25' height='3' css={[rectBase, rect3]} />
      </g>
    </svg>
  );
};

Hamburger.propTypes = {
  fill: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
