import styled from "styled-components";

export const ContainerCardCreateStateFeedStyles = styled.div`
width: 100%;
height: auto;
background-color: red;
display: flex;
flex-direction: column;
gap: 5px;
padding: 10px;
border-bottom: 1px solid #80808080;
padding-bottom: 20px;

.EmojiPickerReact {
    width: 100%;
    max-width: 250px;
    height: 40px;
    --epr-emoji-size: 1.2rem;
    --epr-emoji-gap: 20px;
}
`

export const TextBoxCreateStateFeedStyles = styled.textarea`
    resize: none;
    color: white;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #80808080;
    color: white;

    &::placeholder {
        color: white;
    }

    &:focus {
        outline: none;
        border: 1px solid var(--green);
    }
`