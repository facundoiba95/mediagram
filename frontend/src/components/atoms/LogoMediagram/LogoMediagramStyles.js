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
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
}
`

export const ThumbnailLogoMediagramStyle = styled.h1`
width:100%;
font-family: 'Leckerli One';
color: var(--violetpink);
display:none;
text-align:right;
background-color:transparent;
cursor:pointer;
height: 40px;

@media (max-width: 490px) {
    font-size:1rem;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    padding: 15px 15px 15px 0 ;
    background-color: white;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    backdrop-filter: blur(5px);
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