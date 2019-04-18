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
      font-weight: 300;
      margin-bottom: 2rem;
      font-family: canela-thin;
    }
    h1 {
      font-weight: 800;
    }
  `;
  return (
    <nav
      css={css`
        position: fixed;
        width: 100vw;
        height: 30vh;
        display: flex;
        padding: 3rem;
        justify-content: center;
        background-color: #a5e6ec;
      `}
    >
      <section css={sectionStyle}>
        <h5>Contents</h5>
        <Link css={linkStyle} to='/Work'>
          <h1>Work</h1>
        </Link>
        <Link css={linkStyle} to='/Capabilities'>
          <h1>Capabilities</h1>
        </Link>
        <Link css={linkStyle} to='/Insights'>
          <h1>Insights</h1>
        </Link>
      </section>

      <section css={sectionStyle}>
        <h5>Company</h5>
        <Link css={linkStyle} to='/About'>
          <h1>About</h1>
        </Link>
        <Link css={linkStyle} to='/Careers'>
          <h1>Careers</h1>
        </Link>
        <Link css={linkStyle} to='/Contact'>
          <h1>Contact</h1>
        </Link>
      </section>
      <section css={sectionStyle}>
        <h5>Partners</h5>
        <Link css={linkStyle} to='/Drupal'>
          <h1>Drupal</h1>
        </Link>
        <Link css={linkStyle} to='/Acquia'>
          <h1>Acquia</h1>
        </Link>
        <Link css={linkStyle} to='/Shopify'>
          <h1>Shopify</h1>
        </Link>
      </section>
    </nav>
  );
};

export default Menu;
