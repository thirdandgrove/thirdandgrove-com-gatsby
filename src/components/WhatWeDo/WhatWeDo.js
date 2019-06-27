import React from 'react';
import { css } from '@emotion/core';

import Button from '../Button';
import { colors, weights, mediaQueries, smSectionHead } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const WhatWeDo = () => {
  const headingCss = css`
    font-size: 60px;
    line-height: 1.5;
    letter-spacing: -0.7px;
    opacity: 0.5;
    cursor: pointer;
    transition: 0.3s ease all;
    ${mediaQueries.phoneLarge} {
      font-size: 120px;
      line-height: 1.25;
      letter-spacing: -1.5px;
    }

    &:hover {
      opacity: 1;
    }
  `;
  return (
    <FullWidthSection
      backgroundColor={colors.lightblue}
      height='auto'
      css={css`
        padding-top: 40px;
        padding-bottom: 60px;
        ${mediaQueries.phoneLarge} {
          min-height: 100vh;
          padding-top: 80px;
          padding-bottom: 100px;
        }
      `}
    >
      <h3 css={smSectionHead}>What We Do</h3>
      <h1 css={headingCss}>Technology</h1>
      <h1 css={headingCss}>Strategy</h1>
      <h1 css={headingCss}>Creative</h1>
      <Button>Our Capabilities</Button>
    </FullWidthSection>
  );
};

export default WhatWeDo;
