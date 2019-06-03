import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { colors, mediaQueries } from '../../styles';

const Menu = ({ height, menuOpen }) => {
  const linkStyle = css`
    color: ${colors.darkgrayFaded};
    text-decoration: none;
    transition: 0.3s ease color;
    &:hover,
    &:focus {
      color: ${colors.darkgray};
    }
  `;
  const sectionStyle = css`
    padding: 6rem 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mediaQueries.phoneLarge} {
      padding: 0;

      &:first-child {
        padding-top: 3rem;
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
      }
    }
    h1 {
      font-family: 'Canela-Medium';
      font-size: 48px;
      letter-spacing: -0.2px;
      text-align: center;
      line-height: 81px;
      ${mediaQueries.phoneLarge} {
        line-height: 39px;
        font-size: 24px;
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
      <section css={sectionStyle}>
        <h5>Contents</h5>
        <Link css={linkStyle} to='/work'>
          <h1>Work</h1>
        </Link>
        <Link css={linkStyle} to='/capabilities'>
          <h1>Capabilities</h1>
        </Link>
        <Link css={linkStyle} to='/insights'>
          <h1>Insights</h1>
        </Link>
      </section>

      <section css={sectionStyle}>
        <h5>Company</h5>
        <Link css={linkStyle} to='/about'>
          <h1>About</h1>
        </Link>
        <Link css={linkStyle} to='/careers'>
          <h1>Careers</h1>
        </Link>
        <Link css={linkStyle} to='/contact'>
          <h1>Contact</h1>
        </Link>
      </section>
      <section css={sectionStyle}>
        <h5>Partners</h5>
        <Link css={linkStyle} to='/drupal'>
          <h1>Drupal</h1>
        </Link>
        <Link css={linkStyle} to='/acquia'>
          <h1>Acquia</h1>
        </Link>
        <Link css={linkStyle} to='/shopify'>
          <h1>Shopify</h1>
        </Link>
      </section>
    </nav>
  );
};

Menu.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Menu;
