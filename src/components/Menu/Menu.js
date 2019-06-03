import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { colors, mediaQueries } from '../../styles';

const Menu = ({ height, menuOpen }) => {
  const linkPrimaryStyle = css`
    font-size: 48px;
    line-height: 81px;
    ${mediaQueries.desktop} {
      line-height: 60px;
      font-size: 36px;
    }
    ${mediaQueries.phoneLarge} {
      line-height: 39px;
      font-size: 24px;
    }
  `;
  const linkSecondaryStyle = css`
    font-size: 36px;
    line-height: 60px;
    ${mediaQueries.phoneLarge} {
      line-height: 39px;
      font-size: 24px;
    }
  `;
  const sectionStyle = css`
    padding: 6rem 3rem 3rem;

    ${mediaQueries.phoneLarge} {
      padding: 30px 0 0;

      &:first-child {
        padding-top: 5rem;
      }
    }
    h5 {
      font-family: 'Canela-Thin';
      font-weight: 300;
      font-size: 21px;
      color: ${colors.darkgray};
      letter-spacing: -0.1px;
      text-align: center;
      line-height: 81px;
      ${mediaQueries.phoneLarge} {
        line-height: 15px;
        font-size: 15px;
        margin-bottom: 10px;
      }
    }
    a {
      display: block;
      color: ${colors.darkgrayFaded};
      text-decoration: none;
      transition: 0.3s ease color;
      font-family: 'Canela-Medium';
      letter-spacing: -0.2px;
      text-align: center;

      &:hover,
      &:focus {
        color: ${colors.darkgray};
      }
    }
  `;
  return (
    <nav
      css={css`
        position: absolute;
        width: 100vw;
        height: ${menuOpen ? height : '0'};
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.lightblue};
        transition: 0.3s ease height;
        overflow: hidden;
        z-index: 1;
        ${mediaQueries.phoneLarge} {
          flex-direction: column;
          justify-content: flex-start;
          height: ${menuOpen ? '100%' : '0'};
          padding: 0;
        }
        &::after {
          content: '';
          background: url('images/menuBackdrop.webp');
          opacity: 0.15;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          padding: 0 100px;
          ${mediaQueries.phoneLarge} {
            display: block;
          }
        `}
      >
        <section css={sectionStyle}>
          <h5>Contents</h5>
          <Link css={linkPrimaryStyle} to='/work'>
            Work
          </Link>
          <Link css={linkPrimaryStyle} to='/capabilities'>
            Capabilities
          </Link>
          <Link css={linkPrimaryStyle} to='/insights'>
            Insights
          </Link>
        </section>

        <section css={sectionStyle}>
          <h5>Company</h5>
          <Link css={linkPrimaryStyle} to='/about'>
            About
          </Link>
          <Link css={linkPrimaryStyle} to='/careers'>
            Careers
          </Link>
          <Link css={linkPrimaryStyle} to='/contact'>
            Contact
          </Link>
        </section>
        <section css={sectionStyle}>
          <h5>Partners</h5>
          <Link css={linkSecondaryStyle} to='/drupal'>
            Drupal
          </Link>
          <Link css={linkSecondaryStyle} to='/acquia'>
            Acquia
          </Link>
          <Link css={linkSecondaryStyle} to='/shopify'>
            Shopify
          </Link>
        </section>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Menu;
