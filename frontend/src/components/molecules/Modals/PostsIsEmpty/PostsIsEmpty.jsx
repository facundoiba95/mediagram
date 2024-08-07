import React from 'react';
import { ImFileEmpty } from 'react-icons/im';
import { PostsIsEmptyContainerStyles } from './PostsIsEmptyStyles';

const PostsIsEmpty = () => {
  return (
    <PostsIsEmptyContainerStyles>
        <ImFileEmpty className='iconEmptyContent'/>
        <h2>Aún no hay publicaciones en este perfil.</h2>
    </PostsIsEmptyContainerStyles>
  )
}

export default PostsIsEmpty