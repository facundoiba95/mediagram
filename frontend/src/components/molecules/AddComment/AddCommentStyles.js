import { styled } from "styled-components";

export const AddCommentContainerStyles = styled.div`
width: 100%;
height: 100px;
`

export const FormCommentContainerStyle = styled.form`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
padding-right:15px;
gap: 10px;

.btnAddComment {
    background-color: #38b000;
    position: relative;
    color: white;
    font-weight: 600;
    border: none;
    border-radius:5px;
    cursor: pointer;
}

textarea {
    color: white;
    width: 100%;
    height:100px;
    padding: 10px;
    resize: none;
    overflow-y: scroll;
    border-radius:5px;
}

::placeholder{
    color:white;
}
`