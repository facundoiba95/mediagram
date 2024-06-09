import styled from "styled-components";

export const ContainerFoundedTagsListStyles = styled.div`
width: 100%;
height: auto;
max-width: 500px;
border: 2px solid white;
padding: 10px;
flex-wrap: wrap;
display: ${props => props.isHidden ? 'flex' : 'none'};
`