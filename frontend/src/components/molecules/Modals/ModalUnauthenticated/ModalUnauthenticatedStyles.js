<<<<<<< HEAD
import { styled } from "styled-components";

export const ModalUnauthenticatedContainerStyles = styled.div`
width: 100vw;
height:100vh;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ModalUnauthenticatedBoxStyles = styled.div`
width:100%;
min-width: 300px;
max-width: 900px;
height: 500px;
font-family: 'Red Hat Display';
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
background-color:var(--lightblack);
font-size:2rem;
border-radius:5px;
gap:10px;
color:var(--light);

p {
    font-size:1.5rem;
    text-align: center;
}

b {
    cursor: pointer;
}

span, small, strong, b, p {
    background-color: transparent;
}

b:hover {
    font-weight: 900;
    color: var(--violetpink);
}

.iconPrivateAccount {
    color: crimson;
    background-color: transparent;
    margin: 0 auto;
    margin-bottom:10px;
    font-size: 4rem;
    display: flex;

}
=======
import { styled } from "styled-components";

export const ModalUnauthenticatedContainerStyles = styled.div`
width: 100vw;
height:100vh;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ModalUnauthenticatedBoxStyles = styled.div`
width:100%;
min-width: 300px;
max-width: 900px;
height: 500px;
font-family: 'Red Hat Display';
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
background-color:var(--lightblack);
font-size:2rem;
border-radius:5px;
gap:10px;
color:var(--light);

p {
    font-size:1.5rem;
    text-align: center;
}

b {
    cursor: pointer;
}

span, small, strong, b, p {
    background-color: transparent;
}

b:hover {
    font-weight: 900;
    color: var(--violetpink);
}

.iconPrivateAccount {
    color: crimson;
    background-color: transparent;
    margin: 0 auto;
    margin-bottom:10px;
    font-size: 4rem;
    display: flex;

}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`