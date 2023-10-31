import React from 'react'
import { ItemCommentContentStyles, ItemCommentStyles, ItemCommentUserInfoStyles } from './ComentaryStyles'
import { RiUserSmileFill } from 'react-icons/ri'

const Comentary = ({content, username, thumbnail }) => {
  return (
    <ItemCommentStyles>
      <ItemCommentUserInfoStyles>
        {
          thumbnail
          ? <img src={thumbnail} alt="image user in comment" /> 
          : <RiUserSmileFill className='imgProfile'/>
        }
        <h5>{username}</h5>
      </ItemCommentUserInfoStyles>
      <ItemCommentContentStyles>
      <p>{content}</p>
      </ItemCommentContentStyles>
    </ItemCommentStyles>
    )
}

export default Comentary