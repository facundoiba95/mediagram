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
width: auto;
height: auto;
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
cursor: pointer;
font-family: "Red Hat Display";

h4 {
    background-color: transparent;
    font-size: 1rem;
    color: white;
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

span {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: flex-start;
    background-color: transparent;

    small {
    color: white;
    font-weight: 900;
    background-color: transparent;
}
}
`