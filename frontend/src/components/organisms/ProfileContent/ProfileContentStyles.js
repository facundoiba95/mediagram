import { styled } from "styled-components";

export const ProfileContentContainerStyles = styled.section`
width:100%;
height:100%;
display:grid;
grid-template-columns: ${props => props.posts ? 'minmax(280px, 350px) minmax(280px, 350px) minmax(280px, 350px)' : '1fr'};
justify-items:center;
gap:8px;
`