import { styled } from "styled-components";

export const ProfileHeaderContainerStyles = styled.div`
width:100%;
height:100%;
border-bottom:1px solid var(--heavyLight);
font-family:'Red Hat Display';
display:flex;
justify-content:flex-start;
align-items:center;
gap:80px;
padding-bottom:30px;
padding-top:30px;
`

export const ImgProfileStyles = styled.div`
width:180px;
height:180px;

img {
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
}

.imgProfile{
    width:100%;
    font-size:12rem;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    border-radius:50%;
}
`

export const InfoProfileContainerStyles = styled.span`
display:flex;
flex-direction:column;
gap:10px;

table{
    text-align:center;
    font-weight:900;
}

th{
    padding:5px;
    cursor: pointer;
}

.title{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:30px;
    background-color:transparent;

    p{
        font-weight:900;
        font-size: 1.8rem;
        font-family:'Red Hat Display'; 
    }
}

.icon{
    background-color: transparent;
    font-size:1.4rem;
    color: black;
}
`

export const ActionProfileContainerStyles = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
text-align:center;
justify-content:flex-start;
align-items:flex-start;
gap:5px;

span{
    display:flex;
    justify-content:center;
    align-items: center;
    gap:10px;
}

.iconLike, .iconStar, .iconGreet{
    font-size:1.4rem;
    cursor: pointer;
    color: black;
    transition:all 0.2s ease-in-out;
}

.iconGreet:hover{
    color:var(--violetpink);
}
.iconLike:hover{
    color:#226f54;
}
.iconStar :hover{
    color:#f9c80e;
}

.iconGreet:active{
    transform: scale(1.5);
}
.iconLike:active{
    transform: scale(1.5);
}
.iconStar:active{
    transform: scale(1.5);
}
small{
    font-weight:600;
    visibility:hidden;
    opacity:0;
    transition:all 0.2s ease-in-out;
    width:0px;
    word-wrap:break-word;
    white-space:nowrap;
    text-overflow:hidden;
}

.iconLike:hover + small{
    width:110px;
    visibility:visible;
    opacity:1;
}

.iconGreet:hover + small{
    width:70px;
    visibility:visible;
    opacity:1;
}

.iconStar:hover + small{
    width:65px;
    visibility:visible;
    opacity:1;
}
`

export const StatsInProfileStyles = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
text-align:center;
justify-content:flex-start;
align-items:flex-start;
gap:5px;
`