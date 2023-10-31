import React from 'react'
import { ItemInteractionStyles, ListInteractionStyles, PostInteractionContainerStyles } from './PostInteractionStyles'
import{ FaComment, FaEye, FaHeart } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';

const PostInteraction = ({counterViews,counterLikes}) => {
  return (
    <PostInteractionContainerStyles>
        <ListInteractionStyles>
            <ItemInteractionStyles>
                <FaEye className='iconView'/><h5>{counterViews}</h5>         {/** counterViews */}
            </ItemInteractionStyles>
            <ItemInteractionStyles>
               <FaHeart className='iconHeart'/><h5>{counterLikes}</h5>     {/** counterLikes */}
            </ItemInteractionStyles>
            <ItemInteractionStyles>
               <BsShareFill className='iconComment'/>
            </ItemInteractionStyles>
        </ListInteractionStyles>
    </PostInteractionContainerStyles>
    )
}

export default PostInteraction