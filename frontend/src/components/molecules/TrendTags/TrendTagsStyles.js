import styled from "styled-components";

export const TrendTagsContainerStyles = styled.div`
width: 100%;
height: 100%;
color: white;
font-family: "Red Hat Display";
padding: 10px 10px 0 10px;

h2 {
    display: flex;
    align-items: center;
    font-style: italic;
}

@media (max-width: 1024px) {
    position: absolute;
    transition: all 200ms ease-in-out;
    z-index: 1500;
    opacity: ${ props => props.isOpenTrendTags ? "1" : "0" };
    visibility: ${ props => props.isOpenTrendTags ? "visible" : "hidden" };
    
    h2 {
        text-align: center;
        justify-content: center;
    }
}
`

export const TrendTagsListStyles = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const TrendTagsItemStyles = styled.li`
width: 100%;
height: 45px;
display: flex;
align-items: center;
justify-content: flex-start;
border-bottom: 1px solid #80808080;
background-color: transparent;
padding-left: 10px;
position: relative;

b, p, .tagIcon, .rankIcon, .countTag{
    background-color: transparent;
}

&:nth-child(1) {
    color: #53FC18;    
    font-weight: 900;
}

.countTag {
    display: flex;
    gap: 5px;
    position: absolute;
    right: 20px;
}

&:hover {
    background-color: #80808080;
    cursor: pointer;
}

@media (max-width: 490px) {
    &:hover {
    background-color: transparent;
    cursor: normal;
}
}
`