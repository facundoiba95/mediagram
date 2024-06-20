import styled from "styled-components";

export const ItemHistoryContainerStyles = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
font-family: "Red Hat Display";
flex-direction: column;
background-color: black;
`

export const HeadItemHistoryStyles = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
color: white;
padding: 10px;
background-color: transparent;
position: absolute;
top: 0px;
z-index: 1400;

b {
    background-color: transparent;
}

.imgUser {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.imgProfile {
    width:35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
    color: var(--violetpink);
}
`