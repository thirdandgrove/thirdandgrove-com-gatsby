import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import TopNav from '../TopNav';
import SEO from '../seo';
import { colors, fonts, mediaQueries, weights } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const Header = ({
  defaultBackground,
  title,
  label,
  metaTitle,
  description,
  fade,
  height,
  mobileHeight,
  children,
  color,
  invert,
  vertSpacing,
}) => {
  const headerTitle = css`
    @keyframes fadeInOut {
      0%,
      3% {
        opacity: 0;
      }
      10%,
      90% {
        opacity: 1;
      }
      98%,
      100% {
        opacity: 0;
      }
    }
    position: relative;
    margin-bottom: ${vertSpacing};
    animation: ${fade ? `fadeInOut ${fade}ms ease infinite` : `none`};
    line-height: 48px;
    font-size: 39px;
    font-weight: ${weights.medium};
    letter-spacing: -0.45px;
    width: 80%;
    text-align: center;
    color: ${defaultBackground ? colors.darkgray : color.lightgray};

    ${mediaQueries.phoneLarge} {
      width: 75%;
      font-size: 72px;
      line-height: 84px;
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
    line-height: 36px;
    text-transform: capitalize;
    color: ${colors.reallydarkgray};

    ${mediaQueries.desktop} {
      margin-top: 0;
      margin-bottom: 60px;
    }
  `;
  return (
    <>
      <SEO title={title || metaTitle} description={description} />
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
        <div
          css={css`
            padding-top: {vertSpacing};
          `}
        />
        {children && children}
      </FullWidthSection>
    </>
  );
};

Header.propTypes = {
  defaultBackground: PropTypes.bool,
  title: PropTypes.string,
  label: PropTypes.string,
  metaTitle: PropTypes.string,
  description: PropTypes.string,
  fade: PropTypes.number,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  children: PropTypes.node,
  invert: PropTypes.bool,
  color: PropTypes.string,
  vertSpacing: PropTypes.string,
};

Header.defaultProps = {
  defaultBackground: true,
  title: null,
  label: null,
  metaTitle: null,
  description: null,
  fade: 0,
  height: '700px',
  mobileHeight: '300px',
  children: null,
  invert: false,
  color: colors.yellow,
  vertSpacing: '0',
};

export default Header;
