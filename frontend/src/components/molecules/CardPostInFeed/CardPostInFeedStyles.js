import styled from 'styled-components';

export const CardPostInFeedContainerStyles = styled.div`
width:70%;
height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
font-family: 'Red Hat Display';
border-top-right-radius:10px;
border-top-left-radius:10px;
border-bottom:1px solid #80808080;
padding-bottom:25px;

img {
    width:100%;
    height:600px;
    background-color: transparent;
    object-fit: contain;
    cursor: pointer;
}

@media (max-width: 490px) {
    width:90%;
    background-color: black;

    img {
        height: 350px;
        background-color: black;
    }
}
`

export const HeadCardPostInProfileStyles = styled.span`
width: 100%;
height: 70px;
display: flex;
gap: 10px;
justify-content: flex-start;
align-items: center;
padding:5px;
background-color: transparent;
background-color: var(--lightblack);;
border-top-right-radius:10px;
border-top-left-radius:10px;
color:white;

img {
    width:55px;
    height:55px;
    object-fit: cover;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
}

div {
    display: flex;
    flex-direction: column;
    gap:5px;
}

h4 {
    background-color: transparent;
    cursor: pointer;
    font-size:1.2rem;
}

.imgProfile {
    width: 55px;
    height:55px;
    color: var(--violetpink);
    background-color: white;
    border-radius:50%;
    cursor: pointer;
}

span {
    display: flex;
    gap:10px;
    background-color: transparent;

    small {
        background-color: transparent;
        cursor: pointer;
    }

    small:nth-child(1) {
        font-weight: 600;
    }
}
`

export const FootCardPostInProfileStyles = styled.span`
width:100%;
height:100%;
max-height:100px;
position:relative;
background-color: transparent;
 
h4 {
    background-color: transparent;
}

.containerIconPost{
    padding: 10px 5px;
    display:flex;
    gap:15px;
    background-color: transparent;
    font-size:1.2rem;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap:5px;
    }

    h5{
        background-color: transparent;
    }
}

.iconView, .iconHeart, .iconComment {
    font-size:1.1rem;        
    cursor: pointer;
}

.iconHeart {
    color: ${props => props.isLike ? 'var(--violetpink)' : 'white'};
}

.containerDescription {
    display:${props => props.isDescription ? 'flex' : 'none'};
    padding: 2px 10px;
    background-color: transparent;
    justify-content: flex-start;
    align-items: flex-start;
    gap:10px;
    
    p {
        background-color: transparent;
        height:50px;
        overflow: hidden;
        white-space: pre;
    }

    p:hover {
        cursor: pointer;
    }
}

small {
    display: block;
    background-color: transparent;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-weight:900;
    cursor: pointer;
    padding-top: 10px;
    font-size:1rem;
}

.containerLocation {
    background-color: purple;
    border-radius:5px;

    h5 {
        padding:2px 5px;
        color:white;
        width: 100%;
        max-width:300px;
        white-space: normal;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}

.iconLocation {
    border-radius:50%;
    background-color: white;
    color: purple;
}

@media (max-width: 490px) {
    height: auto;
    max-height: none;
    
    .containerIconPost{
        flex-wrap: wrap;   
    }

    .containerLocation {
        font-size:0.9rem;
        .iconLocation{
            width: 25px;
            height: 20px;
        }
    h5 {
        max-width:200px;
    }
}
}
`