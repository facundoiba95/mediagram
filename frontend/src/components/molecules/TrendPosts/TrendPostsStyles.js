import styled from "styled-components";

export const TrendPostsListStyles = styled.ul`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 200px 200px;
gap: 5px;

@media (max-width: 1024px) {
    padding-top: 10px;
}
`

export const TrendPostItemStyles = styled.li`
width: 100%;
height: 100%;
position: relative;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

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

&:hover .overlay {
    backdrop-filter: blur(5px);
    background-color: #00000050;
    opacity: 1;
    visibility: visible;
    cursor: pointer;
}


@media (max-width: 490px) {
    .overlay {
        display: flex;
        bottom: 0px;
        opacity: 1;
        visibility: visible;
        height: 20px;
        flex-direction: row;
        gap: 10px;
        background-color: #00000080;
        justify-content: flex-end;
        padding: 5px 10px 5px 0px;

        span {
            width: 100%;
            gap: 5px;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
        }
    }
}
<<<<<<< HEAD
=======
import styled from "styled-components";

export const TrendPostsListStyles = styled.ul`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 200px 200px;
gap: 5px;

@media (max-width: 1024px) {
    padding-top: 10px;
}
`

export const TrendPostItemStyles = styled.li`
width: 100%;
height: 100%;
position: relative;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

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

&:hover .overlay {
    backdrop-filter: blur(5px);
    background-color: #00000050;
    opacity: 1;
    visibility: visible;
    cursor: pointer;
}

.postTypeText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100%;
    cursor: pointer;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
}

@media (max-width: 490px) {
    .overlay {
        display: flex;
        bottom: 0px;
        opacity: 1;
        visibility: visible;
        height: 20px;
        flex-direction: row;
        gap: 10px;
        background-color: #00000080;
        justify-content: flex-end;
        padding: 5px 10px 5px 0px;

        span {
            width: 100%;
            gap: 5px;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
        }
    }
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
`