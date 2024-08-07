import { styled } from "styled-components";

export const ProfilePostsContainerStyles = styled.section`
width:100%;
height:100%;
display:${ props => props.posts.length ? 'grid' : 'flex' };
grid-template-columns: ${props => props.posts.length ? '1fr 1fr 1fr' : '1fr'};
justify-items: space-between;
flex-direction: column;
gap:5px;

@media (max-width: 1024px) {
    grid-template-columns: ${props => props.posts.length ? '1fr 1fr' : '1fr'};
    grid-template-rows: 300px;
    grid-auto-rows: 300px;
}

@media (max-width: 490px) {
    grid-template-columns: ${props => props.posts ? '1fr 1fr 1fr' : '1fr 1fr'};
    grid-template-rows: 200px;
    grid-auto-rows: 200px;
    justify-content: center;
    gap:2px;
    padding: 5px;
}

@media (max-width: 376px) {
    grid-template-columns: ${props => props.posts ? '1fr 1fr' : '1fr 1fr'};
    justify-content: center;
}
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
color: var(--light);
text-align: center;

.iconPrivateAccount {
    font-size: 3rem;
    color:crimson;
}
`