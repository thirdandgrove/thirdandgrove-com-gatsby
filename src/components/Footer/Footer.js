import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const Footer = () => {
  const linkStyle = css`
    color: white;
    text-decoration: none;
    font-family: 'NB International Pro';
    padding-left: 20px;
    &:hover {
      transition: all ease-in-out 0.5s;
      text-decoration: underline;
    }
  `;
  return (
    <div
      css={css`
        position: relative;
        bottom: 0;
        height: 200px;
        background-color: #29292a;
        width: 100%;
        color: white;
        display: flex;
        /* justify-content: center; */
        align-items: center;
      `}
    >
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
