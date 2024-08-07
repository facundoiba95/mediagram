<<<<<<< HEAD
import { styled } from "styled-components";


const PENDING = "#6699cc"
const ACCEPT = "#00C853"
const REJECT = "#fb3640"

export const ButtonContainerStyles = styled.button`
width:100%;
max-width:150px;
height:35px;
font-weight:300;
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
padding: 0 10px;
border: none;
border-radius: 8px;

background: ${ props => props.status === "ACCEPT" ? ACCEPT : props.status === "PENDING" ? PENDING : props.status === "REJECT" ? REJECT : "black"};


b {
    color: white;
    background-color: transparent;
    font-size: 0.9rem;
}
=======
import { styled } from "styled-components";


const PENDING = "#6699cc"
const ACCEPT = "#00C853"
const REJECT = "#fb3640"

export const ButtonContainerStyles = styled.button`
width:100%;
max-width:150px;
height:35px;
font-weight:300;
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
padding: 0 10px;
border: none;
border-radius: 8px;

background: ${ props => props.status === "ACCEPT" ? ACCEPT : props.status === "PENDING" ? PENDING : props.status === "REJECT" ? REJECT : "black"};


b {
    color: white;
    background-color: transparent;
    font-size: 0.9rem;
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`