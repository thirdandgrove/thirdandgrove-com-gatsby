/* eslint-disable import/prefer-default-export */

// Styles that are more specific than the element level, but that we still want
// to reuse across multiple components. Basically things that would be regular
// CSS classes in a non-JS-based theme.
import { css } from '@emotion/core';

import { fonts, colors, weights, mediaQueries } from './css-utils';

// Containers
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

export const btnStyles = css`
  position: relative;
  padding: 0;
  border: none;
  outline: none;
  font-family: ${fonts.sans};
  font-weight: ${weights.bold};
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: transparent;
  color: ${colors.darkgray};
  cursor: pointer;

  span {
    display: block;
    position: relative;
    padding: 17px 28px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to bottom,
      ${colors.darkgray},
      ${colors.darkgray} 50%,
      ${colors.white} 50%
    );
    background-size: 100% 200%;
    background-position: top;
    transition: all 0.3s ease;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transition: 0.3s ease height;
    background: ${colors.darkgray};
  }
  &:hover,
  &:focus {
    transition: all 0.3s ease;

    span {
      background-position: bottom;
    }

    &::before {
      height: 100%;
    }
  }
`;

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
    padding: 10px 20px 0;
    color: ${colors.reallydarkgray};
    font-family: ${fonts.serif};
    font-size: 50px;
    font-weight: ${weights.regular};
    line-height: 0.75;

    ${mediaQueries.phoneLarge} {
      padding: 6px 18px 0;
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

export const partnersProjects = css`
  ${container.min}
  padding-bottom: 16px;

  ${mediaQueries.phoneLarge} {
    padding: 110px 0 150px;
  }
  img {
    width: 100px;
  }
  h2 {
    color: ${colors.reallydarkgray};
    font-family: ${fonts.sans};
    font-size: 21px;
    font-weight: ${weights.bold};
    margin-bottom: 14px;
  }
  p {
    font-weight: ${weights.light};
    margin-bottom: 83px;
    letter-spacing: -0.1px;
  }
`;

export const partnersSub = css`
  padding: 50px 20px;

  ${mediaQueries.phoneLarge} {
    padding: 110px 0;
  }
  h4 {
    font-family: ${fonts.sans};
    font-size: 18px;
    font-weight: ${weights.bold};
    line-height: 1.39;
    margin-bottom: 12px;
  }
  p {
    font-weight: ${weights.light};
  }
  div {
    ${mediaQueries.phoneLarge} {
      display: flex;
      justify-content: space-between;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: ${fonts.sans};
    font-weight: ${weights.bold};
    list-style: none;

    li {
      margin-bottom: 4px;
      padding-left: 0;

      &:before {
        content: '—';
        padding-right: 2px;
      }
    }
  }

  ${mediaQueries.phoneLarge} {
    ${container.min}

    ul:last-of-type {
      margin-right: 100px;
    }
  }
`;

export const list = css`
  padding: 50px 20px;

  ${mediaQueries.phoneLarge} {
    padding: 110px 0;
  }
  h4 {
    font-family: ${fonts.sans};
    font-size: 18px;
    font-weight: ${weights.bold};
    line-height: 1.39;
    margin-bottom: 12px;
  }
  p {
    font-weight: ${weights.light};
  }
  div {
    ${mediaQueries.phoneLarge} {
      display: flex;
      justify-content: space-between;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: ${fonts.sans};
    font-weight: ${weights.bold};
    list-style: none;
    line-height: 1.5;

    li {
      margin-bottom: 10px;
      padding-left: 0;

      &:before {
        content: '—';
        padding-right: 2px;
      }
    }
  }

  ${mediaQueries.phoneLarge} {
    ${container.min}
  }
`;
