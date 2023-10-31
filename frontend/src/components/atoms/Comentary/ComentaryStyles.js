import styled from 'styled-components';

export const ItemCommentStyles = styled.li`
width: 100%;
height: auto;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 15px;
`

export const ItemCommentUserInfoStyles = styled.span`
width:95px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
gap:5px;
text-align: center;

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
}

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

.divideComment {
    color: #80808090;
    width: auto;
}

p {
    font-size:1rem;
    padding-right:10px;
}
`