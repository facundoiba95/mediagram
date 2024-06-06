import React from 'react'
import { CardContentProfileContainerStyles, DescriptionContentProfileStyles, ThumbnailProfileStyles } from './CardContentProfileStyles'
import { useDispatch, useSelector } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri';
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { CgArrowsExpandRight} from 'react-icons/cg';
import { useNavigate, useParams } from 'react-router-dom';
import { BsXCircle } from 'react-icons/bs';


const CardContentProfile = ({
  thumbnail,
  typePost,
  postBy,
  likes,
  _id,
  description
}) => {
  const user = useSelector( state => state.userSlices.userSelected );
  const userAuth = useSelector( state => state.authSlices.user );
  const navigator = useNavigate();
  const params = useParams();
  const { imgProfile } = user[0];
  const isLike = likes.some(usr => usr._id == userAuth._id)

  const renderImgProfile = () => {
    if(imgProfile.length){
      return( 
        <ThumbnailProfileStyles>
          <img src={imgProfile} alt="" />
        </ThumbnailProfileStyles>
      )
    } else {
      return (
        <ThumbnailProfileStyles>
          <RiUserSmileFill className='imgProfile'/>
        </ThumbnailProfileStyles>
      )
    }    
  }

  const goPost = () => {
    params.idPost = _id;
    navigator(`/getPostByID/${params.idPost}`)
  }

  return (
    <CardContentProfileContainerStyles onClick={goPost}>
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
    </CardContentProfileContainerStyles>
    )
}

export default CardContentProfile