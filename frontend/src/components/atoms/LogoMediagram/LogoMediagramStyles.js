import { styled } from "styled-components";

export const LogoMediagramTitleStyle = styled.h1`
width:100%;
height:50px;
font-family: 'Leckerli One';
color: var(--violetpink);
display:none;
text-align:center;
background-color:transparent;
cursor:pointer;

@media (min-width: 1023px) {
    display:block;
}
`

export const ThumbnailLogoMediagramStyle = styled.h1`
width:100%;
height:50px;
font-family: 'Leckerli One';
color: var(--violetpink);
display:none;
text-align:right;
background-color:transparent;
cursor:pointer;

@media (max-width: 1023px) {
    display:block;
    padding-right:15px;
    padding-top:15px;
    padding-bottom: 15px;
}
`

export const LogoMediagramStyle = styled.h1`
width:100%;
height:50px;
font-family: 'Leckerli One';
color: var(--violetpink);
text-align:center;
background-color:transparent;
cursor:pointer;
`