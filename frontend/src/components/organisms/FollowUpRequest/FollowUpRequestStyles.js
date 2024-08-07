import { styled } from "styled-components";

export const FollowUpRequestContainerStyles = styled.div`
width:100%;
height:100%;
max-height:${ props => props.listFollowUpRequest ? '200px' : '170px' };
font-family: 'Red Hat Display';
overflow-y: scroll;
padding:10px;
transition: all 0.2s ease-in-out;
border-bottom:1px solid #808080;
`

export const TitleOfFollowUpRequestStyles = styled.span`
width:100%;
padding:10px;
display:flex;
align-items: center;
justify-content: center;
color: white;

h2 {
width:100%;
backdrop-filter: blur(5px);
}
p {
    color: yellow;
    font-weight:600;
    font-size:1rem;
}
`
export const FollowUpListStyles = styled.ul`
width:100%;
height:auto;
display: flex;
flex-direction: column;
padding:5px;
gap:5px;
position:relative;
transition: all 0.2s ease-in-out;
`

export const MessageNotFollowUpRequestStyles = styled.div`
width:100%;
height:auto;
display:flex;
align-items: center;
justify-content: center;
border-radius:10px;
border: 2px solid #80808050;
color:white;
padding: 5px;

p {
    font-size: 1.4rem;
    text-align: center;
    width:300px;
}
`

export const FollowUpItemStyles = styled.li`
width:100%;
height:70px;
background-color: transparent;
display:flex;
gap:10px;
justify-content: space-between;
align-items:center;
border-radius: 10px;
padding:10px;
position:relative;
border: 2px solid #80808050;


span{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap:10px;
    cursor: pointer;
    position: relative;

    small{
       position: absolute;
       bottom:0;
       right: -15px;
       color: black;
       background-color: yellow;
       font-weight:600;
       padding: 0 10px;
       border-radius:5px;
       opacity: 0;
       visibility: hidden;
       transition: all 0.1s ease-in-out;
    }

    &:hover small {
        opacity: 1;
        visibility: visible;
    }
}

p {
    font-weight: 900;
    background-color: transparent;
    color:white;
    font-size: 1.3rem;
}

img {
    width: 60px;
    height:60px;
    object-fit: cover;
    border-radius: 50%;
}

.imgProfile{
    width: 55px;
    height: 55px;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    border-radius:50%;
}
`

export const ContainerButtonsFollowUpRequestStyles = styled.div`
width:auto;
display:flex;
justify-content:center;
align-items:center;
border-radius:5px;
gap:20px;


.btnAcceptRequest, .btnRejectRequest {
    border:none;
    cursor: pointer;
    background-color: transparent;
    font-size:2rem;
    font-weight:900;
}

.btnAcceptRequest {
    color: yellowgreen;
    &:hover {
        transform: scale(1.1);
        border-bottom-left-radius:5px;
        border-top-left-radius:5px;
    }
}

.btnRejectRequest {
    color: crimson;
    &:hover {
        transform: scale(1.1);
        border-bottom-right-radius:5px;
        border-top-right-radius:5px;
    }
}
`