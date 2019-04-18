import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import TopNav from '../TopNav';

const Header = ({ defaultBackground, tagline, subline }) => (
  <header
    css={css`
      width: 100%;
      height: 700px;
      display: flex;
      font-family: 'Canela-Medium';
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${defaultBackground ? '#EBC900' : '#99E2E9'};
    `}
  >
    <h1
      css={css`
        font-size: 72px;
        font-weight: 300;
        width: 60%;
        text-align: center;
        color: ${defaultBackground ? '#282829' : '#efefef'};
      `}
    >
      {tagline}
    </h1>

    {subline && (
      <h3
        css={css`
          font-size: 72px;
          font-family: 'Canela-Thin';
          font-weight: 200;
          width: 60%;
          text-align: center;
          color: ${defaultBackground ? '#282829' : '#efefef'};
        `}
      >
        {subline}
      </h3>
    )}

    <TopNav />
  </header>
);

Header.propTypes = {
  defaultBackground: PropTypes.bool,
};

Header.defaultProps = {
  defaultBackground: true,
};

export default Header;
