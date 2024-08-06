<<<<<<< HEAD
import { styled } from "styled-components";

export const AddCommentContainerStyles = styled.div`
width: 100%;
height: 100px;
font-family: "Red Hat Display";

@media (max-width: 490px) {
    height: 80px;
}
`

export const FormCommentContainerStyle = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
gap: 10px;

.btnAddComment {
    background-color: #38b000;
    color: black;
    font-weight: 600;
    border: none;
    border-radius:5px;
    cursor: pointer;
    padding: 2px;
    position: relative;
    top: 0px;
    left: 0px;
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

textarea:focus {
    outline: none;
    border: 2px solid var(--green);
}

::placeholder {
    font-family: "Red Hat Display";
    color:white;
}

@media (max-width: 490px) {
    gap: 0px;

    textarea {
        width:100%;
    }

    .btnAddComment {
        margin-top: 0.5rem;
    }
}

=======
import { styled } from "styled-components";

export const AddCommentContainerStyles = styled.div`
width: 100%;
height: 100px;
font-family: "Red Hat Display";

@media (max-width: 490px) {
    height: 80px;
}
`

export const FormCommentContainerStyle = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
gap: 10px;

.btnAddComment {
    background-color: #38b000;
    color: black;
    font-weight: 600;
    border: none;
    border-radius:5px;
    cursor: pointer;
    padding: 2px;
    position: relative;
    top: 0px;
    left: 0px;
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

textarea:focus {
    outline: none;
    border: 2px solid var(--green);
}

::placeholder {
    font-family: "Red Hat Display";
    color:white;
}

@media (max-width: 490px) {
    gap: 0px;

    textarea {
        width:100%;
    }

    .btnAddComment {
        margin-top: 0.5rem;
    }
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
`