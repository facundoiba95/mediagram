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
`

export const BoxNotificationNavbarMenuStyles = styled.div`
width:150px;
height:30px;
background-color: crimson;
display:flex;
justify-content:center;
align-items:center;
border-radius:5px;
gap:40px;
color:black;


.iconNewFollowUpRequest, .iconNotification {
    color: white;
    background-color: crimson;
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



`
