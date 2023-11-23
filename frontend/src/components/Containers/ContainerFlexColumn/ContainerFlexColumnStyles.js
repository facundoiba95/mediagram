import styled from 'styled-components';

export const WrapperFlexColumnStyle = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: center;

@media (max-width: 490px) {
    overflow-y: scroll;
    ::-webkit-scrollbar {
       display: none;
    }
}
`