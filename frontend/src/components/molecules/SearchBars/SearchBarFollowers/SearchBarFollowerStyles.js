<<<<<<< HEAD
import styled from "styled-components";

export const ContainerSearchBarStyles = styled.span`
width: 100%;
max-width: 500px;
position: relative;
background-color: transparent;

.iconSearch {
    font-size:2.5rem;
    border-radius:50%;
    padding: 2px;
    cursor: pointer;
    color: white;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0%, -50%);
}
`
export const InputSearchBarStyles = styled.input`
width:100%;
max-width: 500px;
height: 50px;
background-color:#eeeeee30;
border-radius:10px;
font-family:'Red Hat Display';
border:3px solid white;
border-radius: 10px;
padding-left: 20px;
color:white;
font-weight: 600;
font-size:1.2rem;

&::placeholder {
    color: #eeeeee90;
    font-weight:600;
}

&:focus {
    outline: none;
}
`
=======
import styled from "styled-components";

export const ContainerSearchBarStyles = styled.span`
width: 100%;
max-width: 500px;
position: relative;
background-color: transparent;

.iconSearch {
    font-size:2.5rem;
    border-radius:50%;
    padding: 2px;
    cursor: pointer;
    color: white;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0%, -50%);
}
`
export const InputSearchBarStyles = styled.input`
width:100%;
max-width: 500px;
height: 50px;
background-color:#eeeeee30;
border-radius:10px;
font-family:'Red Hat Display';
border:3px solid white;
border-radius: 10px;
padding-left: 20px;
color:white;
font-weight: 600;
font-size:1.2rem;

&::placeholder {
    color: #eeeeee90;
    font-weight:600;
}

&:focus {
    outline: none;
}
`
>>>>>>> b3173dc1 (first commit in Ubuntu)
