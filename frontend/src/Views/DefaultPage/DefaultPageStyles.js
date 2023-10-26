import { styled } from "styled-components";

export const DefaultPageContainerStyles = styled.div`
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

.imgOne {
    position: absolute;
    transform: rotate(45deg);
    left:-150px;
    top:-100px;
    width:500px;
    height:400px;
    z-index:0;
    background-color: white;
    padding:5px;
    border-radius:5px;
}

.imgTwo {
    position: absolute;
    transform: rotate(0);
    right:-10px;
    bottom:-50px;
    width:600px;
    height:300px;
    z-index:0;
    background-color: white;
    padding:5px;
    border-radius:5px;
}

.imgTree {
    width:500px;
    padding:5px;
    background-color:white;
    border-radius:5px;
    position: absolute;
    top:-50px;
    right: 350px;
    transform: rotate(60deg);
}

.imgFour {
    width:500px;
    position: absolute;
    bottom:-60px;
    padding:5px;
    transform: rotate(10deg);
    border-radius:5px;
    background-color: white;
}
`

export const WelcomeContentDefaultPageStyles = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
line-height:30px;
font-size:1.5rem;
background-color: transparent;
backdrop-filter: blur(10px);

h2{
    text-align:center;
    z-index:2000;
    background-color:transparent;
    padding-top:20px;
}

h3{
    text-align:center;
    font-size:1.3rem;
    background-color:transparent;

}
`

export const WelcomeMessageDefaultPageStyles = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap:50px;
background-color:transparent;

ul{
    background-color: transparent;
}

li {
    font-size:1.3rem;
    background-color: transparent;
    padding:2px;
}
h3 {
    width:80%;
    background-color: transparent;
}

b {
    background-color: transparent;
}
`

export const ContainerFormsAuthStyles = styled.div`
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
`