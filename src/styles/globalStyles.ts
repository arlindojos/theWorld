import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--dark);
}

html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
}

*, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Ubuntu, Arial, sans-serif;
}

html {
    background: var(--light);
}

:root {
    --light: #F0F0F7;
    --dark: rgb(36, 41, 46);
    --primary: #246870;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --box-shadow: rgba(0, 0, 0, 0.2);
    --outline-dark: #2F3336;
    --outline-light: #D4C2FF;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;

    font-size: 62.5%;
}
`;