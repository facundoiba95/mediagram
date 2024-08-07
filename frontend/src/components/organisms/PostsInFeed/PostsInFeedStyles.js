import styled from 'styled-components';

export const PostsInFeedContainerStyles = styled.section`
  width: 100%;
  height: auto; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (max-width: 490px) {
    padding-top: 10px;
    gap: 25px;
  }
`

export const TitlePostsInFeedStyles = styled.h3`
width:100%;
height:auto;
font-family: 'Red Hat Display';
padding: 10px;
position: sticky;
top: 0;
`