import { styled } from "styled-components";

export const ResultToSearchContainerStyles = styled.ul`
width:${ props => props.isOpenSearchBar ? '100%' : '5%' };
max-width: 800px;
height: 100%;
max-height:400px;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
background-color: #eeeeee30;
position: absolute;
top:100px;
left:50%;
transform: translate(-50%);
overflow-y: scroll;
padding:10px;
border-radius:10px;
transition: all 0.1s ease-in-out;
gap:10px;
font-family: 'Red Hat Display';

.loader {
    width:100%;
    height:100%;
    background-color: transparent;
    margin: 10rem auto;
}

h2 {
    text-align:center;
    width:100%;
    height:100%;
    margin:10rem auto;
}
`

export const ItemResultToSearchStyles = styled.li`
width:100%;
height:80px;
background-color:var(--light);
padding-left:10px;
display:flex;
justify-content: flex-start;
align-items: center;
gap:20px;
font-size:1.2rem;
font-family: 'Red Hat Display';
font-weight:600;
border-radius:10px;
transition:all 0.3s ease-in-out;
visibility: ${ props => props.isOpenSearchBar ? 'visible' : 'hidden' };
opacity: ${ props => props.isOpenSearchBar ? '1' : '0' };

p {
    background-color: transparent;
}

img {
    width:60px;
    height:60px;
    border-radius: 50%;
}

.imgProfile{
    width:60px;
    height: 60px;
    font-size:3rem;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    border-radius:50%;
}

&:hover {
    cursor: pointer;
    background-color: var(--heavyLight);
}
`