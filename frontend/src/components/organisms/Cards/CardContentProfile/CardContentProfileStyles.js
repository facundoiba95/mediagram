import { styled } from "styled-components";

export const CardContentProfileContainerStyles = styled.div`
width:100%;
height:380px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
gap:10px;
font-family: 'Red Hat Display';
position: relative;
overflow: hidden;
text-overflow: ellipsis;

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1500;
    background-color: transparent;
    opacity: 0;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        font-weight: 900;
        background-color: transparent;
        color: white;
        gap: 5px;
    }

    .containerIconPost {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .iconView, .iconHeart, .iconComment{
        background-color: transparent;
        color: var(--light);
        font-size:1.1rem;        
        cursor: pointer;
    }

    .iconHeart {
        color: ${props => props.isLike ? 'var(--violetpink)' : 'white'};
    }
}

.imgContent{
    width:100%;
    height:100%;
    aspect-ratio: 1/1;
    object-fit:cover;
}

&:hover .overlay {
    backdrop-filter: blur(5px);
    background-color: #00000050;
    opacity: 1;
    visibility: visible;
    cursor: pointer;
}

@media (max-width: 490px) {
    height: 100%;
    padding:0;
    gap:0;

    .imgContent {
        height: 100%;
    }

    &:hover .overlay {
        display: none;
    }
}
`;