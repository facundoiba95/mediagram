import styled from "styled-components";

export const ContainerItemTagsFoundedStyles = styled.li`
width: auto;
height: 40px;
color: white;
display: flex;
align-items: center;
background-color: ${props => props.isSelected || props.inList ? 'yellowgreen' : '#80808050'};
border-radius: 5px;
cursor: pointer;

h3 {
    padding: 5px;
    font-size:1.3rem;
    background-color: transparent;
    color: ${props => props.isSelected || props.inList ? 'black': 'white'};
}

i {
    display: ${props => props.isSelected ? 'block': 'none'};
}
`