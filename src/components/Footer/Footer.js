import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { colors, fonts, weights, mediaQueries, container } from '../../styles';

const Footer = () => {
  const linkStyle = css`
    display: block;
    color: ${colors.whiteFaded};
    text-decoration: none;
    font-family: ${fonts.sans};
    padding: 13px;
    font-size: 18px;
    line-height: 1;
    font-weight: ${weights.bold};
    transition: all ease 0.3s;

    ${mediaQueries.phoneLarge} {
      margin-right: 40px;
      padding: 11px 0;
    }
    &:hover {
      color: ${colors.white};
    }
  `;
  const wrapperStyle = css`
    padding: 60px 0;
    text-align: center;
    background-color: ${colors.darkgray};

    ${mediaQueries.phoneLarge} {
      padding: 80px 0;
    }
  `;
  const innerWrapperStyle = css`
    ${mediaQueries.phoneLarge} {
      display: flex;
      justify-content: center;
    }
  `;
  return (
    <div css={wrapperStyle}>
      <div css={[innerWrapperStyle, container.max]}>
        <Link css={linkStyle} to='/work'>
          Work
        </Link>
        <Link css={linkStyle} to='/capabilities'>
          Capabilities
        </Link>
        <Link css={linkStyle} to='/insights'>
          Insights
        </Link>
        <Link css={linkStyle} to='/about'>
          About
        </Link>
        <Link css={linkStyle} to='/careers'>
          Careers
        </Link>
        <Link css={linkStyle} to='/contact'>
          Contact
        </Link>
        <Link css={linkStyle} to='/legal'>
          Legal
        </Link>
      </div>
    </div>
  );
};

export default Footer;
