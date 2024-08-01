import React, { useEffect } from 'react'
import { CardPostInExploreStyles } from '../../../molecules/PostInExploreSection/PostInExploreSectionStyles'
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye, FaHeart } from 'react-icons/fa';
import IconVideo from '../../../atoms/IconVideo/IconVideo';
import { VIDEO } from '../../../../libs/mediaType';

const CardPostInExplore = ({
  heightCard,
  thumbnail,
  counterLikes,
  counterViews,
  posts,
  mediaType,
  _id
}) => {
  const navigator = useNavigate();
  const params = useParams();

  const goPost = (e) => {
    const idPost = e.currentTarget.dataset.id;
    params.idPost = idPost;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigator(`/getPostByID/${params.idPost}`)
  }

  return (
    <CardPostInExploreStyles heightCard={heightCard} posts={posts.length} data-id={_id} onClick={goPost}>
      {
        mediaType === VIDEO
          ? <IconVideo />
          : <></>
      }
      <span className='overlay' >
        <span><FaHeart className='iconHeart' />{counterLikes}</span>
        <span><FaEye className='iconView' />{counterViews}</span>
      </span>
      <img src={thumbnail} alt="" />
    </CardPostInExploreStyles>
  )
}

export default CardPostInExplore