import { styled } from "styled-components";

export const FollowUpRequestContainerStyles = styled.div`
width:100%;
height:100%;
max-height:285px;
background-color: var(--medium);
font-family: 'Red Hat Display';
overflow-y: scroll;
padding:10px;
`

export const TitleOfFollowUpRequestStyles = styled.span`
width:100%;
padding:10px;
display:flex;
align-items: flex-start;
justify-content: flex-start;

h2 {
width:100%;
backdrop-filter: blur(5px);
}
`
export const FollowUpListStyles = styled.ul`
width:100%;
height:auto;
display:grid;
grid-template-columns: 1fr 1fr;
align-content:center;
justify-items:start;
padding:5px;
`

export const FollowUpItemStyles = styled.li`
width:180px;
height:auto;
background-color:#FF006E90;
display:flex;
flex-direction:column;
gap:10px;
justify-content: flex-start;
align-items:center;
border-radius: 10px;
padding:10px;
position:relative;

p {
    font-weight: 900;
    background-color: transparent;
    color:white;
    font-size: 1.3rem;
}

img {
    width:120px;
    height:120px;
    object-fit: cover;
    border-radius: 50%;
}

.imgProfile{
    width:120px;
    height: 120px;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    border-radius:50%;
}
`

export const ContainerButtonsFollowUpRequestStyles = styled.span`
width:100%;
height:30px;
display:flex;
justify-content:center;
align-items:center;
border-radius:5px;
background-color:var(--light);

.btnAcceptRequest, .btnRejectRequest {
    border:none;
    cursor: pointer;
    background-color: transparent;
    width:100%;
    height:100%;
    font-weight:900;
}

.btnAcceptRequest {
    &:hover {
        background-color:green;
        color:white;
        border-bottom-left-radius:5px;
        border-top-left-radius:5px;
    }
}

.btnRejectRequest {
    &:hover {
        background-color:crimson;
        color:white;
        border-bottom-right-radius:5px;
        border-top-right-radius:5px;
    }
}
`