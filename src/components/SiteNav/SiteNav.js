import React, { useState } from 'react';
import { css } from '@emotion/core';

const SiteNav = props => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  return (
    <>
      <span
        css={css`
          position: absolute;
          top: 0;
          padding: 5px 30px;
          width: 100%;
          display: flex;
          background-color: transparent;
          justify-content: space-between;
        `}
      >
        <p>Third and Grove</p>
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
      {isOpen && <span>all the menu content</span>}
    </>
  );
};

export default SiteNav;
