import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { colors, mediaQueries, weights, container } from '../../styles';

const Menu = ({ menuOpen }) => {
  const textFadeIn = css`
    position: relative;
    opacity: ${menuOpen ? '1' : '0'};
    transform: translateY(${menuOpen ? '0' : '50%'});
    transition-property: color, transform, opacity;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    transition-delay: 0s, 0.2s; 0.2s;

    &:nth-of-type(2) {
      transition-delay: 0s, 0.4s; 0.4s;
    }

    &:nth-of-type(3) {
      transition-delay: 0s, 0.6s; 0.6s;
    }

    &:nth-of-type(4) {
      transition-delay: 0s, 0.8s; 0.8s;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${colors.darkgray};
      transition: inherit;
      height: ${menuOpen ? '0' : '100%'};
    }
  `;

  const linkBaseStyles = css`
    display: block;
    color: ${colors.whiteFaded};
    font-weight: ${weights.medium};
    letter-spacing: -0.2px;
    text-align: center;

    &:hover,
    &:focus {
      color: ${colors.white};
    }
  `;

  const linkPrimaryStyle = css`
    font-size: 36px;
    line-height: 57px;

    ${mediaQueries.desktop} {
      font-size: 48px;
      line-height: 81px;
    }
  `;

  const linkSecondaryStyle = css`
    line-height: 42px;
    font-size: 24px;
    ${mediaQueries.phoneLarge} {
      font-size: 36px;
      line-height: 60px;
    }
  `;

  const sectionStyle = css`
    ${mediaQueries.phoneLarge} {
      padding: 0 40px;
    }
  `;

  const sectionPrimaryStyle = css`
    h5 {
      display: none;

      ${mediaQueries.phoneLarge} {
        display: block;
      }
    }
  `;

  const sectionSecondaryStyle = css`
    padding-top: 40px;
  `;

  const sectionHeaderStyle = css`
    font-weight: ${weights.thin};
    color: ${colors.white};
    letter-spacing: -0.1px;
    text-align: center;
    line-height: 15px;
    font-size: 15px;
    margin-bottom: 10px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 1.45rem;
      line-height: 81px;
      font-size: 21px;
    }
  `;

  const linksWrapper = css`
    columns: 2;
    max-height: 90px;

    ${mediaQueries.phoneLarge} {
      columns: 1;
      max-height: none;
    }
  `;

  return (
    <nav
      css={css`
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: ${colors.darkgray};
        transition: 0.3s ease all;
        overflow: hidden;
        z-index: 1;
        top: ${menuOpen ? '0' : '100vh'};
        flex-direction: column;
        justify-content: center;
        height: ${menuOpen ? 'auto' : '0'};
        min-height: ${menuOpen ? '100vh' : '0'};
        padding: 0;

        ${mediaQueries.phoneLarge} {
          flex-direction: row;
          height: ${menuOpen ? '100vh' : '0'};
        }
      `}
    >
      <div
        css={[
          container.max,
          css`
            padding-top: 80px;
            padding-bottom: 60px;
            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
              padding-top: 0;
              padding-bottom: 0;
            }
          `,
        ]}
      >
        <section css={[sectionStyle, sectionPrimaryStyle]}>
          <h5 css={[sectionHeaderStyle, textFadeIn]}>Contents</h5>
          <Link css={[linkPrimaryStyle, textFadeIn, linkBaseStyles]} to='/work'>
            Work
          </Link>
          <Link
            css={[linkPrimaryStyle, textFadeIn, linkBaseStyles]}
            to='/capabilities'
          >
            Capabilities
          </Link>
          <Link
            css={[linkPrimaryStyle, textFadeIn, linkBaseStyles]}
            to='/insights'
          >
            Insights
          </Link>
        </section>

        <section css={[sectionStyle, sectionPrimaryStyle]}>
          <h5 css={[sectionHeaderStyle, textFadeIn]}>Company</h5>
          <Link
            css={[linkPrimaryStyle, textFadeIn, linkBaseStyles]}
            to='/about'
          >
            About
          </Link>
          <Link
            css={[linkPrimaryStyle, textFadeIn, linkBaseStyles]}
            to='/careers'
          >
            Careers
          </Link>
          <Link
            css={[linkPrimaryStyle, textFadeIn, linkBaseStyles]}
            to='/contact'
          >
            Contact
          </Link>
        </section>
        <section css={[sectionStyle, sectionSecondaryStyle]}>
          <h5 css={[sectionHeaderStyle, textFadeIn]}>Partners</h5>
          <div css={linksWrapper}>
            <Link
              css={[linkSecondaryStyle, textFadeIn, linkBaseStyles]}
              to='/drupal'
            >
              Drupal
            </Link>
            <Link
              css={[linkSecondaryStyle, textFadeIn, linkBaseStyles]}
              to='/acquia'
            >
              Acquia
            </Link>
            <Link
              css={[linkSecondaryStyle, textFadeIn, linkBaseStyles]}
              to='/shopify'
            >
              Shopify
            </Link>
            <Link
              css={[linkSecondaryStyle, textFadeIn, linkBaseStyles]}
              to='/gatsby'
            >
              Gatsby
            </Link>
          </div>
        </section>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool,
};

Menu.defaultProps = {
  menuOpen: false,
};

export default Menu;
