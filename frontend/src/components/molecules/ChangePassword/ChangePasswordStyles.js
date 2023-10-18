import { styled } from "styled-components";

export const FormChangePasswordStyle = styled.form`
width:100%;
max-width:700px;
height: auto;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap:20px;
padding:10px;
background-color: var(--darkgrey);


span {
    display:flex; 
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap:10px;
    background-color: transparent;
}

.btnChangePassword {
    width:160px;
    padding:10px;
    border-radius:5px;
    background-color: #38b000;
    color:white;
    border: none;
    font-weight: 600;
    cursor: pointer;
    visibility: ${ props => props.isValidate == true ? 'visible' : 'hidden' };
    opacity: ${ props => props.isValidate == true ? '1' : '0' };
    transition:all 0.3s ease-in-out;
    animation: rotating 300ms ease-in-out;
}


@keyframes rotating {
    0% {
        transform: rotate(-3deg) ;
    }
    50% {
        transform: rotate(3deg);
    }
    100% {
        transform: rotate(0deg) ;
    }
}

input {
    width:230px;
    height:35px;
    padding-left:10px;
    border: none;
    background-color: var(--light);
    border-radius:5px;
    border: ${ props =>  props.isValidate ? 'none' : '2px solid red' };
} 

input:focus {
    outline: none;
    
}

.containerMessageValidationPassword {
    gap:10px;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: transparent;

    small {
        font-size:1rem;
        font-weight:600;
        background-color: transparent;
    }

    .iconError {
        display: ${ props => props.isValidate == false && props.isValidate == '' ? 'block' : 'none' };
        color: crimson;
        font-size:1.4rem;
        background-color: transparent;
    }

    .iconOkay {
        display: ${ props => props.isValidate == true ? 'block' : 'none' };
        color: green;
        font-size:1.4rem;
        background-color: transparent;
    }
}
`