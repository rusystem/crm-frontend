import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, main,
    menuitem, nav, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menuitem, nav, section {
        display: block;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        border: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        background: #fff;
        margin: 0;
        padding: 0;
    }

    input, textarea {
        font-family: inherit;
        font-size: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;
