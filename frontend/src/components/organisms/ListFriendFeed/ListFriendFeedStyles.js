import styled from 'styled-components';

export const ListFriendFeedContainerStyles = styled.div`
width:100%;
max-width:800px;
height:100%;

@media (max-width: 490px) {
    width: 300px;
    overflow-x: hidden;    
}
`

export const TitleListFriendFeedStyles = styled.h3`
width:100%;
height:auto;
font-family: 'Red Hat Display';
padding: 10px;
background-color: transparent;
margin-top:20px;
position: relative;

small {
    width:auto;
    position: absolute;
    padding:2px 5px 2px 5px;
    opacity: 0;
    visibility: hidden;
    top:-5px;
    border-radius: 5px;
}

&:hover {
    small {
        opacity: 1;
        visibility: visible;
    }
}

@media (max-width: 490px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    top:${props => props.topScroll ? '0px' : '-40px'};
    transition: all 200ms ease-in-out;
    margin-top: ${props => props.topScroll ? '0px' : '-20px'};
    height: ${props => props.topScroll ? '40px' : '0px'}; 
    max-height:40px;
    overflow: hidden;
}
`

export const ListFriendBoxContainerStyles = styled.ul`
width: 100%;
height: 170px;
display: flex;
justify-content: flex-start;
align-items: center;
overflow-x: scroll;
font-family: 'Red Hat Display';
padding: 5px;
background-color: transparent;

@media (max-width: 490px) {
    overflow-y: hidden;
    height: 100px;
}
`

export const ListFriendItemStyles = styled.li`
width: 100%;
max-width: 150px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 8px;
border-radius: 5px;
cursor: pointer;
transition: all 0.1s ease-in-out;
background-color: ${props => props.isNewAdded ? 'yellowgreen' : 'transparent'};
position: relative;
gap:5px;

h4 {
    font-size:1.2rem;
    font-weight: 900;
    background-color: transparent;
}

img {
    width:100px;
    height:100px;
    background-color: transparent;
    background: linear-gradient(to right, var(--violetpink), white) border-box;
    border: 4px solid transparent;
    border-radius: 50%;
}

.iconDefaultProfile {
    width: 100px;
    height: 100px;
    background-color: white;
    color: var(--violetpink);
    border-radius: 50%;
}

.unviewedPostCounter {
    position: absolute;
    top:10px;
    right:10px;
    padding:2px;
    border-radius: 50%;
    width:20px;
    height:20px;
    text-align: center;
    background-color:yellow;
    font-weight: 900;
    color: black;
}

.isNewAdded {
    display: ${props => props.isNewAdded ? 'block' : 'none'};
    position: absolute;
    top:-5px;
    right:50%;
    transform: translate(50%);
    background-color: green;
    font-weight: 900;
    border-radius:5px;
    color: white;
    padding:2px 3px 2px 3px;
}

@media (max-width: 490px) {
    gap: 0px;
    background-color: transparent;
    width: auto;
    
    img {
        width:70px;
        height: 70px;
    }

    .iconDefaultProfile {
        width: 70px;
        height: 70px;
    }

    h4 {
        font-size:1rem;
    }

    .unviewedPostCounter {
    position: absolute;
    top:10px;
    right:15px;
    width: 15px;
    height: 15px;
    padding: 0px;
}
}
`