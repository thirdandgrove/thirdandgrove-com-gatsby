import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { colors, mediaQueries, weights, container } from '../../styles';

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

    &:first-of-type {
      padding-top: 0;
    }

    ${mediaQueries.phoneLarge} {
      padding: 0 40px;
    }

    h5 {
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
    }

    a {
      display: block;
      color: ${colors.whiteFaded};
      font-weight: ${weights.medium};
      letter-spacing: -0.2px;
      text-align: center;

      &:hover,
      &:focus {
        color: ${colors.white};
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
        background-color: ${colors.darkgray};
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
