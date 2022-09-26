/* eslint-disable no-bitwise */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Img from 'gatsby-image';

import TopNav from '../TopNav';
import SEO from '../seo';
import {
  colors,
  fonts,
  mediaQueries,
  weights,
  jsBreakpoints,
} from '../../styles';
import FullWidthSection from '../FullWidthSection';
import TagLogo from '../TopNav/svg/TagLogo';
import ThirdAndGrove from '../TopNav/svg/ThirdAndGrove';
import useWindow from '../../hooks/useWindow';
/**
 * Header used on every page.
 *
 * @param {string} title - passed through to SEO
 * @param {string} subTitle
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
 * @param {bool} noIndex - set noindex,nofollow to page
 * @param {bool} hasHeroLogo - optional logo state in hero area
 * @param {string} heroLogo - optional logo in hero area
 * @param {string} heroLogoAlt - optional logo alt text in hero area
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
  subTitle,
  hideNav,
  styles,
  linksA,
  linksB,
  banner,
  images,
  navLink,
  noIndex,
  hasHeroLogo,
  heroLogo,
  heroLogoAlt,
}) => {
  const { width } = useWindow();
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState('none');
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
    margin: 0 17% ${titleMarginBottom} 17%;

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
      padding: ${titlePadding};
      font-size: 72px;
      line-height: 1.17;
      letter-spacing: -1px;
    }
  `;
  const sectionBackgroundCSS =
    heroImageMobile && heroImage
      ? css`
          background-image: url(${heroImageMobile});
          ${mediaQueries.desktop} {
            background-image: url(${heroImage});
          }
          ${mediaQueries.phoneLarge} {
            background-image: url(${heroImage});
          }
        `
      : css``;
  const sectionCSS = css`
    padding: 88px 0;
    background-color: ${color};
    ${sectionBackgroundCSS}
  `;
  const headerSubTitle = css`
    margin-top: 32px;
    font-family: ${fonts.sans};
    font-size: 15px;
    line-height: 2.4;
    text-transform: capitalize;
    color: ${fontColor};
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 600px;
    width: 100%;
    transform: translateY(50%);
    animation-name: headerSlide;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    ${mediaQueries.desktop} {
      margin-bottom: 42px;
      ${labelMobileOnly && `display: none`};
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

  const linkStylesA = css`
    display: flex;
    a {
      font-family: ${fonts.sans};
      font-size: 15px;
      font-weight: ${weights.light};
      line-height: 2.4;
      color: ${fontColor};
      padding: 0 10px;
      position: relative;

      &::after {
        content: '|';
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
      }
    }

    a:last-of-type {
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
      }
    }
  `;

  const linkStylesB = css`
    display: flex;
    margin-top: 12px;
    a {
      font-family: ${fonts.sans};
      font-size: 15px;
      font-weight: ${weights.light};
      line-height: 2.4;
      color: ${fontColor};
      padding: 0 10px;
      position: relative;
    }
  `;

  const getImageSrc = name =>
    images.filter(({ node }) => name === node.name)[0].node.publicURL;

  useEffect(() => {
    setIsMobile(
      typeof window !== 'undefined' && width > jsBreakpoints.phoneLarge
    );
  }, [width]);

  useEffect(() => {
    setLoaded('block');
  }, []);

  return (
    <>
      <SEO
        title={metaTitle || title}
        description={description}
        image={image}
        noIndex={noIndex}
      />
      <TopNav
        fill={fontColor}
        hideNav={hideNav}
        banner={banner}
        navLink={navLink}
      />
      <FullWidthSection
        css={[sectionCSS, styles]}
        height={height}
        minHeight={mobileMinHeight}
      >
        {hasHeroLogo && (
          <div
            css={css`
              margin-bottom: 12px;
              display: ${loaded};
            `}
          >
            {heroLogo ? (
              <Img fluid={heroLogo} alt={heroLogoAlt} />
            ) : loaded === 'block' && isMobile ? (
              <ThirdAndGrove
                css={css`
                  height: 22px;
                  fill: ${fontColor};
                `}
              />
            ) : (
              <TagLogo
                css={css`
                  fill: ${fontColor};
                  height: 50px;
                `}
              />
            )}
          </div>
        )}

        {label && (
          <span data-cy='labelText' css={headerlabel}>
            {label}
          </span>
        )}
        {title && (
          <h1 data-cy='titleText' className='balance-text' css={headerTitle}>
            {title}
          </h1>
        )}
        {subTitle && (
          <span data-cy='labelText' css={headerSubTitle}>
            {subTitle}
          </span>
        )}
        {linksA && (
          <div css={linkStylesA}>
            {linksA.map(l => (
              <a href={l.url}>{l.text}</a>
            ))}
          </div>
        )}
        {linksB && (
          <div css={linkStylesB}>
            {linksB.map(l => (
              <a href={l.url}>
                <img src={getImageSrc(l.text.toLowerCase())} alt={l.text} />
              </a>
            ))}
          </div>
        )}
        {children && children}
      </FullWidthSection>
    </>
  );
};

// This is exported for use in layout.js.
export const headerPropTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subTitle: PropTypes.string,
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
  hideNav: PropTypes.bool,
  styles: PropTypes.object,
  linksA: PropTypes.array,
  linksB: PropTypes.array,
  banner: PropTypes.bool,
  images: PropTypes.array,
  navLink: PropTypes.string,
  noIndex: PropTypes.bool,
  hasHeroLogo: PropTypes.bool,
  heroLogo: PropTypes.string,
  heroLogoAlt: PropTypes.string,
};

Header.propTypes = headerPropTypes;

Header.defaultProps = {
  title: null,
  subTitle: null,
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
  hideNav: false,
  styles: {},
  linksA: [],
  linksB: [],
  banner: false,
  images: [],
  navLink: 'https://engage.acquia.com',
  noIndex: false,
  hasHeroLogo: false,
  heroLogo: null,
  heroLogoAlt: null,
};

export default Header;
