import styled from "styled-components";

export const ModalStatusCreateContentBoxStyles = styled.div`
width:100%;
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
background-color:transparent;
font-family: "Red Hat Display";

p {
    background-color:transparent;
    font-size:1.8rem;
}

.iconStatusContent {
    font-size:5rem;
    color:${ props => props.status ? 'green' : 'crimson' };
}

button{
    width:auto;
    padding:7px;
    font-size:1.2rem;
    border:none;
    font-weight:600;
    background-color:#D9ED92;
    border-radius:5px;
    cursor: pointer;
}

.goHome {
    cursor: pointer;
    font-weight:600;
}

p{
    font-size:1.4rem;
    display:flex;
    gap: 10px;
}

b {
    cursor: pointer;
}

pre {
    text-align: center;
    font-family: "Red Hat Display";
    font-weight: 600;
    color: white;
}
`