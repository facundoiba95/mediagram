import styled from "styled-components";

export const ContainerListHashtagsFoundStyles = styled.ul`
width: 100%;
height: 100%;
max-height: 200px;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 2px;
border-radius: 5px;
/* position: absolute;
margin: 0;
list-style-type: none; */
`

export const ItemHashtagFoundStyles = styled.li`
width: 100%;
height: 100%;
cursor: pointer;
background-color: #80808030;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5px 0px 5px 5px;

&:hover {
    background-color: #80808060;
}

b, small{
    background-color: transparent;
}
`