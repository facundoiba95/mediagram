import styled from 'styled-components';

export const ModalSearchUsersContainerStyles = styled.div`
width:100%;
max-width:500px;
height:100%;
min-height:300px;
max-height:500px;
display:flex;
flex-direction:column; 
position: relative;
gap:10px;
top: 0;
left: 50%;
transform: translate(-50%,20%);
border-radius: 10px;
background-color: transparent;

@media (max-width: 490px) {
    transform: scale(0.8);
    left:0;
}
`

export const ListModalSearchUsersStyles = styled.ul`
width:100%;
height:100%;
background-color:#eeeeee50;
border-radius: 10px;
display:flex;
flex-direction: column;
gap:10px;
font-family:'Red Hat Display';
padding:10px;
overflow-y: scroll;

small {
    background-color: transparent;
    color:white;
    font-weight:600;
    display: flex;
    gap: 5px;
    :nth-child(1){
        background-color: transparent;
    }
}

.loader {
    background-color: transparent;
    margin: 0 auto;
}
`

export const ItemModalSearchUsersStyles = styled.li`
width:100%;
height:80px;
background-color:white;
display:flex;
justify-content:flex-start;
align-items:center;
border-radius:10px;
background-color:var(--light);
gap:10px;
padding:5px;

img {
    width:60px;
    height:60px;
    border-radius: 50%;
}

.imgProfile{
    width:60px;
    height: 60px;
    font-size:3rem;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    border-radius:50%;
}

&:hover {
    cursor: pointer;
    background-color: var(--heavyLight);
}

p {
    background-color: transparent;
    font-weight:600;
    margin: 0 auto;
}
`