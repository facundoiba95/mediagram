<<<<<<< HEAD
import styled from "styled-components";

export const ContainerSwipeHistoryStyles = styled.div`
width: 100%;
max-width: 500px;
height: 90px;
display: flex;
opacity: ${ props => props.isHidden ? "0" : "1" };
visibility: ${ props => props.isHidden ? "hidden" : "visible" };
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
right: 50%;
transform: translate(50%, -50%);
z-index: 1500;
color: white;
font-family: "Red Hat Display";
background-color: transparent;
transition: all 200ms ease-in-out;

b, .iconSwipe {
    background-color: transparent;
}

b {
    font-size: 1.5rem;
}

.iconSwipe {
    font-size: 3rem;
}
=======
import styled from "styled-components";

export const ContainerSwipeHistoryStyles = styled.div`
width: 100%;
max-width: 500px;
height: 90px;
display: flex;
opacity: ${ props => props.isHidden ? "0" : "1" };
visibility: ${ props => props.isHidden ? "hidden" : "visible" };
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
right: 50%;
transform: translate(50%, -50%);
z-index: 1500;
color: white;
font-family: "Red Hat Display";
background-color: transparent;
transition: all 200ms ease-in-out;

b, .iconSwipe {
    background-color: transparent;
}

b {
    font-size: 1.5rem;
}

.iconSwipe {
    font-size: 3rem;
}
>>>>>>> b3173dc1 (first commit in Ubuntu)
`