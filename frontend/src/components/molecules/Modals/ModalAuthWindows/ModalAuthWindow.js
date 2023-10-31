import styled from 'styled-components';

export const ModalAuthWindowContainerStyles = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
z-index: 2100;
background-color: red;
display: ${ props => props.isOpenModalAuthWindow ? 'flex' : 'none' }
`