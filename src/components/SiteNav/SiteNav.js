import React, { useState } from 'react';
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
    grid of menu items
  </nav>
);

export default SiteNav;
