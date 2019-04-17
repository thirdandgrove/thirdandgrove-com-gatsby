import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const SiteNav = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  return (
    <>
      <span
        css={css`
          position: absolute;
          top: 0;
          padding: 5px 100px;
          width: 100%;
          display: flex;
          background-color: transparent;
          justify-content: space-between;
          align-items: baseline;
          z-index: 1;
        `}
      >
        <h3
          css={css`
            color: #29292a;
          `}
        >
          Third and Grove
        </h3>
        <button
          css={css`
            background-color: transparent;
            padding: 0;
            margin: 0;
            border: none;
            :focus {
              outline: none;
            }
          `}
          type='button'
          onClick={() => toggleOpen()}
        >
          &#9776;
        </button>
      </span>
      {/* // some transition in/out? */}
      {isOpen && <Menu toggleOpen={toggleOpen} />}
    </>
  );
};

const Menu = ({ toggleOpen }) => (
  <nav
    css={css`
      position: fixed;
      width: 100vw;
      height: 30vh;
      display: flex;
      justify-content: center;
      background-color: #a5e6ec;
    `}
  >
    <section>
      <h5>Contents</h5>
      <Link to='/Work'>
        <h3>Work</h3>
      </Link>
      <Link to='/Capabilities'>
        <h3>Capabilities</h3>
      </Link>
      <Link to='/Insights'>
        <h3>Insights</h3>
      </Link>
    </section>

    <section>
      <h5>Company</h5>
      <Link to='/About'>
        <h3>About</h3>
      </Link>
      <Link to='/Careers'>
        <h3>Careers</h3>
      </Link>
      <Link to='/Contact'>
        <h3>Contact</h3>
      </Link>
    </section>
    <section>
      <h5>Partners</h5>
      <Link to='/Drupal'>
        <h3>Drupal</h3>
      </Link>
      <Link to='/Acquia'>
        <h3>Acquia</h3>
      </Link>
      <Link to='/Shopify'>
        <h3>Shopify</h3>
      </Link>
    </section>
  </nav>
);

export default SiteNav;
