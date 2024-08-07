import styled from "styled-components";

export const BtnCreatePostFeedStyles = styled.button`
width: 100%;
height: 40px;
border-radius: 5px;
background-color: ${props => props.active ? "var(--green)" : "#80808080" };
color: black;
font-weight:600;
cursor: ${props => props.active ? "pointer" : "normal" };
`