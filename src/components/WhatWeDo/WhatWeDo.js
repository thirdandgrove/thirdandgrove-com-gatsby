import React from 'react';
import { css } from '@emotion/core';

import Button from '../Button';
import { colors, mediaQueries, smSectionHead } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const WhatWeDo = () => {
  const headingCss = css`
    margin-bottom: 5px;
    font-size: 48px;
    line-height: 1.4;
    letter-spacing: -0.5px;
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s ease all;

    &:last-of-type {
      margin-bottom: 40px;
    }

    ${mediaQueries.phoneLarge} {
      font-size: 90px;
      line-height: 1.33;
      letter-spacing: -1.13px;
      margin-bottom: 0;
    }

    &:hover {
      opacity: 1;
    }
  `;

  return (
    <FullWidthSection
      backgroundColor={colors.lightblue}
      height='750px'
      minHeight='550px'
      css={css`
        padding-top: 40px;
        padding-bottom: 60px;
        ${mediaQueries.phoneLarge} {
          padding-top: 80px;
          padding-bottom: 100px;
        }
      `}
    >
      <h3 css={smSectionHead}>What We Do</h3>
      <h1 css={headingCss}>Technology</h1>
      <h1 css={headingCss}>Strategy</h1>
      <h1 css={headingCss}>Creative</h1>
      <Button onClick={() => navigate(`/capabilities`)}>Our Capabilities</Button>
    </FullWidthSection>
  );
};

export default WhatWeDo;
