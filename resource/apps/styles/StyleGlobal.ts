/*
  Global Styles. ( Reset & Default Setting )
*/

// Import Styled Components.
import { createGlobalStyle } from 'styled-components'
// Import Style Variables.
import { GLOBAL_FONT, GLOBAL_COLOR } from '@/styles/StyleConstants'

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900&display=swap);
  @import url(https://fonts.googleapis.com/css?family=Lobster&display=swap);
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap);

  a,
  address,
  article,
  aside,
  audio,
  blockquote,
  button,
  body,
  canvas,
  caption,
  code,
  dd,
  div,
  dl,
  dt,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  iframe,
  img,
  input,
  label,
  li,
  mark,
  menu,
  nav,
  ol,
  output,
  p,
  pre,
  ruby,
  section,
  select,
  span,
  summary,
  table,
  tbody,
  td,
  textarea,
  th,
  time,
  tr,
  ul,
  video {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-style: normal;
    font-weight: normal;
    vertical-align: baseline;
    border: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    overflow-wrap: break-word;
  }

  html {
    width: 100vw;
    font-size: 62.5%;
  }

  body {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 50px 0 20px;
    overflow-x: hidden;
    font-family: ${GLOBAL_FONT};
    line-height: 1;
    color: ${GLOBAL_COLOR};
    letter-spacing: 0;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;

    @supports (-webkit-touch-callout: none) {
      /* height: -webkit-fill-available; */
    }

    @media all and (-ms-high-contrast: none) {
      /* display: block; */
    }
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
  }

  a:hover {
    color: inherit;
  }

  a:active,
  a:hover,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  img {
    vertical-align: middle;
  }

  li,
  ol,
  ul {
    list-style-type: none;
  }

  table {
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
  }

  button {
    cursor: pointer;
  }

  input[type="button"],
  input[type="submit"],
  input[type="text"],
  select,
  button {
    background-color: transparent;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  ::selection {
    background: rgba();
  }

  ::-moz-selection {
    background: rgba();
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    /* Safari Hack */

    * {}
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
    /* Chrome Hack */

    * {}
  }

  @-moz-document url-prefix() {
    /* FireFox Hack */

    * {}
  }

  @media all and (-ms-high-contrast: none) {
    /* IE Hack */

    * {}
  }
`
