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
  `;
  const faded = css`
    opacity: 0.5;
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
      <h1 css={[headingCss, faded]}>Strategy</h1>
      <h1 css={[headingCss, faded]}>Creative</h1>
      <Button>Our Capabilities</Button>
    </FullWidthSection>
  );
};

export default WhatWeDo;
