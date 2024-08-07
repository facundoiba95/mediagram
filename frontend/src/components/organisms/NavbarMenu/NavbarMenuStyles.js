import styled from "styled-components";

export const NavbarMenuContainerStyles = styled.nav`
display:${ props => props.isLogged ? 'flex' : 'none' };
visibility:${ props => props.isLogged ? 'visible' : 'hidden' };
opacity: ${ props => props.isLogged ? '1' : '0' };
width:250px;
height:100%;
flex-direction:column;
background-color:#111B21;
position:sticky;
top:0;
z-index: 2000;

@media (max-width: 490px) {
    position: absolute;
    width:100%;
    height: ${ props => props.isOpenMenu ? '100vh' : '20px'};
    transition: all 0.2s ease-in-out;
    left: ${ props => props.isOpenMenu ? '0' : '-85%'};
    background-color: transparent;
    backdrop-filter: blur(10px);
}
`

export const NavbarMenuListStyles = styled.ul`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
background-color:#111B21;
padding:10px;
color:var(--heavyLight);
gap:5px;

@media (max-width: 490px) {
    transition: all 0.2s ease-in-out;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    opacity: ${ props => props.isOpenMenu ? '1' : '0'};
    visibility: ${ props => props.isOpenMenu ? 'visible' : 'hidden'};
    align-items: start;
    justify-content: center;
    height: 350px;
}
`

export const NavbarMenuItemStyles = styled.li`
width:100%;
height:50px;
font-weight:600;
font-family:'Red Hat Display';
display:flex;
justify-content:flex-start;
align-items:center;
gap:10px;
background-color: transparent;
border-radius:8px;

.iconNavbar {
    font-size:2rem;
    background-color:transparent;
    width:50px;
}

.logout {
    background-color: transparent;
    font-size:1.4rem;
    width:20px;
}

p{
    background-color:transparent;
}

&:hover {
    cursor: pointer;
    background-color: #80808020;
    border-radius:8px;
    transition:all 0.2s ease-in-out;
}

&:hover .iconNavbar{
    transition:all 0.2s ease-in-out;
    transform: scale(1.05);
}

img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.subItemNavbarMenu {
    display:flex;
    background-color: transparent;
    justify-content:center;
    align-items:center;
    gap: 10px;
}


&:nth-child(5) {
justify-content:center;
}

&:nth-child(8){
    margin-top:4rem;
    background-color: #80808080;
    text-align: center;
    justify-content: center;
    align-items: center;
    height:40px;
}
&:nth-child(8):hover{
    background-color:#F4254680;
}

@media (max-width: 490px) {
    flex-direction: column;
    height: 100%;

    &:nth-child(8){
        flex-direction: row;
    }
}
`

export const BoxNotificationNavbarMenuStyles = styled.div`
width:150px;
height:30px;
background-color: #8338ec;
display:flex;
justify-content:center;
align-items:center;
border-radius:5px;
gap:40px;
color:black;


.iconNewFollowUpRequest, .iconNotification {
    color: white;
    background-color: transparent;
    width:25px;
    height:25px;
    padding:2px;
    text-align: center;
}

span {
    background-color: transparent;
    display:flex;
    justify-content: center;
    align-items:center;
    position: relative;
}

.counterFollowUpRequests, .counterNotifications {
    border-radius:10%;
    width:18px;
    height:18px;
    font-size:0.8rem;
    background-color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.iconNotification.effect_notification {
    background-color: transparent;
    animation: effect_alertNotification 1.5s alternate infinite;
}

img {
    background-color: transparent;
}

@keyframes effect_alertNotification {
  0% {
    transform: rotate(0deg) scale(1);
  }
  10% {
    transform: rotate(-10deg) scale(1.7);
  }
  20% {
    transform: rotate(10deg) scale(1.7);
  }
  30% {
    transform: rotate(-10deg) scale(1.7);
  }
  40% {
    transform: rotate(10deg) scale(1.7);
  }
  50% {
    transform: rotate(0deg) scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
`
