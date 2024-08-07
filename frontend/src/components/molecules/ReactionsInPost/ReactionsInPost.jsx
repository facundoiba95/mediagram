import React from 'react'
import { FaComment, FaEye, FaHeart } from 'react-icons/fa';
import { ReactionsInPostItemStyles, ReactionsInPostWrapperStyles } from './ReactionsInPostStyles';

const ReactionsInPost = ({
  counterViews, 
  counterLikes, 
  counterComments, 
  isLike, 
  handleSendLike,
  handleOpenViews,
  handleOpenLikes
}) => {


  return (
    <ReactionsInPostWrapperStyles>
        <ReactionsInPostItemStyles>
            <FaComment className='iconReaction'/>
            <b>{counterComments}</b>
        </ReactionsInPostItemStyles>

        <ReactionsInPostItemStyles onClick={() => handleOpenViews()}>
            <FaEye className='iconReaction'/>
            <b>{counterViews}</b>
        </ReactionsInPostItemStyles>
       
        <ReactionsInPostItemStyles isLike={isLike}>
            <FaHeart className='iconReaction' onClick={() => handleSendLike()}/>
            <b onClick={() => handleOpenLikes()}>{counterLikes}</b>
        </ReactionsInPostItemStyles>
    </ReactionsInPostWrapperStyles>
  )
}

export default ReactionsInPost