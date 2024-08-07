import React from 'react'
import { CardPostProfileTextContainerStyles } from './CardPostProfileTextStyles'
import { CardPostTextStyles } from '../../../molecules/PostInExploreSection/PostInExploreSectionStyles'
import PostTextContent from '../../../molecules/PostTextContent/PostTextContent'
import ReactionsInPost from '../../../molecules/ReactionsInPost/ReactionsInPost'
import dateTime from '../../../../libs/dateTime'

const CardPostProfileText = ({
  thumbnail,
  username,
  counterComments,
  counterLikes,
  counterViews,
  textContent,
  goPost,
  isLike,
  createdAt
}) => {
  return (
    <CardPostTextStyles onClick={goPost}>
      <span>
        <img src={thumbnail} alt="" className="imgUser" />
        <b>{username}</b>
      </span>
      <h5>{dateTime(createdAt)}</h5>
      <PostTextContent textContent={textContent} />
      <ReactionsInPost
        counterLikes={counterLikes}
        counterViews={counterViews}
        counterComments={counterComments}
        isLike={isLike}
      />
    </CardPostTextStyles>
  )
}

export default CardPostProfileText