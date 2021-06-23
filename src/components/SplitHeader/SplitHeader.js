/* eslint-disable no-bitwise */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Img from 'gatsby-image';

import TopNav from '../TopNav';
import SEO from '../seo';
import {
  container,
  colors,
  fonts,
  mediaQueries,
  weights,
  jsBreakpoints,
  contentH2,
  contentHeadings,
} from '../../styles';
import useWindow from '../../hooks/useWindow';
import ButtonFormDownload from '../ButtonFormDownload';
import FullWidthSection from '../FullWidthSection';
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
 * @param {object} splitHeroImage - Hero image for split header
 * @param {bool} noIndex - set noindex,nofollow to page
 * @param {bool} hasHeroLogo - optional logo state in hero area
 * @param {string} heroLogo - optional logo in hero area
 * @param {string} heroLogoAlt - optional logo alt text in hero area
 * @param {string} imageAlt - alt text for split hero image
 * @param {string} summary - html summary from insight
 * @param {string} ebook - string url for ebook
 */
const SplitHeader = ({
  title,
  label,
  labelMobileOnly,
  metaTitle,
  description,
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
  banner,
  images,
  navLink,
  noIndex,
  splitHeroImage,
  imageAlt,
  summary,
  ebook,
}) => {
  const { width } = useWindow();
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState('none');
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    font-size: 29px;
    font-weight: ${weights.medium};
    letter-spacing: -0.45px;
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
      padding: ${titlePadding};
      font-size: 52px;
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

  const innerSectionCSS = css`
    ${container.max}
    display: flex;

    div.left,
    div.right {
      flex: 1;
    }

    ${mediaQueries.desktop} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

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
        height='100vh'
        minHeight='100vh'
      >
        <div css={innerSectionCSS}>
          <div className='left'>
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
            {subTitle && (
              <span data-cy='labelText' css={headerSubTitle}>
                {subTitle}
              </span>
            )}

            <FullWidthSection
              fontWeight={weights.thin}
              margin='0 auto'
              padding={formSubmitted ? '50px 20px 25px' : '0 20px'}
              textAlign={formSubmitted ? `center` : `left`}
              align={formSubmitted ? `center` : `start`}
              justify={formSubmitted ? `center` : `start`}
              height='auto'
              minHeight={formSubmitted ? `0` : `300px`}
              css={css`
                a {
                  text-decoration: underline;
                  color: ${fontColor};
                }
                p {
                  color: ${fontColor};
                }
                li {
                  color: ${fontColor};
                }
                h2 {
                  color: ${fontColor};
                }
                h3 {
                  color: ${fontColor};
                }
                h2.thanks {
                  text-align: center;
                  margin: 0 auto;
                  justify-self: center;
                  color: ${fontColor};
                }
              `}
            >
              {formSubmitted ? (
                <div>
                  <h2 className='thanks'>
                    Thank you for submitting your email.
                    <br />
                    Use the button below to download our ebook.
                  </h2>
                </div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: summary,
                  }}
                />
              )}
            </FullWidthSection>
            <ButtonFormDownload
              filepath={ebook.localFile.publicURL}
              text='Access E-book'
              header='Submit your email to access our free ebook'
              confirmMessage='Thanks for you submission!'
              subheader=''
              formName='ebook-form'
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
              styles={css`
                margin: 0 auto;
                display: block;
                ${formSubmitted ? `margin-bottom: 50px;` : `margin-bottom: 0;`}
              `}
            />
          </div>

          <div className='right'>
            {splitHeroImage && (
              <Img
                fluid={splitHeroImage.localFile.childImageSharp.fluid}
                alt={imageAlt}
                css={css`
                  margin-left: 20px;
                  margin-right: 20px;

                  ${mediaQueries.phoneLarge} {
                    margin-left: auto;
                    margin-right: auto;
                  }
                `}
              />
            )}
          </div>
        </div>

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
  children: PropTypes.node,
  invert: PropTypes.bool,
  color: PropTypes.string,
  titleMarginBottom: PropTypes.string,
  titlePadding: PropTypes.string,
  image: PropTypes.string,
  splitHeroImage: PropTypes.object,
  heroImage: PropTypes.string,
  heroImageMobile: PropTypes.string,
  hideNav: PropTypes.bool,
  styles: PropTypes.object,
  banner: PropTypes.bool,
  images: PropTypes.array,
  navLink: PropTypes.string,
  noIndex: PropTypes.bool,
  imageAlt: PropTypes.string,
  summary: PropTypes.string,
  ebook: PropTypes.string,
};

SplitHeader.propTypes = headerPropTypes;

SplitHeader.defaultProps = {
  title: null,
  subTitle: null,
  label: null,
  labelMobileOnly: false,
  metaTitle: null,
  description: null,
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
  banner: false,
  images: [],
  navLink: 'https://engage.acquia.com',
  noIndex: false,
  splitHeroImage: null,
  imageAlt: '',
  summary: '',
  ebook: '',
};

export default SplitHeader;
