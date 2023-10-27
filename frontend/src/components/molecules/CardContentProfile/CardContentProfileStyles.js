import { styled } from "styled-components";

export const CardContentProfileContainerStyles = styled.div`
width:100%;
height:380px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
padding-bottom:15px;
gap:10px;
background-color:var(--lightblack);
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;
font-family: 'Red Hat Display';
position: relative;

.overlay{
    position:absolute;
    width:100%;
    height:300px;
    background-color:transparent;
    opacity:0;
    visibility:hidden;

    display:flex;
    justify-content:center;
    align-items:center;
    
    .iconExpandImage{
        background-color:transparent;
        color:white;
        font-weight:900;
        font-size:2rem;
    }
}

.imgContent{
    width:100%;
    height:300px;
    object-fit:cover;
}

&:hover .overlay{
    backdrop-filter: blur(2px);
    opacity:1;
    visibility:visible;
    cursor: pointer;
    transition:all 0.1s ease-in-out;
}
`

export const ThumbnailProfileStyles = styled.span`
  img{
    width:40px;
    height:40px;
    border-radius:50%;
    background-color: transparent;
    margin-left:5px;
}

.imgProfile{
    width:100%;
    height:100%;
    border-radius:50%;
    font-size:2rem;
    color: var(--violetpink);
    background-color:var(--heavyLight);
}
`

export const DescriptionContentProfileStyles = styled.span`
    width:100%;
    background-color: transparent;
    display:flex;
    align-items: center;
    gap:8px;
    font-weight:300;

    span, p{
        background-color: transparent;
        color:var(--light);
    }

    .containerIconPost{
        background-color:transparent;
        position:absolute;
        display:flex;
        right:10px;
        bottom:10px;
        gap:10px;
    }

    .iconView, .iconHeart, .iconComment{
        color: var(--light);
        font-size:1.1rem;        
        cursor: pointer;
    }

`