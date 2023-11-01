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
`

export const ItemInteractionStyles = styled.li`
width: 100%;
height:auto;
display: flex;
flex-direction: column;
align-items: center;
gap:8px;

.iconHeart {
    color:${ props => props.likedPost == true ? 'var(--violetpink)' : 'white' };
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


`