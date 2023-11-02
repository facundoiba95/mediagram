import { styled } from "styled-components";

export const ListNotificationsContainerStyles = styled.ul`
width:420px;
height:100vh;
font-family: 'Red Hat Display';
position:absolute;
left:${ props => props.isOpenNotifications ? '0%' : '-200%' };
transition:all 0.2s ease-in-out;

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
`

export const TitleNotificationsStyles = styled.h2`
width:100%;
height:70px;
padding:20px;
font-weight: 900;
text-align:center;
color: white;
`