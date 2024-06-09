import styled from "styled-components";

export const ContainerPostInExploreSectionStyles = styled.section`
width: 100%;
height: auto;
display: grid;
grid-template-columns: minmax(280px, 320px) minmax(280px, 320px) 1fr;
grid-template-rows: 320px 320px;
gap: 5px;
direction: ${props => props.index % 2 != 0 ? 'rtl' : 'normal'};
font-family: 'Red Hat Display';

@media (max-width: 490px) {
    grid-template-columns: 1fr;
    padding: 5px;
}
`

export const CardPostInExploreStyles = styled.div`
width: 100%;
height: 100%;
grid-row: ${props => props.heightCard ? '1/3' : ''};
grid-column: ${props => props.heightCard ? '3/3' : ''};
position: relative;

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.overflow {
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
        gap: 10px;
        font-size: 1.3rem;
        font-weight: 900;
        background-color: transparent;
    }

    .iconHeart, .iconView {
        background-color: transparent;
    }

    .iconHeart {
        color: crimson;
    }
}

&:hover .overflow {
    backdrop-filter: blur(5px);
    background-color: #00000050;
    opacity: 1;
    visibility: visible;
    cursor: pointer;
}

@media (max-width: 490px) {
    .overflow {
        display: none;
    }
}
`