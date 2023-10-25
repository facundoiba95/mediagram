import styled from 'styled-components';

export const FeedContainerStyles = styled.div`
width:100%;
height:100%;
display: grid;
grid-template-columns: minmax(350px, 600px) 1fr minmax(350px, 400px);
grid-template-rows: 235px 1fr;
background-color: var(--heavyLight);


`

export const FeedContainerHeaderStyles = styled.header`
width: 100%;
height:100%;
grid-column: 3/4;
grid-row: 1/2;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color: var(--heavyLight);
` 

export const FeedContainerPostsStyles = styled.section`
width:100%;
height:100vh;
grid-column: 1/3;
grid-row: 1/3;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
overflow-y: scroll;
background-color: var(--heavyLight);

div {
    background-color: transparent;
}
`

export const FeedContainerNewsStyles = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: blue;

div {
    background-color: transparent;
}
`