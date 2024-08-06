<<<<<<< HEAD
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
    transition: all 200ms ease-in-out;
    grid-template-columns: minmax(300px, 600px);
    grid-template-rows: ${props => props.topScroll ? "150px 1fr" : "100px 1fr"};
    overflow-x: hidden;
    background-color: transparent;
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
    -webkit-box-shadow: 0px 20px 9px -5px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 20px 9px -5px rgba(66, 68, 90, 1);
    box-shadow: 0px 20px 9px -5px rgba(66, 68, 90, 1);
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
justify-content: flex-start;
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
    height: 90vh;
    justify-content: flex-start;
}
`

export const FeedContainerSuggestionsStyles = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: transparent;

div {
    background-color: transparent;
}

@media (max-width: 490px ){
    display: none;
}
=======
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
    transition: all 200ms ease-in-out;
    grid-template-columns: minmax(300px, 600px);
    grid-template-rows: ${props => props.topScroll ? "150px 1fr" : "100px 1fr"};
    overflow-x: hidden;
    background-color: transparent;
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
    -webkit-box-shadow: 0px 20px 9px -5px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 20px 9px -5px rgba(66, 68, 90, 1);
    box-shadow: 0px 20px 9px -5px rgba(66, 68, 90, 1);
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
justify-content: flex-start;
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
    height: 90vh;
    justify-content: flex-start;
}
`

export const FeedContainerSuggestionsStyles = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: transparent;

div {
    background-color: transparent;
}

@media (max-width: 490px ){
    display: none;
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`