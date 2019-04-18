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
        position: fixed;
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
      <Link css={linkStyle} to='/Work'>
        Work
      </Link>
      <Link css={linkStyle} to='/Capabilities'>
        Capabilities
      </Link>
      <Link css={linkStyle} to='/Insights'>
        Insights
      </Link>
      <Link css={linkStyle} to='/About'>
        About
      </Link>
      <Link css={linkStyle} to='/Careers'>
        Careers
      </Link>
      <Link css={linkStyle} to='/Contact'>
        Contact
      </Link>
      <Link css={linkStyle} to='/Legal'>
        Legal
      </Link>
    </div>
  );
};

export default Footer;
