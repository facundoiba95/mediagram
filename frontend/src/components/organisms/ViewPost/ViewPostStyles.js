import styled from 'styled-components';

export const ViewPostBackgroundStyles = styled.div`
display: ${props => props.isOpenViewPost ? 'flex' : 'none'};
width:100vw;
height: 100vh;
z-index: 2100;
backdrop-filter: blur(10px);
position: absolute;
left:0;
justify-content: center;
font-family: 'Red Hat Display';
overflow:hidden;
background-color: transparent;

button {
    background-color: yellow;
    width:120px;
    height:30px;
    position: absolute;
    left: 20px;
    top:20px;
    border: none;
    font-size:1.1rem;
    border-radius:5px;
    cursor: pointer;
}

@media (max-width: 490px) {
    width:100%;
    height: 100vh;
    top: 0px;
    overflow-y: scroll;
}
`

export const ViewPostWrapperStyles = styled.div`
display: flex;
width: 80%;
height: 100%;
z-index: 2000;

@media (max-width: 490px ){
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
}
`

export const ViewPostImageContainerStyles = styled.div`
width:100%;
max-width:760px;
height: 100%;
display: flex;
position: relative;

img {
    width:100%;
    height: auto;
    object-fit: contain;
    padding: 0px 30px;
    margin: 0 auto;
}

@media (max-width: 490px) {
    min-height: 90vh;
    img {
        background-color: black;
        height: 100%;
        padding: 0;
        aspect-ratio: 2/1;
    }
}
`

export const ViewPostCommentsSectionStyles = styled.section`
width:100%;
max-width:470px;
height: 100%;
background-color: transparent;

@media (max-width: 490px) {
    height:auto;
}
`

export const ViewPostHeadStyles = styled.div`
width: 100%;
height: 90px;
display: flex;
justify-content: flex-start;
align-items: center;
color: var(--light);

@media (max-width: 490px) {
    height:auto;
    margin-top: 2rem;
}
`

export const ViewPostUserInfoHeadStyles = styled.span`
width:100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
cursor: pointer;

img{
    width:50px;
    height:50px;
    border-radius:50%;
    object-fit: cover;
}

.imgProfile{
    width:50px;
    height:50px;
    border-radius:50%;
    color: var(--violetpink);
    background-color:var(--heavyLight);
}

@media (max-width: 490px) {
    justify-content: center;
}
`
export const ViewPostLogosLeftStyles = styled.div`
position: absolute;
left:-20px;
top:-100px;
height: 100vh;

h1 {
    font-family:'Leckerli One';
    color: var(--violetpink);
    font-size:4rem;
    z-index:100;
    background-color: transparent;
    filter: blur(6px);
    transform: rotate(-15deg);
}

@media (max-width: 490px) {
    display: none;
}

`

export const ViewPostLogosRightStyles = styled.div`
position: absolute;
top:-50px;
right:-90px;
height: 100vh;

h1 {
    font-family:'Leckerli One';
    color: var(--violetpink);
    font-size: 4rem;
    z-index:100;
    background-color: transparent;
    filter: blur(6px);
    transform: rotate(-15deg);
}

@media (max-width: 490px) {
    display: none;
}
`
export const ContainerQuitViewPostStyles = styled.div`
    width: auto;
    position: absolute;
    top: 0px;
    padding: 10px;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 2000;
    font-size: 1rem;
    gap: 10px;

h3, .iconQuitPost {
    cursor: pointer;
}

.iconQuitPost {
    font-size: 1.5rem;
    font-weight:900;
}

@media (max-width: 490px) {
    width: 100%;
    position: sticky;
}
<<<<<<< HEAD
=======
import styled from 'styled-components';

export const ViewPostBackgroundStyles = styled.div`
display: ${props => props.isOpenViewPost ? 'flex' : 'none'};
width:100vw;
height: 100vh;
z-index: 2100;
backdrop-filter: blur(10px);
position: absolute;
left:0;
justify-content: center;
font-family: 'Red Hat Display';
overflow:hidden;
background-color: transparent;

button {
    background-color: yellow;
    width:120px;
    height:30px;
    position: absolute;
    left: 20px;
    top:20px;
    border: none;
    font-size:1.1rem;
    border-radius:5px;
    cursor: pointer;
}

@media (max-width: 490px) {
    width:100%;
    height: 100vh;
    top: 0px;
    overflow-y: scroll;
}
`

export const ViewPostWrapperStyles = styled.div`
display: flex;
width: 80%;
height: 100%;
z-index: 2000;
position: relative;

@media (max-width: 490px ){
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
}
`

export const ViewPostImageContainerStyles = styled.div`
width:100%;
max-width:760px;
height: 100%;
display: flex;
position: relative;

img {
    width:100%;
    height: auto;
    object-fit: contain;
    padding: 0px 30px;
    margin: 0 auto;
}

@media (max-width: 490px) {
    min-height: 90vh;
    img {
        background-color: black;
        height: 100%;
        padding: 0;
        aspect-ratio: 2/1;
    }
}
`

export const ViewPostCommentsSectionStyles = styled.section`
width:100%;
max-width:470px;
height: 100%;
background-color: transparent;

@media (max-width: 490px) {
    height:auto;
}
`

export const ViewPostHeadStyles = styled.div`
width: 100%;
height: 90px;
display: flex;
justify-content: flex-start;
align-items: center;
color: var(--light);

@media (max-width: 490px) {
    height:auto;
    margin-top: 2rem;
}
`

export const ViewPostUserInfoHeadStyles = styled.span`
width:100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
cursor: pointer;

img{
    width:50px;
    height:50px;
    border-radius:50%;
    object-fit: cover;
}

.imgProfile{
    width:50px;
    height:50px;
    border-radius:50%;
    color: var(--violetpink);
    background-color:var(--heavyLight);
}

@media (max-width: 490px) {
    justify-content: center;
}
`
export const ViewPostLogosLeftStyles = styled.div`
position: absolute;
left:-20px;
top:-100px;
height: 100vh;

h1 {
    font-family:'Leckerli One';
    color: var(--violetpink);
    font-size:4rem;
    z-index:100;
    background-color: transparent;
    filter: blur(6px);
    transform: rotate(-15deg);
}

@media (max-width: 490px) {
    display: none;
}

`

export const ViewPostLogosRightStyles = styled.div`
position: absolute;
top:-50px;
right:-90px;
height: 100vh;

h1 {
    font-family:'Leckerli One';
    color: var(--violetpink);
    font-size: 4rem;
    z-index:100;
    background-color: transparent;
    filter: blur(6px);
    transform: rotate(-15deg);
}

@media (max-width: 490px) {
    display: none;
}
`
export const ContainerQuitViewPostStyles = styled.div`
    width: auto;
    position: absolute;
    top: 0px;
    right: -100px;
    padding: 10px;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 2000;
    font-size: 1rem;
    gap: 10px;
    background-color: transparent;

h3, .iconQuitPost {
    cursor: pointer;
}

.iconQuitPost {
    font-size: 1.5rem;
    font-weight:900;
}

@media (max-width: 490px) {
    width: 100%;
    position: sticky;
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
`