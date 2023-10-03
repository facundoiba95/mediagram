import { styled } from "styled-components";

export const GlobalContainerGridStyles = styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-columns: ${ props => props.isLogged ? '250px 1fr' : '1fr'};
overflow-y: ${ props => props.isLogged ? 'scroll' : 'none'};
`

export const GlobalContainerScrollSectionStyle = styled.div`
width:100%;
height:100vh;
display:flex;
align-items:flex-start;
justify-content:center;
`