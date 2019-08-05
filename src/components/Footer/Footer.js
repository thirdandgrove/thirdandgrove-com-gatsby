import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import { colors, fonts, weights, mediaQueries, container } from '../../styles';

const Footer = () => {
  const linkStyle = css`
    display: block;
    color: ${colors.whiteFaded};
    font-family: ${fonts.sans};
    padding: 13px;
    font-size: 18px;
    line-height: 1;
    font-weight: ${weights.bold};

    ${mediaQueries.phoneLarge} {
      margin-right: 40px;
      padding: 11px 0;
    }
    &:hover {
      color: ${colors.white};
    }
  `;
  const wrapperStyle = css`
    padding: 20px 0;
    text-align: center;
    background-color: ${colors.darkgray};
    min-height: 100vh;
    display: flex;
    align-items: center;

    ${mediaQueries.phoneLarge} {
      display: block;
      padding: 80px 0;
      min-height: 0;
    }
  `;
  const innerWrapperStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 50vh;
    ${mediaQueries.phoneLarge} {
      flex-direction: row;
      justify-content: center;
      min-height: 0;
    }
  `;
  return (
    <div css={wrapperStyle}>
      <div css={[innerWrapperStyle, container.max]}>
        <Link css={linkStyle} to='/work/'>
          Work
        </Link>
        <Link css={linkStyle} to='/capabilities/'>
          Capabilities
        </Link>
        <Link css={linkStyle} to='/insights/'>
          Insights
        </Link>
        <Link css={linkStyle} to='/about/'>
          About
        </Link>
        <Link css={linkStyle} to='/careers/'>
          Careers
        </Link>
        <Link css={linkStyle} to='/contact/'>
          Contact
        </Link>
        <Link css={linkStyle} to='/legal/'>
          Legal
        </Link>
      </div>
    </div>
  );
};

export default Footer;
