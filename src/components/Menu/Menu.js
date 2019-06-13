import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { colors, mediaQueries, fonts, weights } from '../../styles';

const Menu = ({ menuOpen }) => {
  const linkPrimaryStyle = css`
    font-size: 24px;
    line-height: 39px;

    ${mediaQueries.phoneLarge} {
      line-height: 60px;
      font-size: 36px;
    }

    ${mediaQueries.desktop} {
      font-size: 48px;
      line-height: 81px;
    }
  `;
  const linkSecondaryStyle = css`
    line-height: 39px;
    font-size: 24px;
    ${mediaQueries.phoneLarge} {
      font-size: 36px;
      line-height: 60px;
    }
  `;
  const sectionStyle = css`
    padding: 30px 0 0;

    &:first-child {
      padding-top: 0;
    }

    ${mediaQueries.phoneLarge} {
      padding: 0 3rem;
    }

    h5 {
      font-family: ${fonts.serif};
      font-weight: ${weights.thin};
      color: ${colors.darkgray};
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
    }

    a {
      display: block;
      color: ${colors.darkgrayFaded};
      text-decoration: none;
      transition: 0.3s ease color;
      font-family: ${fonts.serif};
      font-weight: ${weights.medium};
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
        display: flex;
        align-items: center;
        background-color: ${colors.lightblue};
        transition: 0.3s ease all;
        overflow: hidden;
        z-index: 1;
        top: ${menuOpen ? '0' : '100vh'};
        flex-direction: column;
        justify-content: flex-start;
        height: ${menuOpen ? 'auto' : '0'};
        min-height: ${menuOpen ? '100vh' : '0'};
        padding: 0;

        ${mediaQueries.phoneLarge} {
          flex-direction: row;
          justify-content: center;
          height: ${menuOpen ? '100vh' : '0'};
        }

        &::after {
          content: '';
          background: url('images/menu-bg.png');
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
          padding: 80px 60px 60px;
          width: 100%;
          ${mediaQueries.phoneLarge} {
            display: flex;
            justify-content: space-between;
            padding: 0 100px;
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
          <Link css={linkSecondaryStyle} to='/gatsby'>
            Gatsby
          </Link>
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
