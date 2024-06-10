import styled from "styled-components";

export const WrapperPostsInExploreStyles = styled.section`
width: 100%;
height: 82vh;
color: white;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow-y: auto;
padding-bottom: 20px;
margin-top: 1rem;
gap: 5px;
`

export const MessageNotFoundTagsByPostStyles = styled.span`
width: 100%;
height: auto;
max-width: 500px;
max-height: 200px;
border-radius: 5px;
border: 2px solid var(--light);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-family: 'Red Hat Display';
font-size: 1.3rem;
padding: 10px;
p {
    font-weight: 600;
    width: 80%;
}

b {
    font-style: italic;
}

@media (max-width: 490px) {
    width: 80%;
}
`