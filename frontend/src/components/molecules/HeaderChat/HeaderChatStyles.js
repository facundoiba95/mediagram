import styled from "styled-components";

export const HeaderChatContainerStyles = styled.span`
width: 100%;
height: 100px;
border-bottom: 1px solid #80808080;
display: flex;
align-items: center;
gap: 10px;
padding: 10px;

img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

span, b, p {
    background-color: transparent;
}

span {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;


    b {
        font-size: 1.2rem;
    }

    p {
        font-weight: 600;
    }
}

ul {
    display: flex;
    gap: 5px;
}
`