import styled from 'styled-components';

export const FeedContainerStyles = styled.div`
width:100%;
height:100%;
display: grid;
grid-template-columns: minmax(350px, 600px) 1fr minmax(350px, 400px);
grid-template-rows: 235px 1fr;
color:white;
font-family: 'Red Hat Display';

@media (max-width: 490px) {
    grid-template-columns: minmax(300px, 600px);
    grid-template-rows: 200px 1fr;
    overflow-x: hidden;
   
}
`

export const FeedContainerHeaderStyles = styled.header`
width: 100%;
height: 100%;
grid-column: 3/4;
grid-row: 1/2;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;

@media (max-width: 490px) {
    grid-column: 1/4;
    grid-row: 1/2;
    overflow-x: hidden;
}
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
border-right:1px solid #80808080;

&::-webkit-scrollbar {
    display: none;
}
div {
    background-color: transparent;
}

@media (max-width: 490px) {
    grid-column: 1/3;
    grid-row: 2/3;
}
`

export const FeedContainerNewsStyles = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: transparent;

div {
    background-color: transparent;
}

@media (max-width: 490px ){
    display: none;
}
`