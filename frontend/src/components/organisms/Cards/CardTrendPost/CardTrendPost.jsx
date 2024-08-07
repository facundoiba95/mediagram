import React from 'react'
import { TrendPostItemStyles } from '../../../molecules/TrendPosts/TrendPostsStyles'
import { useNavigate, useParams } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { VIDEO } from '../../../../libs/mediaType';
import IconVideo from '../../../atoms/IconVideo/IconVideo';

const CardTrendPost = ({ thumbnail, _id, postBy, counterLikes, counterViews, mediaType, textContent }) => {
  const navigator = useNavigate();
  const params = useParams();

  const user =  {
    username: postBy.username,
    thumbnail: postBy.thumbnail,
    isPrivate: postBy.isPrivate,
  }

  const goPost = (e) => {
    const idPost = e.currentTarget.dataset.idpost;
    params.idPost = idPost;
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
    navigator(`/getPostByID/${params.idPost}`);
  }

  const renderTextPost = () => {
    return (
      <span className='postTypeText'>
        <img src={user.thumbnail} alt="" />
        <b>{user.username}</b>
        <span><FaEye className='iconView' />{counterViews}</span>
        <p>Ver publicación</p>
      </span>
    )
  }

  const renderMediaPost = () => {
    return (
      <>
        {
          mediaType === VIDEO
            ? <IconVideo />
            : <></>
        }
        <span className='overlay'>
          <span><FaEye className='iconView' />{counterViews}</span>
        </span>
        <img src={thumbnail} alt="" />
      </>
    )
  }

  return (
    <TrendPostItemStyles data-idpost={_id} onClick={(e) => goPost(e)}>
      {
        textContent ? renderTextPost() : renderMediaPost()
      }
    </TrendPostItemStyles>
  )
}

export default CardTrendPost;