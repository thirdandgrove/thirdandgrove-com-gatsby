/* eslint-disable import/prefer-default-export */
/* Variables and functions specifically for CSS-in-JS use */

/* Media queries */
const breakpoints = [480, 900, 1220];
const names = [`xs`, `phoneLarge`, `desktop`];

export const mediaQueries = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (min-width: ${bp}px)`;
  return acc;
}, {});

export const jsBreakpoints = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = bp;
  return acc;
}, {});

/* Fonts */
export const fonts = {
  serif: `'Canela', serif`,
  sans: `'NB International Pro', sans-serif`,
  mono: `'NB International Pro Mono', monospace`,
};

export const weights = {
  thin: `100`,
  light: `300`,
  regular: `400`,
  medium: `500`,
  bold: `700`,
  black: `900`,
};

/* Colors */
export const colors = {
  white: `#fff`,
  whiteFaded: `rgba(255, 255, 255, 0.7)`,
  black: `#000`,
  gray: `#e0e0e0`,
  darkgray: `#29292a`,
  darkgrayFaded: `rgb(41, 41, 42, 0.7)`,
  mediumgray: `#757575`,
  yellow: `#EBC900`,
  lightblue: `#a5e6ec`,
};
