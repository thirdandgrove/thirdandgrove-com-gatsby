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

/* Colors - Use a RGB to HEX converter */
export const colors = {
  white: `#fff`,
  whiteFaded: `rgba(255, 255, 255, 0.7)`,
  black: `#000`,
  gray: `#e0e0e0`,
  tagGray: `#282829`,
  lightgray: `#F8F8F9;`,
  darkgray: `#29292a`,
  darkgrayFaded: `rgba(41, 41, 42, 0.7)`,
  darkergrayFaded: `rgba(41, 41, 42, 0.9)`,
  reallydarkgray: `#282829;`,
  yellow: `#EBC900`,
  lightblue: `#a5e6ec`,
  acquiaBlue: `#0678BE`,
  lightgreen: `#cef5e2`,
  gatsbyPurple: '#663399',
  drupalBlue: '#29A8DF',
  shopifyGreen: '#80AB42',
  bigCommerceBlue: '#0D52FF',
  red: 'red',
};
