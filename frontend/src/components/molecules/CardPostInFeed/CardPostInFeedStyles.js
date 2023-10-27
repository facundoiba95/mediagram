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
    object-fit: cover;
    background-color: transparent;
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
        background-color: transparent;
    }

    h5{
        background-color: transparent;
    }
}

.iconView, .iconHeart, .iconComment{
    font-size:1.1rem;        
    cursor: pointer;
}

.iconHeart {
    color: crimson;
}

.containerDescription {
    display:${ props => props.isDescription ? 'flex' : 'none' };
    padding: 2px 10px;
    background-color: transparent;
    justify-content: flex-start;
    align-items: flex-start;
    gap:10px;
    p {
        background-color: transparent;
    }
}

small {
    display: ${ props => props.isDescription ? 'none' : 'block' };
    background-color: transparent;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-weight:900;
    cursor: pointer;
    font-size:1rem;
}
`