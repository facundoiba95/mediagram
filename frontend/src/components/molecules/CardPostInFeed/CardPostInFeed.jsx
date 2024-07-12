import React, { useEffect, useRef, useState } from 'react'
import { CardPostInFeedContainerStyles, FootCardPostInProfileStyles, HeadCardPostInProfileStyles } from './CardPostInFeedStyles'
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { RiUserSmileFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByID, handleLikeToPost } from '../../../redux/slices/postSlices/postSlices';
import { MdLocationOn } from 'react-icons/md';
import { IMAGE, VIDEO } from '../../../libs/mediaType';
import useIsVisible from '../../../Hooks/useIsVisible';
import VideoPlayer from '../../organisms/VideoPlayer/VideoPlayer';
import useIsLike from '../../../Hooks/useLike';

const CardPostInFeed = ({
  _id,
  imgProfile,
  username,
  thumbnail,
  description,
  counterViews,
  counterLikes,
  counterComments,
  likes,
  location,
  referTo,
  mediaType,
  media_url,
  textContent
}) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const params = useParams();
  const sendLike = useIsLike();
  const userAuth = useSelector(state => state.authSlices.user);
  const cardPost_ref = useRef();
  const isVideo = mediaType === VIDEO;
  const playVideo = useIsVisible({ refElement: cardPost_ref, optionalCondition: isVideo });
  const [ isLike, setIsLike ] = useState(likes.some(usr => usr === userAuth._id));
  const [ countLikes, setCountLikes ] = useState(counterLikes);
  
  const goToProfile = (e) => {
    const valueUsername = e.currentTarget.dataset.username;
    params.username = valueUsername;
    navigator(`/profile/${params.username}`);
  }

  const goPost = async () => {
    params.idPost = _id;
    navigator(`/getPostByID/${params.idPost}`);
  }

  const renderReferTo = () => {
    return referTo.map((item, index) => (
      <small data-username={item.username} onClick={(e) => goToProfile(e)} key={index}>{`@${item.username}`}</small>
    ))
  }

  const renderMedia = () => {
    if (mediaType === VIDEO) {
      return (
        <VideoPlayer media_url={media_url} playVideo={playVideo} isFeed={true} />
      )
    } else if (mediaType === IMAGE) {
      return (
        <img src={media_url} alt="" onClick={goPost} loading='lazy' />
      )
    } else {
      return (<></>)
    }
  }

  const renderText = () => {
    if(textContent) {
      return (
        <p>{textContent}</p>
      )
    } else {
      return (<></>)
    }
  }

  const handleLike = async () => {
    isLike ? setCountLikes(countLikes - 1) : setCountLikes(countLikes + 1);
    setIsLike(!isLike);
    await sendLike(handleLikeToPost, _id);    
  }

  return (
    <CardPostInFeedContainerStyles ref={cardPost_ref}>
      <HeadCardPostInProfileStyles>
        {
          imgProfile
            ? <img src={imgProfile} />
            : <RiUserSmileFill className='imgProfile' />
        }
        <div>
          <h4 data-username={username} onClick={(e) => goToProfile(e)}>{username}</h4>
          <span>
            {
              referTo.length
                ? <><small>Menciones: </small>{renderReferTo()}</>
                : <></>
            }
          </span>
        </div>
      </HeadCardPostInProfileStyles>
      {renderMedia()}
      {renderText()}
      <FootCardPostInProfileStyles isDescription={description ? description.length : false} isLike={isLike}>
        <span className='containerIconPost'>
          <div><FaEye className='iconView' /><h5>{counterViews}</h5></div>     
          <div><FaHeart className='iconHeart' onClick={handleLike}/><h5>{countLikes}</h5></div> 
          <div><FaComment className='iconComment' /><h5>{counterComments}</h5></div>
          {
            location
              ? <div className='containerLocation'><MdLocationOn className='iconLocation' /><h5>{location}</h5></div>
              : <></>
          }
        </span>
        <span className='containerDescription' onClick={goPost}>
          {
            description ?
              <>
                <h4>{username}</h4>
                <p>{description}</p>
              </>
              : <></>
          }
        </span>
        {/* <small>Ver post completo</small> */}
      </FootCardPostInProfileStyles>
    </CardPostInFeedContainerStyles>
  )
}

export default CardPostInFeed