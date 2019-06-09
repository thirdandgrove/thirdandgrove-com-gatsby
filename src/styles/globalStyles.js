/* eslint-disable import/prefer-default-export */
// Global CSS Styles
import { css } from '@emotion/core';
import { colors } from './colors';
import { fonts, weights } from './fonts';
import { mediaQueries } from './breakpoints';

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

  @font-face {
    font-family: 'NB International Pro Mono';
    src: url('/Fonts/NBInternationalPro/NBInternationalProMono.otf')
      format('otf');
    font-weight: 400;
  }

  /*
   * Global Typography & Normalization
   */

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    font-size: 112.5%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    ${mediaQueries.xs} {
      font-size: 100%;
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
  form,
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

  p *:last-child {
    margin-bottom: 0;
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
    margin: 0 0 1.45rem 1.45rem;
    padding: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  ol li,
  ul li {
    padding-left: 0;
    margin-bottom: calc(1.45rem / 2);
  }

  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li > ul {
    margin-left: 1.45rem;
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

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
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

  img {
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
