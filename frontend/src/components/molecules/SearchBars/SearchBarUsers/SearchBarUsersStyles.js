<<<<<<< HEAD
import { styled } from "styled-components";

export const SearchBarUserContainerStyles = styled.span`
width:${ props => props.isOpen ? '100%' : '5%' };
height: 80px;
background-color:#eeeeee30 ;
border-radius:10px;
display: ${ props => props.isOpen ? 'flex' : 'none' };
justify-content:center;
align-items:center;
font-family:'Red Hat Display';
transition:all 0.3s ease-in-out;
border:3px solid white;
border-radius: 10px;
background-color: #00000020;


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
    visibility: ${ props => props.isOpen ? 'visible' : 'hidden' };
    opacity: ${ props => props.isOpen ? '1' : '0' };
};

::placeholder {
    color:white;
    font-weight:300;
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

@media (max-width: 490px) {
    .iconCloseSearchBar{
        top: -50px;
        left: 50%;
        transform: translate(-50%);
    }
}

@media (max-width: 376px) {
    ::placeholder {
    width: 100%;
    max-width:230px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
   }
}
=======
import { styled } from "styled-components";

export const SearchBarUserContainerStyles = styled.span`
width:${ props => props.isOpen ? '100%' : '5%' };
height: 80px;
background-color:#eeeeee30 ;
border-radius:10px;
display: ${ props => props.isOpen ? 'flex' : 'none' };
justify-content:center;
align-items:center;
font-family:'Red Hat Display';
transition:all 0.3s ease-in-out;
border:3px solid white;
border-radius: 10px;
background-color: #00000020;


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
    visibility: ${ props => props.isOpen ? 'visible' : 'hidden' };
    opacity: ${ props => props.isOpen ? '1' : '0' };
};

::placeholder {
    color:white;
    font-weight:300;
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

@media (max-width: 490px) {
    .iconCloseSearchBar{
        top: -50px;
        left: 50%;
        transform: translate(-50%);
    }
}

@media (max-width: 376px) {
    ::placeholder {
    width: 100%;
    max-width:230px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
   }
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`