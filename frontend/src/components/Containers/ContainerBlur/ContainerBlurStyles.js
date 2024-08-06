<<<<<<< HEAD
import { styled } from "styled-components";

export const ContainerBlurWrapperStyles = styled.div`
width:100%;
height:100vh;
position: absolute;
backdrop-filter: blur(5px);
background-color:#00000080;
left:0;
transition: all 0.1s ease-in-out;
visibility: ${ props => props.isOpen ? 'visible' : 'hidden' };
opacity: ${ props => props.isOpen ? '1' : '0' };
z-index:2200;


h2 {
    background-color: transparent;
}


::-webkit-scrollbar {
    width:10px;
    background-color:transparent;
}

::-webkit-scrollbar-thumb {
    width:10px;
    background-color:white;
}

.iconClose {
    font-size:2.2rem;
    padding:2px;
    cursor: pointer;
    color: white;
    background-color: transparent;
    position: absolute;
    right:10px;
    top: 20px;
    z-index: 1500;
}
=======
import { styled } from "styled-components";

export const ContainerBlurWrapperStyles = styled.div`
width:100%;
height:100vh;
position: absolute;
backdrop-filter: blur(5px);
background-color:#00000080;
left:0;
transition: all 0.1s ease-in-out;
visibility: ${ props => props.isOpen ? 'visible' : 'hidden' };
opacity: ${ props => props.isOpen ? '1' : '0' };
z-index:2200;


h2 {
    background-color: transparent;
}


::-webkit-scrollbar {
    width:10px;
    background-color:transparent;
}

::-webkit-scrollbar-thumb {
    width:10px;
    background-color:white;
}

.iconClose {
    font-size:2.2rem;
    padding:2px;
    cursor: pointer;
    color: white;
    background-color: transparent;
    position: absolute;
    right:10px;
    top: 20px;
    z-index: 1500;
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`