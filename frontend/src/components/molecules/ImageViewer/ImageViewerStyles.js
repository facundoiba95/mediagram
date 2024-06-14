import styled from "styled-components";

export const ImageViewerContainerStyles = styled.div`
width:100%;
height:100vh;
position: absolute;
backdrop-filter: blur(20px);
background-color:#00000020;
left:0;
transition: all 0.1s ease-in-out;
visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
opacity: ${props => props.isOpen ? '1' : '0'};
z-index:2200;
display: flex;
justify-content: center;
align-items: center;

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

.imgProfile {
    width: 100%;
    height: 100%;
    max-width: 550px;
    max-height: 550px;
    object-fit: cover;
    border-radius: 50%;
    background-color: transparent;
}

.iconClose {
    position: absolute;
    background-color: transparent;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
}

@media(max-width: 490px) {
.imgProfile {
    max-width: 320px;
    max-height: 320px;
} 
}
`