import React from 'react'
import { CardPostInExploreStyles } from '../PostInExploreSection/PostInExploreSectionStyles'
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye, FaHeart } from 'react-icons/fa';

const CardPostInExplore = ({
  title,
  heightCard,
  thumbnail,
  postBy,
  tags,
  counterLikes,
  counterViews,
  posts,
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
      <span className='overflow' >
        <span><FaHeart className='iconHeart' />{counterLikes}</span>
        <span><FaEye className='iconView' />{counterViews}</span>
      </span>
      <img src={thumbnail} alt="" />
    </CardPostInExploreStyles>
  )
}

export default CardPostInExplore