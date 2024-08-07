<<<<<<< HEAD
import styled from 'styled-components';

export const ItemCommentStyles = styled.li`
width: 100%;
height: auto;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 15px;
background-color: ${ props => props.isCommentSelected ? '#93C43150' : 'transparent' };
padding:2px;
border-radius:5px;
`

export const ItemCommentUserInfoStyles = styled.span`
width:95px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
gap:5px;
text-align: center;
background-color: transparent;

img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    color: #6F8B97;
    border-radius:50%;
    cursor: pointer;
}

h5 {
    color: white;
    cursor: pointer;
    background-color: transparent;
}

small {
    background-color: transparent;
};

.imgProfile{
    width:45px;
    height:45px;
    border-radius:50%;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    cursor: pointer;
}
`

export const ItemCommentContentStyles = styled.div`
width:100%;
height: auto;
text-align: start;
color: var(--heavyLight);
background-color: transparent;

.divideComment {
    color: #80808090;
    width: auto;
    background-color: transparent;
}

p {
    background-color: transparent;
    font-size:1rem;
    padding-right:10px;
}
=======
import styled from 'styled-components';

export const ItemCommentStyles = styled.li`
width: 100%;
height: auto;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 15px;
background-color: ${ props => props.isCommentSelected ? '#93C43150' : 'transparent' };
padding:2px;
border-radius:5px;
`

export const ItemCommentUserInfoStyles = styled.span`
width:95px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
gap:5px;
text-align: center;
background-color: transparent;

img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    color: #6F8B97;
    border-radius:50%;
    cursor: pointer;
}

h5 {
    color: white;
    cursor: pointer;
    background-color: transparent;
}

small {
    background-color: transparent;
};

.imgProfile{
    width:45px;
    height:45px;
    border-radius:50%;
    color: var(--violetpink);
    background-color:var(--heavyLight);
    cursor: pointer;
}
`

export const ItemCommentContentStyles = styled.div`
width:100%;
height: auto;
text-align: start;
color: var(--heavyLight);
background-color: transparent;

.divideComment {
    color: #80808090;
    width: auto;
    background-color: transparent;
}

p {
    background-color: transparent;
    font-size:1rem;
    padding-right:10px;
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`