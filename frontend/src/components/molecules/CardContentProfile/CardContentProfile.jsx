import React from 'react'
import { CardContentProfileContainerStyles } from './CardContentProfileStyles'
import { useSelector } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri';
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import IconVideo from '../../atoms/IconVideo/IconVideo';
import { VIDEO } from '../../../libs/mediaType';


const CardContentProfile = ({
  thumbnail,
  likes,
  _id,
  counterLikes,
  counterViews,
  counterComments,
  mediaType
}) => {
  const userAuth = useSelector(state => state.authSlices.user);
  const navigator = useNavigate();
  const params = useParams();
  const isLike = likes.some(usr => usr == userAuth._id)

  const goPost = () => {
    params.idPost = _id;
    navigator(`/getPostByID/${params.idPost}`)
  }

  return (
    <CardContentProfileContainerStyles onClick={goPost} isLike={isLike}>
      <img src={thumbnail} alt="img content profile user" className='imgContent' />
      {
        mediaType === VIDEO
          ? <IconVideo />
          : <></>
      }
      <span className='overlay'>
        <span className='containerIconPost'>
          <span><FaHeart className='iconHeart' />{counterLikes}</span>
          <span><FaEye className='iconView' />{counterViews}</span>
          <span><FaComment className='iconComment' />{counterComments}</span>
        </span>
      </span>
    </CardContentProfileContainerStyles>
  )
}

export default CardContentProfile



{/* <CardContentProfileContainerStyles onClick={goPost}>
<img src={thumbnail} alt="img content profile user" className='imgContent'/>
<DescriptionContentProfileStyles isLike={isLike}>
  { renderImgProfile()  }
  <span>
    <p>{description ? description : <></>}</p>
  </span>
  <span className='containerIconPost'>
      <FaEye className='iconView'/>
      <FaHeart className='iconHeart'/>
      <FaComment className='iconComment'/>
  </span>
</DescriptionContentProfileStyles>
<div className='overlay'>
  <CgArrowsExpandRight className='iconExpandImage'/>
</div>
</CardContentProfileContainerStyles> */}