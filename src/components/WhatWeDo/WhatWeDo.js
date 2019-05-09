import React from 'react';
import { css } from '@emotion/core';

import Button from '../Button';
import { colors } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const WhatWeDo = () => {
  const headingCss = css`
    height: 150px;
    color: ${colors.darkgray};
    font-family: Canela;
    font-size: 120px;
    font-weight: 500;
    letter-spacing: -1.5px;
    line-height: 150px;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      transition: opacity 0.2s ease;
      opacity: 1;
    }
  `;
  return (
    <FullWidthSection backgroundColor={colors.lightblue} height='850px'>
      <h3
        css={css`
          height: 50px;
          color: ${colors.darkgray};
          font-family: Canela-Thin;
          font-size: 36px;
          font-weight: 100;
          letter-spacing: 0.4px;
          line-height: 76px;
          padding-bottom: 4rem;
        `}
      >
        What We Do
      </h3>
      <h1 css={headingCss}>Technology</h1>
      <h1 css={headingCss}>Strategy</h1>
      <h1 css={headingCss}>Creative</h1>
      <Button>Our Capabilities</Button>
    </FullWidthSection>
  );
};

export default WhatWeDo;
