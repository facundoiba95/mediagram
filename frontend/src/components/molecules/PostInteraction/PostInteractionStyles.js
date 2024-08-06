<<<<<<< HEAD
import { styled } from "styled-components";

export const PostInteractionContainerStyles = styled.div`
width:100%;
height:100%;
border-left: 1px solid #80808080;
display: flex;
justify-content: center;
align-items: center;
`
export const ListInteractionStyles = styled.ul`
display: flex;
align-self: center;
justify-content: center;
gap:40px;


@media (max-width: 490px){
    gap: 20px;
}
`

export const ItemInteractionStyles = styled.li`
width: 100%;
height:auto;
display: flex;
flex-direction: column;
align-items: center;
gap:8px;
position: relative;

.iconHeart {
    color:${ props => props.isLike == true ? 'var(--violetpink)' : 'white' };
}

.iconComment, .iconHeart, .iconView {
    font-size: 1.5rem;
    cursor: pointer;
}

.iconView:hover {
    color: var(--violetpink);
}

.iconHeart:hover {
    color: var(--violetpink);
}

.iconComment:hover {
    color: var(--violetpink);
}

.iconComment {
    color: ${ props => props.openShareURL ? 'var(--violetpink)' : '' };
}

.iconDeletePost {
    color: crimson;
    font-size: 1.8rem;
    cursor: pointer;
}

h5 {
    cursor: pointer;
}



`

export const SharePostContainerStyles = styled.div`
width:350px;
height:auto;
position: absolute;
right: 0;
top:50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap:5px;
padding:5px 20px;
border-radius:5px;
border:2px solid var(--violetpink);

input {
    width: 180px;
    text-overflow: ellipsis;
    word-wrap: normal;
    overflow: hidden;
    background-color: #80808080;
    color:white;
    padding: 2px;
    border: none;
}

input:focus {
    outline: none;
}

span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
}

.btnCopyURL {
    background-color: transparent;
    border:1px solid white;
    color: white;
    font-size:1rem;
    position: inherit;
    width:auto;
    padding: 2px 10px;
    cursor: pointer;
}

.messageShareURLPost {
    width:160px;
    position: absolute;
    top:70px;
    left:50%;
    transform: translate(-50%);
    background-color: green;
    padding:5px 10px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
}
`
=======
import { styled } from "styled-components";

export const PostInteractionContainerStyles = styled.div`
width:100%;
height:100%;
border-left: 1px solid #80808080;
display: flex;
justify-content: center;
align-items: center;
`
export const ListInteractionStyles = styled.ul`
display: flex;
align-self: center;
justify-content: center;
gap:40px;


@media (max-width: 490px){
    gap: 20px;
}
`

export const ItemInteractionStyles = styled.li`
width: 100%;
height:auto;
display: flex;
flex-direction: column;
align-items: center;
gap:8px;
position: relative;

.iconHeart {
    color:${ props => props.isLike == true ? 'var(--violetpink)' : 'white' };
}

.iconComment, .iconHeart, .iconView {
    font-size: 1.5rem;
    cursor: pointer;
}

.iconView:hover {
    color: var(--violetpink);
}

.iconHeart:hover {
    color: var(--violetpink);
}

.iconComment:hover {
    color: var(--violetpink);
}

.iconComment {
    color: ${ props => props.openShareURL ? 'var(--violetpink)' : '' };
}

.iconDeletePost {
    color: crimson;
    font-size: 1.8rem;
    cursor: pointer;
}

h5 {
    cursor: pointer;
}



`

export const SharePostContainerStyles = styled.div`
width:350px;
height:auto;
position: absolute;
right: 0;
top:50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap:5px;
padding:5px 20px;
border-radius:5px;
border:2px solid var(--violetpink);

input {
    width: 180px;
    text-overflow: ellipsis;
    word-wrap: normal;
    overflow: hidden;
    background-color: #80808080;
    color:white;
    padding: 2px;
    border: none;
}

input:focus {
    outline: none;
}

span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
}

.btnCopyURL {
    background-color: transparent;
    border:1px solid white;
    color: white;
    font-size:1rem;
    position: inherit;
    width:auto;
    padding: 2px 10px;
    cursor: pointer;
}

.messageShareURLPost {
    width:160px;
    position: absolute;
    top:70px;
    left:50%;
    transform: translate(-50%);
    background-color: green;
    padding:5px 10px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
}
`
>>>>>>> b3173dc1 (first commit in Ubuntu)
