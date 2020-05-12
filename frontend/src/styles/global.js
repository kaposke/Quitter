import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
    }

    body {
        background: #ddd;
        font-family: 'Montserrat', sans-serif;
        list-style: none;
    }
`;