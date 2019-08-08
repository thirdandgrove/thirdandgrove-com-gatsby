/* eslint-disable import/prefer-default-export */

// Styles that are more specific than the element level, but that we still want
// to reuse across multiple components. Basically things that would be regular
// CSS classes in a non-JS-based theme.
import { css } from '@emotion/core';

import { fonts, colors, weights, mediaQueries } from './css-utils';

// Containers
// (There are going to be more widths as the project progresses)
const contWidths = [680, 820, 1020, 1120, 1220];
const contLabels = [`min`, `textOnly`, `medium`, `large`, `max`];

export const contValues = contWidths.reduce((acc, value, i) => {
  acc[contLabels[i]] = `${value}px`;
  return acc;
}, {});

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

export const h1L = css`
  font-size: 39px;
  font-weight: ${weights.medium};
  line-height: 1.23;
  letter-spacing: -0.45px;

  ${mediaQueries.phoneLarge} {
    font-size: 72px;
    line-height: 1.16;
    letter-spacing: 0;
  }
`;

export const smSectionHead = css`
  margin-bottom: 0;
  font-size: 21px;
  font-weight: ${weights.thin};
  letter-spacing: 0.23px;
  line-height: 3.62;
  color: ${colors.reallydarkgray};

  ${mediaQueries.phoneLarge} {
    margin-bottom: 30px;
    font-size: 36px;
    line-height: 2;
    letter-spacing: 0.4px;
  }
`;

export const contentH2 = css`
  margin-top: 25px;
  margin-bottom: 10px;
  font-family: ${fonts.sans};
  font-size: 21px;
  font-weight: ${weights.bold};
  line-height: 1.4;
`;

export const contentHeadings = css`
  font-family: ${fonts.sans};
  font-size: 16px;
  font-weight: ${weights.bold};
  letter-spacing: 0.2px;
  line-height: 1.69;
  margin-bottom: 30px;
`;

export const dropCap = css`
  & > p:first-of-type::first-letter {
    float: left;
    padding: 4px 20px 0;
    color: ${colors.reallydarkgray};
    font-family: ${fonts.serif};
    font-size: 50px;
    font-weight: ${weights.regular};
    line-height: 1;

    ${mediaQueries.phoneLarge} {
      padding: 6px 20px 20px;
    }
  }
`;

export const pLight = css`
   {
    color: ${colors.reallydarkgray};
    font-family: ${fonts.sans};
    font-size: 16px;
    font-weight: ${weights.light};
    letter-spacing: 0.2px;
    line-height: 1.69;
    text-align: center;
  }
`;
