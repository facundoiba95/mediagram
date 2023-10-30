import styled from 'styled-components';

export const ItemCommentStyles = styled.li`
width: 100%;
height: auto;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 15px;
`

export const ItemCommentUserInfoStyles = styled.span`
width:100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
gap:5px;

img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    color: #6F8B97;
    border-radius:50%;
}
h4 {
    color: white;
}
`

export const ItemCommentContentStyles = styled.div`
width:100%;
height: auto;
text-align: start;
color: var(--heavyLight);


p {
    font-size:1rem;
    padding-right:10px;
}
`