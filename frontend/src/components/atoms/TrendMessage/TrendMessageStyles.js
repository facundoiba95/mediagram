import styled from "styled-components";

export const TrendMessageContainerStyles = styled.div`
width: auto;
height: auto;
max-width: 500px;
display: flex;
align-items: center;
gap: 5px;
font-family: "Merriweather Sans";
border-radius: 5px;
padding: 5px;
font-size: 1.3rem;

b, i {
    background-color: transparent;
    color: white;
}

i {
    color: var(--green);
}

.iconFire {
    background-color: transparent;
    color: #ffba08;
    font-size: 1.2rem;
}
`