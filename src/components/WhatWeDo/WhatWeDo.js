import React, { forwardRef } from 'react';
import { css } from '@emotion/core';
import { navigate } from 'gatsby';

import Button from '../Button';
import { colors, mediaQueries, smSectionHead } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import Layout from '../layout';

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
      <div>
        {props.data.map((capabilities, index) => (
          <div>
            <h4>{capabilities.title}</h4>
            <p>{capabilities.field_description}</p>
            <a href={capabilities.field_cta.uri}>
              {capabilities.field_cta.title}
            </a>
          </div>
        ))}
      </div>
    </FullWidthSection>
  );
});

export default WhatWeDo;
