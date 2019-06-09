/* eslint-disable import/prefer-default-export */
// Global CSS Styles
import { css } from '@emotion/core';
import { colors } from './colors';
import { fonts, weights } from './fonts';
import { mediaQueries } from './breakpoints';
// import { jsBreakpoints } from './breakpoints';

export const globalStyles = css`
  /*
   * Font face declarations
   */

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-Thin.otf') format('otf');
    font-weight: 100;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-ThinItalic.otf') format('otf');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-Light.otf') format('otf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-LightItalic.otf') format('otf');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-Regular.otf') format('otf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-RegularItalic.otf') format('otf');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-Medium.otf') format('otf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-MediumItalic.otf') format('otf');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-Bold.otf') format('otf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-BoldItalic.otf') format('otf');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-Black.otf') format('otf');
    font-weight: 900;
  }

  @font-face {
    font-family: 'Canela';
    src: url('/Fonts/Canela/Canela-BlackItalic.otf') format('otf');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'NB International Pro';
    src: url('/Fonts/NBInternationalPro/NBInternationalProRegular.otf')
      format('otf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'NB International Pro';
    src: url('/Fonts/NBInternationalPro/NBInternationalProItalic.otf')
      format('otf');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'NB International Pro';
    src: url('/Fonts/NBInternationalPro/NBInternationalProBold.otf')
      format('otf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'NB International Pro';
    src: url('/Fonts/NBInternationalPro/NBInternationalProBoldItalic.otf')
      format('otf');
    font-weight: 700;
    font-style: italic;
  }

  /*
   * Global Typography
   */

  html {
    font-size: 112.5%;

    ${mediaQueries.xs} {
      font-size: 100%;
    }
  }

  body {
    font-family: ${fonts.serif};
    font-weight: ${weights.regular};
    line-height: 1.45;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    color: ${colors.darkgray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0 0 1.45rem;
    font-weight: ${weights.medium};
    line-height: 1.1;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.62671rem;
  }

  h3 {
    font-size: 1.38316rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.85028rem;
  }

  h6 {
    font-size: 0.78405rem;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;

    &:hover,
    &:focus {
      outline-width: 0;
    }
  }

  b,
  strong {
    font-weight: ${weights.bold};
  }
`;
