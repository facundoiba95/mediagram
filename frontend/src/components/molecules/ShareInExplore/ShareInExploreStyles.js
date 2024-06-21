import styled from "styled-components";

export const ContainerShareInExploreStyles = styled.div`
width: 100%;
height: auto;
display: ${props => !props.isPrivate && props.typeContent ? 'flex' : 'none'};
flex-direction: column;
gap:5px;
background-color: transparent;
margin-top: 1rem;

.containerHeadShareInExplore {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: transparent;
}
p, b, i {
    background-color: transparent;
}
`