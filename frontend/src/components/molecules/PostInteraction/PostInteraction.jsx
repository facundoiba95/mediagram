import React from 'react'
import { ItemInteractionStyles, ListInteractionStyles, PostInteractionContainerStyles } from './PostInteractionStyles'
import{ FaComment, FaEye, FaHeart } from 'react-icons/fa';


const PostInteraction = () => {
  return (
    <PostInteractionContainerStyles>
        <ListInteractionStyles>
            <ItemInteractionStyles>
                <FaEye className='iconView'/><h5>22</h5>         {/** counterViews */}
            </ItemInteractionStyles>
            <ItemInteractionStyles>
               <FaHeart className='iconHeart'/><h5>4</h5>     {/** counterLikes */}
            </ItemInteractionStyles>
            <ItemInteractionStyles>
               <FaComment className='iconComment'/><h5>6</h5>
            </ItemInteractionStyles>
        </ListInteractionStyles>
    </PostInteractionContainerStyles>
    )
}

export default PostInteraction