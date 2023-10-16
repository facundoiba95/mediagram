import { styled } from "styled-components";

export const MenuSettingListStyles = styled.ul`
width: 100%;
max-width: 300px;
height: ${ props => props.isOpenMenuSetting ? '100%': '0%' };
max-height: 200px;
transition: all 0.2s ease-in-out;
position: absolute;
right:0;
top:80px;
visibility: ${ props => props.isOpenMenuSetting ? 'visible': 'hidden' };
opacity: ${ props => props.isOpenMenuSetting ? '1': '0' };
display:flex;
flex-direction: column;
background-color:var(--light);
border-radius:10px;
padding:5px;

&:active {
    transform: scale(90%);
}
`

export const MenuSettingItemStyles = styled.li`
width:100%;
height:50px;
display:flex;
justify-content:flex-start;
align-items:center;
padding:10px;
transition: all 0.2s ease-in-out;
background-color:transparent;
cursor: pointer;
border-radius:10px;

&:hover {
    background-color:var(--heavyLight);
   
}
`