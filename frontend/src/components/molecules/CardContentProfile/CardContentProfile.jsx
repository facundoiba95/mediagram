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
  likedPost,
  description
}) => {
  const user = useSelector( state => state.userSlices.userFiltered );
  const navigator = useNavigate();
  const params = useParams();
  const { imgProfile } = user[0];

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
    <CardContentProfileContainerStyles>
        <img src={thumbnail} alt="img content profile user" className='imgContent'/>
        <DescriptionContentProfileStyles likedPost={likedPost}>
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
        <div className='overlay' onClick={() => goPost()}>
          <CgArrowsExpandRight className='iconExpandImage'/>
        </div>
    </CardContentProfileContainerStyles>
    )
}

export default CardContentProfile