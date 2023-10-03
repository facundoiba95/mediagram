import { styled } from "styled-components";

export const ButtonContainerStyles = styled.button`
width:100%;
max-width:120px;
height:40px;
border-radius:8px;
background-color:${props => props.isAlternative ? '#ff70a6' : 'var(--dark)'};
font-weight:600;
border:none;
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`