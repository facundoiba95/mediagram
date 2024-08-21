import styled from "styled-components";

export const ContainerListHashtagsFoundStyles = styled.ul`
width: 100%;
height: 100%;
max-width: ${props => props.maxWidth};
max-height: 200px;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 2px;
border-radius: 5px;

`

export const ItemHashtagFoundStyles = styled.li`
width: 100%;
height: auto;
cursor: pointer;
background-color: #80808030;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5px 0px 5px 5px;
border-radius: 5px;
font-family: "Red Hat Display";

&:hover {
    background-color: #80808060;
}


b, small{
    background-color: transparent;
    color: white;
}
`