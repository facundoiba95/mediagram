import styled from "styled-components";

export const ItemChatContainerStyles = styled.li`
width: 100%;
height: 100px;
display: flex;
justify-content: flex-start;
align-items: center;
font-family: "Red Hat Display";
color: white;
gap: 10px;
background-color: transparent;
padding: 5px;

b, p, span, small {
    background-color: transparent;
}

span {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    max-width: 300px;
}

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

@media (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      background-color: #80808010;
    }
}
`