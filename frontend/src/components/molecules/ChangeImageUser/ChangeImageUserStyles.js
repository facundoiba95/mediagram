import styled from 'styled-components';

export const ChangeImageUserContainerStyles = styled.section`
width:100%;
max-width:900px;
height:300px;
font-family: 'Red Hat Display';
padding:10px;
`

export const FormChangeImageUserStyles = styled.form`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:flex-start;
gap:20px;
padding:10px;

span {

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