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

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`