import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import TopNav from '../TopNav';

const Header = ({ defaultBackground, title, fade, height, children }) => {
  const headerTitle = css`
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: ${fade ? `fadein 2s` : `none`};
    font-size: 72px;
    font-weight: 300;
    width: 60%;
    text-align: center;
    color: ${defaultBackground ? '#282829' : '#efefef'};
  `;
  return (
    <>
      <TopNav />
      <header
        css={css`
          width: 100%;
          height: ${height || '700px'};
          display: flex;
          font-family: 'Canela-Medium';
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: ${defaultBackground ? '#EBC900' : '#99E2E9'};
        `}
      >
        <h1 css={headerTitle}>{title}</h1>
        {children && children}
      </header>
    </>
  );
};

Header.propTypes = {
  defaultBackground: PropTypes.bool,
};

Header.defaultProps = {
  defaultBackground: true,
};

export default Header;
