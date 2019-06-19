/* eslint-disable import/prefer-default-export */

// Styles that are more specific than the element level, but that we still want
// to reuse across multiple components. Basically things that would be regular
// CSS classes in a non-JS-based theme.
import { css } from '@emotion/core';
import { colors, weights, mediaQueries } from './css-utils';

// Containers
// (There are going to be more widths as the projet progresses)
const contWidths = [1220];
const contLabels = [`max`];

export const container = contWidths.reduce((acc, w, i) => {
  acc[contLabels[i]] = css`
    width: ${w}px;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  `;
  return acc;
}, {});

// Heading modifications
export const h1Xl = css`
  margin-bottom: 10px;
  font-size: 39px;
  line-height: 1.23;
  font-weight: ${weights.black};
  letter-spacing: 0.52px;

  ${mediaQueries.phoneLarge} {
    margin-bottom: 20px;
    font-size: 100px;
    line-height: 1;
    letter-spacing: 1.33px;
  }
`;

// Large quotes
export const quoteText = css`
  font-weight: ${weights.medium};
  font-size: 39px;
  line-height: 1.15;
  ${mediaQueries.phoneLarge} {
    font-size: 61px;
    line-height: 1.25;
  }
`;

export const quoL = css`
  color: ${colors.yellow};

  ${mediaQueries.desktop} {
    position: absolute;
    margin-left: -26px;
  }
`;

export const quoR = css`
  color: ${colors.yellow};
`;

export const quoteAttr = css`
  margin-bottom: 0;
  font-size: 12px;
  line-height: 3;
  ${mediaQueries.phoneLarge} {
    font-size: 21px;
    line-height: 1.71;
  }
`;
