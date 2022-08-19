import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: whitesmoke;
    font-family: sans-serif;
  }

  ul {
    list-style: none;
  }

  input {
    font: inherit;
  }
`;
