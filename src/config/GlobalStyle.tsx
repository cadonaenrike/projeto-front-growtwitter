import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: Karla, Roboto, sans-serif;
    background-color: var(--background);
    color: var(--text);
  }
 
  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    cursor: pointer;
    color: var(--button-color);
  }
`;

export default GlobalStyle;
