<<<<<<< HEAD
import React from 'react'
import { TrendPostItemStyles } from '../../molecules/TrendPosts/TrendPostsStyles'
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { VIDEO } from '../../../libs/mediaType';
import IconVideo from '../IconVideo/IconVideo';

const ItemTrendPost = ({ thumbnail, _id, postBy, counterLikes, counterViews, mediaType }) => {
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
      {
        mediaType === VIDEO
        ? <IconVideo/>
        : <></>
      }
      <span className='overlay'>
        <span><FaEye className='iconView' />{counterViews}</span>
      </span>
      <img src={thumbnail} alt="" />
    </TrendPostItemStyles>
  )
}

=======
import React from 'react'
import { TrendPostItemStyles } from '../../molecules/TrendPosts/TrendPostsStyles'
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { VIDEO } from '../../../libs/mediaType';
import IconVideo from '../IconVideo/IconVideo';

const ItemTrendPost = ({ thumbnail, _id, postBy, counterLikes, counterViews, mediaType }) => {
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
      {
        mediaType === VIDEO
        ? <IconVideo/>
        : <></>
      }
      <span className='overlay'>
        <span><FaEye className='iconView' />{counterViews}</span>
      </span>
      <img src={thumbnail} alt="" />
    </TrendPostItemStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ItemTrendPost