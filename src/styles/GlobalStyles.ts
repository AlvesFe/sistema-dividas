import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: var(--background);
  }

  :root {
    --white: #ffffff;
    --white-50: #F2F2F2;
    --primary: #3E82FC;
    --secondary: #FE2C54;
    --highlight: #26F7FD;
    --background: #152935;
    --black: #000000;
    --black-50: #1E1E21;
    --label: rgba(0, 0, 0, 0.5);
  }
`