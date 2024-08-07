<<<<<<< HEAD
import { styled } from "styled-components";

export const GlobalContainerGridStyles = styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-columns: ${ props => props.isLogged ? '250px 1fr' : '1fr'};

@media (max-width: 490px) {
    grid-template-columns: 1fr;
}
`

export const GlobalContainerScrollSectionStyle = styled.div`
width:100%;
height:100%;
display:flex;
align-items:flex-start;
justify-content:space-evenly;
overflow-y: ${ props => props.isLogged && props.isFeed ? 'scroll' : 'none'};
=======
import { styled } from "styled-components";

export const GlobalContainerGridStyles = styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-columns: ${ props => props.isLogged ? '250px 1fr' : '1fr'};

@media (max-width: 490px) {
    grid-template-columns: 1fr;
}
`

export const GlobalContainerScrollSectionStyle = styled.div`
width:100%;
height:100%;
display:flex;
align-items:flex-start;
justify-content:space-evenly;
overflow-y: ${ props => props.isLogged && props.isFeed ? 'scroll' : 'none'};
>>>>>>> b3173dc1 (first commit in Ubuntu)
`