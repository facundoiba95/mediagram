import styled from "styled-components";

export const MessageInChatContainerStyles = styled.li`
width: auto;
height: auto;
display: flex;
gap: 10px;
padding: 5px;
background-color: transparent;

.imgUser {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: transparent;
}

.mediaMessage {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 200px;
    background-color: transparent;
    object-fit: contain;
}

b, pre, small {
    background-color: transparent;
}

pre {
    font-family: "Red Hat Display";
    white-space: pre-wrap;
}

.contentMessage {
    background-color: #80808020;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    border-radius: 5px;
}

small {
    text-align: right;
}
`