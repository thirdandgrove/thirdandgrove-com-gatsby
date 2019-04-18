import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const Menu = () => {
  const linkStyle = css`
    color: #282829;
    text-decoration: none;
  `;
  const sectionStyle = css`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
      font-family: 'Canela-Thin';
      font-weight: 300;
      font-size: 21px;
      color: #282829;
      letter-spacing: -0.1px;
      text-align: center;
      line-height: 81px;
    }
    h1 {
      font-family: 'Canela-Medium';
      font-size: 48px;
      color: #282829;
      letter-spacing: -0.2px;
      text-align: center;
      line-height: 81px;
    }
  `;
  return (
    <nav
      css={css`
        position: fixed;
        width: 100vw;
        height: 700px;
        display: flex;
        padding: 3rem;
        justify-content: center;
        background-color: #a5e6ec;
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

export default Menu;
