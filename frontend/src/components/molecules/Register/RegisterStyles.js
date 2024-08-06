<<<<<<< HEAD
import { styled } from "styled-components";

export const FormRegisterContainerStyles = styled.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
margin-top:20px;
background-color: transparent;

span{
    display:flex;
    width:100%;
    background-color:transparent;

}

input{
    width:200px;
    height:35px;
    border-radius:5px;
    border:none;
    background-color:var(--light);
    padding-left:10px;
}

.containerMessageValidationPassword {
    display:flex;
    align-items: center;
    justify-content:center;
    gap:0px;
    text-align: center;
    background-color:transparent;

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

.btnRegister {
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

input:focus {
    outline: none;
}

input:nth-child(1){
    border: ${ props => props.type === 'username' ? props.isValidate ? '3px solid green' : '3px solid crimson' : ''};
}
input:nth-child(2){
    border: ${ props => props.type === 'password' ? props.isValidate ? '3px solid green' : '3px solid crimson' : ''};
}
input:nth-child(3){
    border: ${ props => props.type === 'password' ? props.isValidate ? '3px solid green' : '3px solid crimson' : ''};
}
input:nth-child(4){
    border: ${ props => props.type === 'email' ? props.isValidate ? '3px solid green' : '3px solid crimson' : ''};
}

input {
    border: ${ props => props.isValidate ? '3px solid green' : ''};
}

.goLogin {
    color:var(--light);
    font-weight:600;
    padding:8px 20px;
    font-size:0.9rem;
    background-color: transparent;
    border: none;
    border-bottom:1px solid white;
    cursor: pointer;
}
`
=======
import { styled } from "styled-components";

export const FormRegisterContainerStyles = styled.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
margin-top:20px;
background-color: transparent;

span{
    display:flex;
    width:100%;
    background-color:transparent;

}

input{
    width:200px;
    height:35px;
    border-radius:5px;
    border:none;
    background-color:var(--light);
    padding-left:10px;
}

.containerMessageValidationPassword {
    display:flex;
    align-items: center;
    justify-content:center;
    gap:0px;
    text-align: center;
    background-color:transparent;

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

.btnRegister {
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

input:focus {
    outline: none;
}

input:nth-child(1){
    border: ${ props => props.type === 'username' ? props.isValidate ? '3px solid green' : '3px solid crimson' : ''};
}
input:nth-child(2){
    border: ${ props => props.type === 'password' ? props.isValidate ? '3px solid green' : '3px solid crimson' : ''};
}
input:nth-child(3){
    border: ${ props => props.type === 'password' ? props.isValidate ? '3px solid green' : '3px solid crimson' : ''};
}
input:nth-child(4){
    border: ${ props => props.type === 'email' ? props.isValidate ? '3px solid green' : '3px solid crimson' : ''};
}

input {
    border: ${ props => props.isValidate ? '3px solid green' : ''};
}

.goLogin {
    color:var(--light);
    font-weight:600;
    padding:8px 20px;
    font-size:0.9rem;
    background-color: transparent;
    border: none;
    border-bottom:1px solid white;
    cursor: pointer;
}
`
>>>>>>> b3173dc1 (first commit in Ubuntu)
