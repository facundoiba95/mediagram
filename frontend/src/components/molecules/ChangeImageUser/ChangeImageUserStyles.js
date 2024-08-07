import styled from 'styled-components';

export const ChangeImageUserContainerStyles = styled.section`
width:100%;
max-width:900px;
height: auto;
font-family: 'Red Hat Display';
padding:10px;
gap:10px;
display: flex;
flex-direction: column;
background-color: var(--lightblack);
margin-top: 10px;
border-radius:10px;
color:white;

h2 {
    background-color: transparent;
}

ul {
    display:flex;
    flex-direction: column;
    background-color: transparent;

    li {
        background-color: transparent;
    }
    p {
        font-weight:600;
        background-color: transparent;
    }
    b {
        background-color: transparent;
    }
}

@media (max-width: 490px) {
    transform: scale(0.9);
}
`

export const FormChangeImageUserStyles = styled.form`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:flex-start;
gap:20px;
padding:10px;
background-color: transparent;

span {
    background-color: var(--lightblack);

    button {
        padding:10px;
        border-radius:5px;
        background-color: #38b000;
        color:white;
        border: none;
        font-weight: 600;
        cursor: pointer;
    }

    button:active {
        transform: scale(90%);
    }
}

@media (max-width: 490px) {
    flex-direction: column-reverse;
}
`

export const ContainerImageUploadStyles = styled.div`
width:100%;
height:100%;
max-width:350px;
background-color: transparent;
display: flex;
flex-direction:column;
align-items:center;
gap:10px;

.iconImgUpdate {
    width: 300px;
    height: 300px;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    border-radius:50%;
}

img {
    width:320px;
    height:320px;
    object-fit:cover;
}

@media (max-width: 350px) {
    img {
      width:300px;
      height:300px;
      object-fit:cover;
    }
    
}
`