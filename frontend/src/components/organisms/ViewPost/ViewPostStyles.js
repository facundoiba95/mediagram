import styled from 'styled-components';

export const ViewPostBackgroundStyles = styled.div`
display: ${ props => props.isOpenViewPost ? 'flex' : 'none' };
width:100vw;
height:100vh;
z-index:2100;
backdrop-filter: blur(10px);
position: absolute;
left:0;
justify-content: center;
font-family: 'Red Hat Display';
overflow:hidden;

button {
    background-color: yellow;
    width:120px;
    height:30px;
    position: absolute;
}
`

export const ViewPostWrapperStyles = styled.div`
display: flex;
width:80%;
height:100vh;
z-index:2000;
`

export const ViewPostImageContainerStyles = styled.div`
width:100%;
max-width:760px;
height:95vh;
display: flex;


img {
    width:100%;
    height:100vh;
    object-fit: cover;
    padding:0px 30px;
}
`

export const ViewPostCommentsSectionStyles = styled.section`
width:100%;
max-width:470px;
height:100vh;
background-color: transparent;
`

export const ViewPostHeadStyles = styled.div`
width:100%;
height:90px;
display: flex;
justify-content: flex-start;
align-items: center;
color: var(--light);
`

export const ViewPostUserInfoHeadStyles = styled.span`
width:100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
cursor: pointer;

.imgProfile {
    width:50px;
    height:50px;
    border-radius:50%;
    object-fit: cover;
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

`