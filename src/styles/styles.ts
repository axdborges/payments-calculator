import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {

        --gray-background: rgba(205, 213, 221, 0.4);

        --blue-text: rgba(35, 135, 241);
        --gray-text : rgba(97, 99, 100);
  
    }


    * {
        padding: 0;
        margin: 0;
        border: 0;
        font-size: 100%;
        box-sizing: border-box;
        text-decoration: none;
    }


    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    .App {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;

        background-color: var(--gray-background);

        font-size: calc(10px + 2vmin);
        /* color: white; */

        height: 100vh;
        width: 100vw;
    }

    button {
        cursor: pointer;
    }

`