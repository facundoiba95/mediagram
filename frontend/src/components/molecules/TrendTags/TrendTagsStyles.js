<<<<<<< HEAD
import styled from "styled-components";

export const TrendTagsContainerStyles = styled.div`
width: 100%;
height: auto;
color: white;
font-family: "Red Hat Display";
padding: 10px 10px 0 10px;

h2 {
    display: flex;
    align-items: center;
    font-style: italic;
}
`

export const TrendTagsListStyles = styled.ul`
width: 100%; 
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;

@media (max-width: 490px) {
    display: ${props => props.isTrendUsers ? 'grid' : 'flex'};
    gap: ${props => props.isTrendUsers ? "5px" : '0px'};
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
}
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
    background-color: #80808020;
    cursor: pointer;
}

@media (max-width: 490px) {
    
    &:hover {
      background-color: transparent;
      cursor: normal;
    }
}
=======
import styled from "styled-components";

export const TrendTagsContainerStyles = styled.div`
width: 100%;
height: auto;
color: white;
font-family: "Red Hat Display";
padding: 10px 10px 0 10px;

h2 {
    display: flex;
    align-items: center;
    font-style: italic;
}
`

export const TrendTagsListStyles = styled.ul`
width: 100%; 
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;

@media (max-width: 490px) {
    display: ${props => props.isTrendUsers ? 'grid' : 'flex'};
    gap: ${props => props.isTrendUsers ? "5px" : '0px'};
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
}
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
    background-color: #80808020;
    cursor: pointer;
}

@media (max-width: 490px) {
    
    &:hover {
      background-color: transparent;
      cursor: normal;
    }
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`