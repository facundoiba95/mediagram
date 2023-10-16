import { styled } from "styled-components";

export const ProfileContentContainerStyles = styled.section`
width:100%;
height:100%;
display:${ props => props.posts ? 'grid' : 'flex' };
grid-template-columns: ${props => props.posts ? 'minmax(280px, 350px) minmax(280px, 350px) minmax(280px, 350px)' : '1fr 1fr'};
justify-items: space-between;
flex-direction:column;
gap:8px;
`

export const MessagePrivateAccountStyles = styled.span`
width:100%;
height:200px;
font-family: 'Red Hat Display';
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:30px;

.iconPrivateAccount {
    font-size: 3rem;
    color:crimson;
}
`