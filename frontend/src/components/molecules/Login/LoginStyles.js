import { styled } from "styled-components";

export const FormLoginContainerStyles = styled.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
margin-top:20px;

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
}


`