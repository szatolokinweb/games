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
    background-color: #b1b1b1;
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
  }

  input {
    font: inherit;
    outline: none;
  }
  
  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    font: inherit;
  }
`;
