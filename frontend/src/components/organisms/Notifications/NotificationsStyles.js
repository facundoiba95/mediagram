import { styled } from "styled-components";

export const NotificationsContainerStyles = styled.div`
width:100%;
height:100vh;
position: absolute;
backdrop-filter: blur(5px);
background-color:#00000080;
left:0;
transition: all 0.3s ease-in-out;
visibility: ${ props => props.isOpenNotifications ? 'visible' : 'hidden' };
opacity: ${ props => props.isOpenNotifications ? '1' : '0' };
z-index:2000;


h2 {
    background-color: transparent;
}


::-webkit-scrollbar {
    width:10px;
    background-color:transparent;
}

::-webkit-scrollbar-thumb {
    width:10px;
    background-color:white;
}
`