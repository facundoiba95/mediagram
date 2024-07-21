import styled from "styled-components";

export const FormChangeLocationContainerStyles = styled.form`
width:100%;
max-width:700px;
height: auto;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
gap:20px;
padding:10px;
background-color: transparent;

b , p, span{
    background-color: transparent;
}
`

export const ButtonSearchLocationStyles = styled.button`
width: 120px;
height: 30px;
background-color: var(--green);
border: none;
border-radius: 5px;
cursor: pointer;

&:hover {
    font-weight: 600;
}

@media (max-width: 780px) {
    &:hover {
    font-weight: 300;
}
}
`

export const ResultLocationItemStyles = styled.div`
width: 100%;
height: auto;
font-weight: 600;
display: flex;
align-items: center;
justify-content: flex-start;
border-radius: 8px;

.iconLocation {
    color: purple;
    height: 20px;
    width: 20px;
} 


p {
    font-weight:600;
    color: white;
    text-align:start;
    width: 100%;
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: normal;
}
`