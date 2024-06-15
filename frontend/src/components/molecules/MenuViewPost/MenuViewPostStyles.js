import styled from "styled-components";

export const MenuViewPostContainerStyles = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 10px;
position: relative;

.iconMenuViewPost {
    font-size: 1.5rem;
    cursor: pointer;
}

.iconTags {
    font-size: 1.5rem;
    cursor: pointer;
}
`

export const MenuViewPostListStyles = styled.ul`
width: auto;
height: auto;
display: ${props => props.hiddenMenu ? "none" : "flex"};
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
position: absolute;
top: 30px;
right: 50%;
transform: translate(50%);
padding: 10px;
border: 1px solid white;
border-radius: 5px;
`