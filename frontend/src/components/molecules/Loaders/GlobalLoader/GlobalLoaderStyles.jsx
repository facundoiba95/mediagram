<<<<<<< HEAD
import styled from "styled-components";
import { title_separated } from "../../../../libs/title_separated";

export const ResaltLetter = () => {
    const letters = title_separated.map((letter, index) => (
        <span key={index} className={`letter-${index}`}>{letter}</span>
    ));
    return <h1>{letters}</h1>;
};

export const GlobalLoaderContainerStyles = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #00000099;
    backdrop-filter: blur(10px);
    z-index: 2500;
    top: 0px;
    left: 0px;
    display: ${props => props.isHidden ? "none" : "flex"};
    opacity: ${props => props.isHidden ? "0" : "1"};
    visibility: ${props => props.isHidden ? "hidden" : "visible"};
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Leckerli One';
        color: var(--violetpink);
        background-color: transparent;
        font-size: 4rem;
    }

    ${title_separated.map((_, index) => `
        .letter-${index} {
            animation: showLetter 2s infinite alternate;
            animation-delay: ${index * 0.1}s;
            background-color: transparent;
        }
    `).join("")}
    
    @keyframes showLetter {
        0% {
            color:var(--violetpink);
        }
        50% {
            color: var(--heavyLight);
        }
        100% {
            color: var(--violetpink);
        }
    }
=======
import styled from "styled-components";
import { title_separated } from "../../../../libs/title_separated";

export const ResaltLetter = () => {
    const letters = title_separated.map((letter, index) => (
        <span key={index} className={`letter-${index}`}>{letter}</span>
    ));
    return <h1>{letters}</h1>;
};

export const GlobalLoaderContainerStyles = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #00000099;
    backdrop-filter: blur(10px);
    z-index: 2500;
    top: 0px;
    left: 0px;
    display: ${props => props.isHidden ? "none" : "flex"};
    opacity: ${props => props.isHidden ? "0" : "1"};
    visibility: ${props => props.isHidden ? "hidden" : "visible"};
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Leckerli One';
        color: var(--violetpink);
        background-color: transparent;
        font-size: 4rem;
    }

    ${title_separated.map((_, index) => `
        .letter-${index} {
            animation: showLetter 2s infinite alternate;
            animation-delay: ${index * 0.1}s;
            background-color: transparent;
        }
    `).join("")}
    
    @keyframes showLetter {
        0% {
            color:var(--violetpink);
        }
        50% {
            color: var(--heavyLight);
        }
        100% {
            color: var(--violetpink);
        }
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
`;