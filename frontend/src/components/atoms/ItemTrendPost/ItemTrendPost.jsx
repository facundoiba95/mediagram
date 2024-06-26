import React from 'react'
import { TrendPostItemStyles } from '../../molecules/TrendPosts/TrendPostsStyles'
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const ItemTrendPost = ({ thumbnail, _id, postBy, counterLikes, counterViews }) => {
  const navigator = useNavigate();
  const params = useParams();

  const goPost = (e) => {
    const idPost = e.currentTarget.dataset.idpost;
    params.idPost = idPost;
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
    navigator(`/getPostByID/${params.idPost}`);
  }

  return (
    <TrendPostItemStyles data-idpost={_id} onClick={(e) => goPost(e)}>
      <span className='overlay'>
        <span><FaEye className='iconView' />{counterViews}</span>
      </span>
      <img src={thumbnail} alt="" />
    </TrendPostItemStyles>
  )
}

export default ItemTrendPost