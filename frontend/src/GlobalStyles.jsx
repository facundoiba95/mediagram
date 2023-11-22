import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{  
    margin:0;
    padding:0;
    box-sizing:border-box;
    background-color: #111B21;
    list-style: none;
    text-decoration: none;
}

:root{
        --violetpink: #ff006e;
        --heavyDark: #6B9080;
        --dark: #A4C3B2;
        --medium: #CCE3DE;
        --light: #EAF4F4;
        --heavyLight: #F6FFF8;
        --darkgrey:rgba(255, 255, 255, 0.2);
        --lightblack: #80808020;
    }

    ::-webkit-scrollbar {
    background-color: #80808080;
    height: 7px;
    width:13px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--darkgrey);
    height: 7px;
}

body {
    overflow-x: hidden;
}
`

export default GlobalStyle;