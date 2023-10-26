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
`