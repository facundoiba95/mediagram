import { styled } from "styled-components";

export const SearchBarContainerStyles = styled.form`
width:${ props => props.isOpenSearchBar ? '100%' : '5%' };
max-width:800px;
height:60px;
background-color:#eeeeee30;
border-radius:10px;
position: absolute;
top:30px;
display:flex;
justify-content:center;
align-items:center;
left:50%;
transform: translate(-50%);
font-family:'Red Hat Display';
transition:all 0.3s ease-in-out;
border:3px solid white;

input {
    width:100%;
    height:40px;
    border:none;
    background-color:transparent;
    padding-left: 20px;
    color:white;
    font-weight: 600;
    font-size:1.2rem;
    transition:all 0.3s ease-in-out;
    visibility: ${ props => props.isOpenSearchBar ? 'visible' : 'hidden' };
    opacity: ${ props => props.isOpenSearchBar ? '1' : '0' };
};

::placeholder {
    color:white;
    font-weight:600;
}

input:focus {
    outline: none;
}

.iconSearch {
    font-size:2.5rem;
    border-radius:50%;
    padding:2px;
    cursor: pointer;
    color:white;
    background-color: transparent;
    position:absolute;
    right:20px;
}

.iconCloseSearchBar{
    font-size:2.2rem;
    padding:2px;
    cursor: pointer;
    color: white;
    background-color: transparent;
    position:absolute;
    right:-45px;
}
`