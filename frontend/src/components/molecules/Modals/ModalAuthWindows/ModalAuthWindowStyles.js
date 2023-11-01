import styled from 'styled-components';

export const ModalAuthWindowContainerStyles = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top:0;
left:0;
z-index: 2200;
backdrop-filter: blur(10px);
background-color: #111B2199;
opacity: ${ props => props.isOpenModalWindowAuth ? '1' : '0' };
visibility: ${ props => props.isOpenModalWindowAuth ? 'visible' : 'hidden' };
transition: all 0.2s ease-in-out;
`

export const WrapperModalAuthWindowStyles = styled.div`
width:100vw;
height:100%;
display: grid;
align-items: center;
justify-content: center;
grid-template-columns: 1fr minmax(350px, 400px);
font-family:'Red Hat Display';
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2000;
color:white;
overflow:hidden;
background-color: transparent;
`