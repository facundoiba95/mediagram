import { styled } from "styled-components";

export const GlobalContainerGridStyles = styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-columns: ${ props => props.isLogged ? '250px 1fr' : '1fr'};
overflow-y: ${ props => props.isLogged ? 'scroll' : 'none'};

@media (max-width: 490px) {
    grid-template-columns: 1fr;
    /* margin-top: 30px; */
}
`

export const GlobalContainerScrollSectionStyle = styled.div`
width:100%;
height:100vh;
display:flex;
align-items:flex-start;
justify-content:space-evenly;
`