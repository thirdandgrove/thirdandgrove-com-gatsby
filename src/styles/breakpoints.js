/* eslint-disable import/prefer-default-export */
const breakpoints = [600, 900, 1200, 1800];
const names = [`phone`, `phone-large`, `desktop`, `desktop-large`];

export const mediaQueries = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (min-width: ${bp}px)`;
  return acc;
}, {});
