import { styled } from "styled-components";

export const ListFollowContentContainerStyles = styled.ul`
width:100%;
height:100%;
background-color:#eeeeee50;
border-radius: 10px;
display:flex;
flex-direction: column;
gap:10px;
font-family:'Red Hat Display';
padding:10px;
`

export const ItemFollowContentStyles = styled.li`
width:100%;
height:80px;
background-color:white;
display:flex;
justify-content:flex-start;
align-items:center;
border-radius:10px;
background-color:var(--light);
gap:10px;
padding:5px;

img {
    width:60px;
    height:60px;
    border-radius: 50%;
}

.imgProfile{
    width:60px;
    height: 60px;
    font-size:3rem;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    border-radius:50%;
}

&:hover {
    cursor: pointer;
    background-color: var(--heavyLight);
}
`