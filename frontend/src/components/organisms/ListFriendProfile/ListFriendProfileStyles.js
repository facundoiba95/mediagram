import styled from 'styled-components';

export const ListFriendProfileContainerStyles = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
font-family:'Red Hat Display';
gap: 20px;

p {
    color: white;
}
`
export const HeadSectionListFriendStyles = styled.span`
height: 70px;
width: 100%;
color: white;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;

button {
    width: 120px;
    height: 30px;
    font-weight: 600;
    color: white;
    background-color: yellowgreen;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
`
export const ListFollowersStyles = styled.ul`
width: 100%;
max-width: 500px;
height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
background-color: transparent;

h3 {
    color: white;
}
`

export const ItemFollowerStyles = styled.li`
width: 100%;
height: 60px;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 10px;
color: white;
gap:10px;
cursor: pointer;
border-radius: 5px;
position: relative;

h3 {
    background-color: transparent;
}

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: contain;
}

&:hover {
    background-color: #80808020;
}

.iconUserSelected {
    display: ${props => props.isSelected ? 'block' : 'none'};
    position: absolute;
    right: 10px;
    font-size: 2rem;
    color: white;
    background-color: crimson;
    border-radius: 50%;
}

.iconUserDefault {
    background-color: white;
    border-radius: 50%;
    color: var(--violetpink);
    width: 50px;
    height: 50px;
}
`