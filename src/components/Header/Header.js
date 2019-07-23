/* eslint-disable no-bitwise */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import TopNav from '../TopNav';
import SEO from '../seo';
import { colors, fonts, mediaQueries, weights } from '../../styles';
import FullWidthSection from '../FullWidthSection';

/**
 * Header for every page
 * note which props are passed through
 * @param {string} title - passed through to SEO
 * @param {string} label
 * @param {bool} labelMobileOnly
 * @param {string} metaTitle - passed through to SEO
 * @param {string} description - passed through to SEO
 * @param {string} height - passed to wrapper component
 * @param {string} mobileHeight - passed to wrapper component
 * @param {node} children
 * @param {string} color
 * @param {boolean} invert - passed through to TopNav
 * @param {string} marginBottom
 */
const Header = ({
  title,
  label,
  labelMobileOnly,
  metaTitle,
  description,
  height,
  mobileHeight,
  children,
  color,
  invert,
  marginBottom,
}) => {
  const isLightBackground = value => {
    let r;
    let g;
    let b;

    if (value.match(/^rgb/)) {
      // If HEX --> store the red, green, blue values in separate variables
      [r, g, b] = value.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );
    } else {
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      const rgbVal = +`0x${value
        .slice(1)
        .replace(value.length < 5 && /./g, '$&$&')}`;

      r = rgbVal >> 16;
      g = rgbVal & 255;
      b = (rgbVal >> 8) & 255;
    }
    return (
      Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)) > 127.5
    );
  };

  const headerTitle = css`
    @keyframes headerSlide {
      0% {
        transform: translateY(50%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes afterReveal {
      0% {
        height: 100%;
      }
      100% {
        height: 0;
      }
    }

    position: relative;
    margin-bottom: ${marginBottom};
    padding: 0 20px;
    line-height: 1.23;
    font-size: 39px;
    font-weight: ${weights.medium};
    letter-spacing: -0.45px;
    text-align: center;
    color: ${isLightBackground(color) ? colors.darkgray : colors.lightgray};
    transform: translateY(50%);
    animation-name: headerSlide;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${color};
      animation-name: afterReveal;
      animation-duration: inherit;
      animation-timing-function: inherit;
      animation-iteration-count: inherit;
      animation-fill-mode: inherit;
    }

    ${mediaQueries.phoneLarge} {
      width: 75%;
      font-size: 72px;
      line-height: 1.17;
      letter-spacing: -1px;
    }

    ${mediaQueries.desktop} {
      width: 60%;
    }
  `;
  const sectionCSS = css`
    padding: 88px 0;
    background-color: ${color};
  `;
  const headerlabel = css`
    margin-top: 68px;
    margin-bottom: 40px;
    font-family: ${fonts.sans};
    font-size: 15px;
    font-weight: ${weights.light};
    letter-spacing: 2px;
    line-height: 2.4;
    text-transform: capitalize;
    color: ${colors.reallydarkgray};

    ${mediaQueries.desktop} {
      margin-top: 0;
      margin-bottom: 60px;
      ${labelMobileOnly && `display: none`};
    }
  `;
  return (
    <>
      <SEO title={metaTitle || title} description={description} />
      <TopNav invert={invert} />
      <FullWidthSection
        css={sectionCSS}
        height={height}
        mobileHeight={mobileHeight}
      >
        {label && (
          <span data-cy='labelText' css={headerlabel}>
            {label}
          </span>
        )}
        {title && (
          <h1 data-cy='titleText' css={headerTitle}>
            {title}
          </h1>
        )}
        {children && children}
      </FullWidthSection>
    </>
  );
};

// this is exported for use in layout.js
export const headerPropTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  labelMobileOnly: PropTypes.bool,
  metaTitle: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  children: PropTypes.node,
  invert: PropTypes.bool,
  color: PropTypes.string,
  marginBottom: PropTypes.string,
};

Header.propTypes = headerPropTypes;

Header.defaultProps = {
  title: null,
  label: null,
  labelMobileOnly: false,
  metaTitle: null,
  description: null,
  height: '700px',
  mobileHeight: '300px',
  children: null,
  invert: false,
  color: colors.yellow,
  marginBottom: '0',
};

export default Header;
