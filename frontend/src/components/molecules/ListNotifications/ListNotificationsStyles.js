import { styled } from "styled-components";

export const ListNotificationsContainerStyles = styled.ul`
width:420px;
height:100vh;
font-family: 'Red Hat Display';
position:absolute;
left:${ props => props.isOpenNotifications ? '0%' : '-200%' };
transition:all 0.2s ease-in-out;
padding: 5px;
display: flex;
flex-direction: column;
gap: 10px;


.iconCloseNotifications {
    position:absolute;
    width:70px;
    height:70px;
    top: 0px;
    right:-35px;
    color:white;
    cursor: pointer;
    border-radius:50%;
    padding:10px;
}

@media (max-width: 490px) {
    width:100%;

    .iconCloseNotifications {
        right: -10px;
    }
}
`

export const TitleNotificationsStyles = styled.h2`
width:100%;
height:70px;
padding:20px;
font-weight: 900;
text-align:center;
color: white;
`

export const ItemNotificationContainerStyle = styled.li`
width: 100%;
height: 60px;
color:white;
display: flex;
justify-content: space-between;
align-items: center;
padding:5px 10px;
cursor: pointer;
border: 1px solid #80808080;
border-radius:5px;
transition: all 0.1s ease-in-out;
background-color: ${ props => props.status === 'PENDING' ? '#93C43199' : 'transparent' };

span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    background-color: transparent;

    p {
        background-color: transparent;
    }
}

.imgProfile {
    width: 45px;
    height:45px;
    object-fit: cover;
    border-radius: 50%;
    background-color: white;
    color: var(--violetpink);
}

.imgContent {
    width: 55px;
    height: 55px;
}

&:hover {
    font-weight: 900;
}
`

export const ListNotificationStyles = styled.ul`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
gap:10px;
overflow-y: scroll;
justify-content: flex-start;
`