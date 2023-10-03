import React from 'react'
import { CardContentProfileContainerStyles, DescriptionContentProfileStyles, ThumbnailProfileStyles } from './CardContentProfileStyles'
import { useSelector } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri';
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { CgArrowsExpandRight} from 'react-icons/cg';
import { Box, Skeleton } from '@mui/material';

const CardContentProfile = ({
  thumbnail,
  typePost,
  postBy,
  likes,
  description
}) => {
  const user = useSelector( state => state.userSlices.user );
  const isLoading = useSelector( state => state.postSlices.isLoading );
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

  return (
    <CardContentProfileContainerStyles>
        <img src={thumbnail} alt="img content profile user" className='imgContent'/>
        <DescriptionContentProfileStyles>
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