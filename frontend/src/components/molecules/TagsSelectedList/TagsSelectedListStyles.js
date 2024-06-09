import styled from "styled-components";

export const ContainerTagsSelectedListStyles = styled.ul`
width: 100%;
max-width: 500px;
height: auto;
display: ${props => props.isHidden ? 'flex' : 'none'};
flex-wrap: wrap;
gap: 10px;
`