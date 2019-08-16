/* eslint-disable import/prefer-default-export */
// Global CSS Styles
import { css } from '@emotion/core';

import { colors, fonts, weights, mediaQueries } from './css-utils';

export const globalStyles = css`
  /*
   * Font face declarations
   */

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-Thin'),
      url('/Fonts/Canela/Canela-Thin.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-Thin.woff') format('woff');
    font-weight: 100;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-ThinItalic'),
      url('/Fonts/Canela/Canela-ThinItalic.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-Light'),
      url('/Fonts/Canela/Canela-Light.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-Light.woff') format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-LightItalic'),
      url('/Fonts/Canela/Canela-LightItalic.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-Regular'),
      url('/Fonts/Canela/Canela-Regular.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-Regular.woff2') format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-RegularItalic'),
      url('/Fonts/Canela/Canela-RegularItalic.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-RegularItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-Medium'),
      url('/Fonts/Canela/Canela-Medium.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-Medium.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-MediumItalic'),
      url('/Fonts/Canela/Canela-MediumItalic.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-Bold'),
      url('/Fonts/Canela/Canela-Bold.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-Bold.woff') format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-BoldItalic'),
      url('/Fonts/Canela/Canela-BoldItalic.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-Black'),
      url('/Fonts/Canela/Canela-Black.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-Black.woff') format('woff');
    font-weight: 900;
  }

  @font-face {
    font-family: 'Canela';
    font-display: fallback;
    src: local('Canela-BlackItalic'),
      url('/Fonts/Canela/Canela-BlackItalic.woff2') format('woff2'),
      url('/Fonts/Canela/Canela-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'NB International Pro';
    font-display: fallback;
    src: local('NBInternationalProLight'),
      url('/Fonts/NBInternationalPro/NBInternationalProLight.woff2')
        /* no woff for this font */ format('woff2');
    font-weight: 100;
  }

  @font-face {
    font-family: 'NB International Pro';
    font-display: fallback;
    src: local('NBInternationalProRegular'),
      url('/Fonts/NBInternationalPro/NBInternationalProRegular.woff2')
        format('woff2'),
      url('/Fonts/NBInternationalPro/NBInternationalProRegular.woff')
        format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'NB International Pro';
    font-display: fallback;
    src: local('NBInternationalProItalic'),
      url('/Fonts/NBInternationalPro/NBInternationalProItalic.woff2')
        format('woff2'),
      url('/Fonts/NBInternationalPro/NBInternationalProItalic.woff')
        format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'NB International Pro';
    font-display: fallback;
    src: local('NBInternationalProBold'),
      url('/Fonts/NBInternationalPro/NBInternationalProBold.woff2')
        format('woff2'),
      url('/Fonts/NBInternationalPro/NBInternationalProBold.woff')
        format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'NB International Pro';
    font-display: fallback;
    src: local('NBInternationalProBoldItalic'),
      url('/Fonts/NBInternationalPro/NBInternationalProBoldItalic.woff2')
        format('woff2'),
      url('/Fonts/NBInternationalPro/NBInternationalProBoldItalic.woff')
        format('woff');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'NB International Pro Mono';
    font-display: fallback;
    src: local('NBInternationalProMono'),
      url('/Fonts/NBInternationalPro/NBInternationalProMono.woff2')
        format('woff2'),
      url('/Fonts/NBInternationalPro/NBInternationalProMono.woff')
        format('woff');
    font-weight: 400;
  }

  /*
   * Global Typography & Normalization
   */

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 100%;

    ${mediaQueries.xs} {
      font-size: 112.5%;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
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

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  img,
  hgroup,
  dl,
  dd,
  p,
  figure,
  table,
  fieldset,
  noscript,
  iframe,
  address {
    padding: 0;
    margin: 0 0 1.45rem;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden],
  template {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0 0 1.45rem;
    font-family: ${fonts.serif};
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

  p {
    margin-bottom: 27px;
    font-family: ${fonts.sans};
    font-size: 16px;
    letter-spacing: 0.2;
    line-height: 1.7;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 30px;
    }
  }

  p *:last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: ${colors.darkgrayFaded};
    transition: 0.3s ease all;

    &:hover,
    &:focus {
      outline-width: 0;
      color: ${colors.darkgray};
    }
  }

  b,
  strong,
  dt {
    font-weight: ${weights.bold};
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background-color: ${colors.yellow};
    color: ${colors.darkgray};
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  code,
  kbd,
  samp {
    font-family: ${fonts.mono};
    font-weight: ${weights.regular};
    font-size: 0.85rem;
    line-height: 1.45rem;
  }

  abbr,
  acronym {
    border-bottom: 1px dotted ${colors.darkgrayFaded};
    cursor: help;
  }

  abbr[title] {
    border-bottom: 1px dotted ${colors.darkgrayFaded};
    cursor: help;
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0 0 1.45rem;
    padding: 0 0 0 1rem;
    font-family: ${fonts.sans};
    font-size: 16px;
    list-style-position: outside;
    list-style-image: none;
  }

  ol li,
  ul li {
    padding-left: 0.45rem;
    margin-bottom: calc(1.45rem / 2);
  }

  li > ol {
    padding-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li > ul {
    padding-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  blockquote {
    margin: 0 1.45rem 1.45rem;
    padding: 0;
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  table {
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }

  thead {
    text-align: left;
  }

  th {
    font-weight: ${weights.bold};
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding: 0.725rem 0.96667rem calc(0.725rem - 1px);

    &:first-of-type {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  td *:last-child,
  th *:last-child {
    margin-bottom: 0;
  }

  pre {
    margin: 0 0 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }

  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: ${fonts.mono};
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }

  pre code {
    background: none;
    line-height: 1.42;
  }

  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: ' ';
  }

  hr {
    box-sizing: content-box;
    margin: 0 0 calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  /*
   * Global Image Styles
   */

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 1em 40px;
  }

  img,
  picture {
    max-width: 100%;
    border-style: none;
  }

  /*
   * Global Form Styles
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font: inherit;
  }

  optgroup {
    font-weight: ${weights.bold};
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }

  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
`;
