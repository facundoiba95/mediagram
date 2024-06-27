import styled from "styled-components";

export const ContainerExploreSectionGridStyles = styled.section`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr minmax(300px, 320px);

.iconTag {
    display: none;
    background-color: var(--green);
    border-radius: 50%;
    font-size: 2rem;
    padding: 6px;
}

@media (max-width: 1024px) {
    overflow: hidden;
    grid-template-columns: 1fr;
    
.iconTag {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1600;
}
}


`
export const ContainerExploreChildrens = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
gap: 5px;
overflow-y: scroll;

.titleTrends {
    display: flex;
    align-items: center;
    font-style: italic;
    font-family: "Red Hat Display";
    color: white;
    padding: 10px;
    position: sticky;
    top: 0px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    z-index: 2000;
}

@media (max-width: 1024px) {
    position: absolute;
    transition: all 200ms ease-in-out;
    z-index: 1500;
    opacity: ${ props => props.isOpenTrendTags ? "1" : "0" };
    visibility: ${ props => props.isOpenTrendTags ? "visible" : "hidden" };
    gap: 10px;

    .titleTrends {
        text-align: center;
        justify-content: center;
    }
}
`