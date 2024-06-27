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
    font-size: 2.3rem;
    padding: 2px;
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
height: 100%;
display: flex;
flex-direction: column;
gap: 5px;
`