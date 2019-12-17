/* eslint-disable no-bitwise */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import TopNav from '../TopNav';
import SEO from '../seo';
import { colors, fonts, mediaQueries, weights } from '../../styles';
import FullWidthSection from '../FullWidthSection';

/**
 * Header used on every page.
 *
 * @param {string} title - passed through to SEO
 * @param {string} label
 * @param {bool} labelMobileOnly
 * @param {string} metaTitle - passed through to SEO
 * @param {string} description - passed through to SEO
 * @param {string} height - passed to wrapper component
 * @param {string} mobileMinHeight - passed to wrapper component
 * @param {node} children
 * @param {string} color - passed to background color
 * @param {boolean} invert - passed through to TopNav
 * @param {string} titleMarginBottom - passed to title
 * @param {string} titlePadding - passed to title
 * @param {string} image - passed to SEO
 * @param {string} heroImage - used as background on desktop
 * @param {string} heroImageMobile - used as background on mobile
 */
const Header = ({
  title,
  label,
  labelMobileOnly,
  metaTitle,
  description,
  height,
  mobileMinHeight,
  children,
  color,
  invert,
  titleMarginBottom,
  titlePadding,
  image,
  heroImage,
  heroImageMobile,
}) => {
  const isLightBackground = value => {
    let r;
    let g;
    let b;

    if (value.match(/^rgb/)) {
      // If HEX, store the red, green, blue values in separate variables.
      [r, g, b] = value.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );
    } else {
      // If RGB, convert it to HEX
      // @see: http://gist.github.com/983661
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

  const fontColor =
    isLightBackground(color) && !invert ? colors.darkgray : colors.lightgray;

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
    margin-bottom: ${titleMarginBottom};
    padding: 0 20px;
    line-height: 1.23;
    font-size: 39px;
    font-weight: ${weights.medium};
    letter-spacing: -0.45px;
    text-align: center;
    color: ${fontColor};
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
      padding: ${titlePadding};
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
    background-image: url(${heroImageMobile});
    ${mediaQueries.desktop} {
      background-image: url(${heroImage});
    }
    ${mediaQueries.phoneLarge} {
      background-image: url(${heroImage});
    }
  `;
  const headerlabel = css`
    margin-bottom: 32px;
    font-family: ${fonts.sans};
    font-size: 15px;
    font-weight: ${weights.light};
    line-height: 2.4;
    text-transform: capitalize;
    color: ${fontColor};
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;

    ${mediaQueries.desktop} {
      margin-bottom: 42px;
      ${labelMobileOnly && `display: none`};
    }
  `;
  return (
    <>
      <SEO title={metaTitle || title} description={description} image={image} />
      <TopNav fill={fontColor} />
      <FullWidthSection
        css={sectionCSS}
        height={height}
        minHeight={mobileMinHeight}
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

// This is exported for use in layout.js.
export const headerPropTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  labelMobileOnly: PropTypes.bool,
  metaTitle: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
  mobileMinHeight: PropTypes.string,
  children: PropTypes.node,
  invert: PropTypes.bool,
  color: PropTypes.string,
  titleMarginBottom: PropTypes.string,
  titlePadding: PropTypes.string,
  image: PropTypes.string,
  heroImage: PropTypes.string,
  heroImageMobile: PropTypes.string,
};

Header.propTypes = headerPropTypes;

Header.defaultProps = {
  title: null,
  label: null,
  labelMobileOnly: false,
  metaTitle: null,
  description: null,
  height: '700px',
  mobileMinHeight: '300px',
  children: null,
  invert: false,
  color: colors.yellow,
  titleMarginBottom: '0',
  titlePadding: '0 20px',
  image: null,
  heroImage: null,
  heroImageMobile: null,
};

export default Header;
