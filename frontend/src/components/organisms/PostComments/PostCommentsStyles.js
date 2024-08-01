import styled from "styled-components";

export const PostCommentsListStyles = styled.ul`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
gap: 5px;
padding-left: 20px;
margin-bottom: 1rem;
border-left: 1px solid #808080;

small {
    margin: 0 auto;
    cursor: pointer;
}
`

export const PostCommentsItemStyles = styled.li`
width: 100%;
height: auto;
display: flex;
justify-content: flex-start;
align-items: flex-start;
gap: 5px;
padding: 5px;

span {
    background-color: transparent;
}

img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

.contentComment{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
    background-color: transparent;
}

.comment {
    background-color: transparent;
    p, b {
        background-color: transparent;
    }
}

.infoComment {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #b7b9bd;
    gap: 5px;

    .iconHeart {
        color: ${props => props.isLike ? "crimson" : "#b7b9bd"};
        cursor: pointer;
    }

    small, h5 , .iconHeart, div{
        background-color: transparent;
    }

    small {
        font-weight: 600;
    }

    div {
        display: flex;
    }
}
`