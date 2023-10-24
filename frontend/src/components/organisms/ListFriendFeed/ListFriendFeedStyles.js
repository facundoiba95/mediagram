import styled from 'styled-components';

export const ListFriendFeedContainerStyles = styled.div`
width:100%;
max-width:800px;
height:100%;
background-color: transparent;
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
    transition: all 0.2s ease-in-out;
    top:-5px;
    border-radius: 5px;
}

&:hover {
    small {
        opacity: 1;
        visibility: visible;
    }
}
`

export const ListFriendBoxContainerStyles = styled.ul`
width: 100%;
height: 170px;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
overflow-x: scroll;
font-family: 'Red Hat Display';
padding: 5px;
background-color: transparent;
`

export const ListFriendItemStyles = styled.li`
width:100%;
height: auto;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 8px;
border-radius: 5px;
cursor: pointer;
transition: all 0.1s ease-in-out;
background-color: ${ props => props.isNewAdded ? 'yellowgreen' : 'transparent' };
position: relative;
gap:5px;

h4 {
background-color: transparent;
}

img {
    width:100px;
    height:100px;
    border-radius: 50%;
    background-color: transparent;
}

.unviewedPostCounter {
    position: absolute;
    top:20px;
    right:5px;
    padding:2px;
    border-radius: 50%;
    width:20px;
    height:20px;
    text-align: center;
    background-color:yellow;
    font-weight: 900;
}

.isNewAdded {
    display: ${ props => props.isNewAdded ? 'block':'none' };
    position: absolute;
    top:-5px;
    right:50%;
    transform: translate(50%);
    background-color: green;
    font-weight: 900;
    border-radius:5px;
    color: white;
    padding:2px 3px 2px 3px;
    z-index: 2000;
}


&:hover {
    transform: scale(1.1);
}
`