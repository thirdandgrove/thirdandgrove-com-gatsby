import React from 'react';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import { mediaQueries, colors, fonts } from '../../styles';

import NewsletterForm from './NewsletterForm';

export default () => (
  <FullWidthSection padding='60px 20px'>
    <h1
      css={css`
        ${mediaQueries.phoneLarge} {
          height: 84px;
          width: 840px;
          color: ${colors.reallydarkgray};
          font-family: ${fonts.serif};
          font-size: 72px;
          font-weight: 500;
          letter-spacing: -0.83px;
          line-height: 84px;
          text-align: center;
        }
        height: 48px;
        width: 335px;
        color: ${colors.reallydarkgray};
        font-family: ${fonts.serif};
        font-size: 39px;
        font-weight: 500;
        letter-spacing: -0.45px;
        line-height: 48px;
        text-align: center;
      `}
    >
      Don&apos;t be a stranger.
    </h1>
    <div
      css={css`
        max-with: '335px';
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <p
        css={css`
          ${mediaQueries.phoneLarge} {
            height: 90px;
            width: 335px;
            color: ${colors.reallydarkgray};
            font-family: ${fonts.sans};
            font-size: 16px;
            font-weight: 300;
            letter-spacing: 0.2px;
            line-height: 27px;
            text-align: center;
          }
          height: 90px;
          width: 335px;
          color: ${colors.reallydarkgray};
          font-family: ${fonts.sans};
          font-size: 16px;
          font-weight: 300;
          letter-spacing: 0.2px;
          line-height: 27px;
          text-align: center;
        `}
      >
        Keep up to date by signing up for our newsletter. It’ll be fun, we
        promise.
      </p>
      <NewsletterForm />
    </div>
  </FullWidthSection>
);
