import styled from "styled-components";

export const TyperChatContainerStyles = styled.div`
width: 100%;
height: 100px;
background-color: #80808080;
display: flex;
justify-content: flex-start;
align-items: center;

form {
    padding:10px 20px 10px 10px;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

textarea {
    color: white;
    width: 100%;
    resize: none;
    overflow-y: scroll;
    border-radius:8px;
    height: 50px;
    padding-left: 5px;
}

textarea:focus {
    outline: none;
    border: 2px solid #808080;
}


.sendMessage {
    font-size: 2rem;
    background-color: transparent;
    cursor: pointer;
}
`