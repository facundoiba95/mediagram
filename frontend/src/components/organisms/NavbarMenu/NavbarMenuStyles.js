import styled from "styled-components";

export const NavbarMenuContainerStyles = styled.nav`
display:${ props => props.isLogged ? 'flex' : 'none' };
visibility:${ props => props.isLogged ? 'visible' : 'hidden' };
opacity: ${ props => props.isLogged ? '1' : '0' };
width:250px;
height:100%;
flex-direction:column;
background-color:var(--light);
position:sticky;
top:0;
`

export const NavbarMenuListStyles = styled.ul`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
background-color:var(--light);
padding:10px;
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
background-color: ${ props => props.isLogout ? '#ffc8dd60' : 'transparent'};
border-radius:8px;

.iconNavbar {
    font-size:2rem;
    background-color:transparent;
}

p{
    background-color:transparent;
}

&:hover {
    cursor: pointer;
    background-color: ${ props => props.isLogout ? '#ffc8dd' : 'var(--heavyLight)'};
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

`
