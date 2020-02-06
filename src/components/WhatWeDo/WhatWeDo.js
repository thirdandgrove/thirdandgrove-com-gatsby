import React, { forwardRef } from 'react';
import { css } from '@emotion/core';
import { navigate } from 'gatsby';

import Button from '../Button';
import { colors, mediaQueries, smSectionHead } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const WhatWeDo = forwardRef((props, ref) => {
  const headingCss = css`
    margin-bottom: 5px;
    font-size: 48px;
    line-height: 1.4;
    letter-spacing: -0.5px;
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

    a {
      color: ${colors.darkgrayFaded};
    }

    a:hover {
      color: ${colors.darkgray};
    }
  `;

  return (
    <FullWidthSection
      ref={ref}
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
      <h4 css={headingCss}>
        <a href='/capabilities#technology'>Technology</a>
      </h4>
      <h4 css={headingCss}>
        <a href='/capabilities#strategy'>Strategy</a>
      </h4>
      <h4 css={headingCss}>
        <a href='/capabilities#creative'>Creative</a>
      </h4>
      <Button onClick={() => navigate(`/capabilities/`)}>
        Our Capabilities
      </Button>
    </FullWidthSection>
  );
});

export default WhatWeDo;
