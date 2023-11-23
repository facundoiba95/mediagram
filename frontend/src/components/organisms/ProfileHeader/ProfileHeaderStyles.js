import { styled } from "styled-components";

export const ProfileHeaderContainerStyles = styled.div`
width: 100%;
height: 100%;
border-bottom: 1px solid var(--heavyLight);
font-family: 'Red Hat Display';
display: flex;
justify-content: flex-start;
align-items: center;
gap: 80px;
padding-bottom: 30px;
padding-top: 30px;

@media (max-width: 490px) {
    gap: 20px;
    font-size: 0.8rem;
    justify-content: center;
    flex-direction: column;
}
`

export const ImgProfileStyles = styled.div`
width: 180px;
height: 180px;

img {
width: 100%;
height: 100%;
border-radius: 50%;
object-fit: cover;
}

.imgProfile{
    width: 180px;
    height: 180px;
    color: var(--violetpink);
    background-color: var(--heavyLight);
    border-radius: 50%;
}

@media (max-width: 490px) {
    width: 100px;
    height: 100px;

    .imgProfile {
        width: 100px;
        height: 100px;
    }
}
`

export const InfoProfileContainerStyles = styled.span`
display:flex;
flex-direction:column;
gap: 10px; 

table{
    text-align:center;
    font-weight:900;
    color:#F6FFF899;
}

th{
    color:white;
    padding:5px;
    cursor: pointer;
}

.title{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:30px;
    background-color:transparent;
    color:white;

    p{
        font-weight:900;
        font-size: 1.8rem;
        font-family:'Red Hat Display'; 
    }
}

.icon{
    background-color: transparent;
    font-size:1.4rem;
    color:black;
}

.spanMenuSetting {
    position:absolute;
    right:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    font-weight:600;
    background-color: var(--heavyLight);
    padding:5px;
    cursor: pointer;
    border-radius:10px;
    transition: all 0.2s ease-in-out;
    color:black;

    small {
        background-color: var(--heavyLight);
        font-size:1rem;
    }

    &:active {
        transform: scale(90%);
    }
}

.iconSetting {
    background-color: var(--heavyLight);
    font-size:1.8rem;
    transform: ${ props => props.isOpenMenuSetting ? 'rotate(180deg)' : 'rotate(0deg)' };
    transition: all 0.2s ease-in-out;
    color:${ props => props.isOpenMenuSetting ? 'var(--violetpink)' : 'black' };
}

.iconViews {
   background-color: white;
   font-size: 1.5rem;
   border-radius: 50%;
   padding:2px;
   font-weight:600;
}


@media (max-width: 490px) {
    .spanMenuSetting {
        top:10px;
        right:20px;

        small:nth-child(2) {
            display: none;
        }

    }
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

p {
    color:var(--light);
}

.iconLike, .iconStar, .iconGreet{
    font-size:1.4rem;
    cursor: pointer;
    color: var(--light);
    transition:all 0.2s ease-in-out;
}

.iconGreet:hover{
    color:var(--violetpink);
}
.iconLike:hover{
    color:green;
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
    color:var(--light);
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