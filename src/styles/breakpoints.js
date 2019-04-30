/* eslint-disable import/prefer-default-export */
const breakpoints = [600, 900, 1200, 1800];
const names = [`phone`, `phoneLarge`, `desktop`, `desktopLarge`];

export const mediaQueries = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (max-width: ${bp}px)`;
  return acc;
}, {});
