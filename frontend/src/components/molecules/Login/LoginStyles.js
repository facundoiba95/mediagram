<<<<<<< HEAD
import { styled } from "styled-components";

export const FormLoginContainerStyles = styled.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
margin-top:20px;  
background-color:transparent;

span{
    display:flex;
    width:100%;
}

input{
    width:200px;
    height:35px;
    border-radius:5px;
    border:none;
    background-color:var(--light);
    padding-left:10px;
}

input:nth-child(1) {
    border: ${ props => props.type === 'username' ? '3px solid crimson' : '' };
}

input:nth-child(2){
    border:${ props => props.type === 'password' ? '3px solid crimson' : '' };
}
`

export const MessageLoginContainerStyles = styled.div`
    gap:10px;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: transparent;
    visibility: ${ props => props.isLogged || props.isLogged !== '' ? 'visible' : 'hidden' };
    opacity: ${ props => props.isLogged || props.isLogged !== '' ? '1' : '0' };

    small {
        font-size:1rem;
        font-weight:600;
        background-color: transparent;
    }

    .iconError {
        display: ${ props => props.isLogged == false && props.isLogged == '' ? 'block' : 'none' };
        color: crimson;
        font-size:1.4rem;
        background-color: transparent;
    }

    .iconOkay {
        display: ${ props => props.isLogged == true ? 'block' : 'none' };
        color: green;
        font-size:1.4rem;
        background-color: transparent;
    }

=======
import { styled } from "styled-components";

export const FormLoginContainerStyles = styled.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
margin-top:20px;  
background-color:transparent;

span{
    display:flex;
    width:100%;
}

input{
    width:200px;
    height:35px;
    border-radius:5px;
    border:none;
    background-color:var(--light);
    padding-left:10px;
}

input:nth-child(1) {
    border: ${ props => props.type === 'username' ? '3px solid crimson' : '' };
}

input:nth-child(2){
    border:${ props => props.type === 'password' ? '3px solid crimson' : '' };
}
`

export const MessageLoginContainerStyles = styled.div`
    gap:10px;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: transparent;
    visibility: ${ props => props.isLogged || props.isLogged !== '' ? 'visible' : 'hidden' };
    opacity: ${ props => props.isLogged || props.isLogged !== '' ? '1' : '0' };

    small {
        font-size:1rem;
        font-weight:600;
        background-color: transparent;
    }

    .iconError {
        display: ${ props => props.isLogged == false && props.isLogged == '' ? 'block' : 'none' };
        color: crimson;
        font-size:1.4rem;
        background-color: transparent;
    }

    .iconOkay {
        display: ${ props => props.isLogged == true ? 'block' : 'none' };
        color: green;
        font-size:1.4rem;
        background-color: transparent;
    }

>>>>>>> b3173dc1 (first commit in Ubuntu)
`