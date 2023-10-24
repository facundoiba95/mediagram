import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{  
    margin:0;
    padding:0;
    box-sizing:border-box;
    background-color:var(--medium);
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
    }

    ::-webkit-scrollbar {
    background-color: var(--light);
    border-radius:5px;
    height: 7px;
    width:13px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--violetpink);
    border-radius:5px;
    height: 7px;
}
`

export default GlobalStyle;