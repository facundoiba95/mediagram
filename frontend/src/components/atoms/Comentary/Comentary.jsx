import React from 'react'
import { ItemCommentContentStyles, ItemCommentStyles, ItemCommentUserInfoStyles } from './ComentaryStyles'

const Comentary = ({content}) => {
  return (
    <ItemCommentStyles>
      <ItemCommentUserInfoStyles>
        <img src="https://fotografias.lasexta.com/clipping/cmsimages01/2022/12/18/795D4D02-0574-4C12-BED5-0EB88075290F/leo-messi-mundial_98.jpg?crop=1200,675,x0,y49&width=1900&height=1069&optimize=low&format=webply" alt="" />
        <h5>Username</h5>
      </ItemCommentUserInfoStyles>
      <ItemCommentContentStyles>
      <p>{content}</p>
      </ItemCommentContentStyles>
    </ItemCommentStyles>
    )
}

export default Comentary