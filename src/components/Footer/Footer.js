import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { colors, fonts, weights, mediaQueries } from '../../styles';

const Footer = () => {
  const linkStyle = css`
    color: ${colors.white};
    text-decoration: none;
    font-family: ${fonts.sans};
    padding: 0.3rem;
    font-size: 18px;
    font-weight: ${weights.bold};
    line-height: 45px;

    ${mediaQueries.phoneLarge} {
      padding-left: 20px;
    }
    &:hover {
      transition: all ease-in-out 0.5s;
      text-decoration: underline;
    }
  `;
  const wrapperStyle = css`
    position: relative;
    bottom: 0;
    background-color: ${colors.darkgray};
    height: 100%;
    color: ${colors.white};
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mediaQueries.phoneLarge} {
      width: 100%;
      height: 200px;
      flex-direction: row;
    }
  `;
  return (
    <div css={wrapperStyle}>
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
  );
};

export default Footer;
