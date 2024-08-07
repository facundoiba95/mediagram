import styled from "styled-components";

export const ReactionsInPostWrapperStyles = styled.ul`
width: 100%;
height: auto;
display: flex;
gap: 10px;
background-color: transparent;
`
export const ReactionsInPostItemStyles = styled.li`
width: auto;
height: auto;
display: flex;
gap: 2px;
background-color: transparent;

.iconReaction {
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.isLike ? "crimson": "white"};
}
`