import styled from "styled-components";

export const SuggestionListGridStyles = styled.ul`
width: 100%;
height: auto;
/* display: grid;
gap: 10px;
grid-template-columns: repeat(2, minMax(100px, 100px));
justify-content: center; */
display: flex;
justify-content: flex-start;
flex-wrap: nowrap;
overflow-x: scroll;
gap: 5px;
`

export const SuggestionItemStyles = styled.li`
width: auto;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
padding: 10px;

border-right: 1px solid #80808080;

img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

b {
    background-color: transparent;
}

span {
    display: flex;
    flex-direction: column;
}
`