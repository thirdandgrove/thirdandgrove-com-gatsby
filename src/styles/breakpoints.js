/* eslint-disable import/prefer-default-export */
const breakpoints = [480, 600, 900, 1200, 1800];
const names = [`xs`, `phone`, `phoneLarge`, `desktop`, `desktopLarge`];

export const mediaQueries = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (min-width: ${bp}px)`;
  return acc;
}, {});

export const jsBreakpoints = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = bp;
  return acc;
}, {});
