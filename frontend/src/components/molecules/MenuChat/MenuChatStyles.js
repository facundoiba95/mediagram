import styled from "styled-components";

export const MenuChatContainerStyles = styled.ul`
width: 100%;
height: 80px;
display: flex;
gap: 5px;
`

export const ItemMenuChatStyles = styled.li`
width: 100%;
height: 100%;
color: white;
display: flex;
justify-content: center;
align-items: center;

.iconMenuChat {
    font-size: 2rem;
    cursor: pointer;
}

&:nth-child(2) {
    border-left: 1px solid #80808080;
    border-right: 1px solid #80808080;
}
`