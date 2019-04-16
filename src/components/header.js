import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import SiteNav from './SiteNav';

const Header = ({ defaultBackground, tagline }) => (
  <header
    css={css`
      width: 100%;
      height: 30vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${defaultBackground ? '#EBC900' : '#99E2E9'};
    `}
  >
    <SiteNav />
    <h1
      css={css`
        font-size: 48px;
        font-weight: 400;
        width: 60%;
        text-align: center;
        color: ${defaultBackground ? '#29292a' : '#efefef'};
      `}
    >
      {tagline}
    </h1>
  </header>
);

Header.propTypes = {
  defaultBackground: PropTypes.bool,
};

Header.defaultProps = {
  defaultBackground: true,
};

export default Header;
