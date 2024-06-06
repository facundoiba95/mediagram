import React from 'react'
import { CardPostInFeedContainerStyles, FootCardPostInProfileStyles, HeadCardPostInProfileStyles } from './CardPostInFeedStyles'
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { RiUserSmileFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByID, handleLikeToPost } from '../../../redux/slices/postSlices/postSlices';
import { MdLocationOn } from 'react-icons/md';

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
  referTo
}) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const params = useParams();
  const userAuth = useSelector(state => state.authSlices.user);
  const isLike = likes.some(usr => usr._id == userAuth._id)


  const goToProfile = (e) => {
    const valueUsername = e.target.dataset.username;
    params.username = valueUsername;
    navigator(`/profile/${params.username}`);
  }

  const goPost = async () => {
    params.idPost = _id;
    navigator(`/getPostByID/${params.idPost}`);
  }

  const renderReferTo = () => {
    return referTo.map(item => {
      return (
        <small data-username={item.username} onClick={(e) => goToProfile(e)}>{`@${item.username}`}</small>
      )
    })
  }
  return (
    <CardPostInFeedContainerStyles>
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
      <img src={thumbnail} alt="" onClick={goPost} loading='lazy' />
      <FootCardPostInProfileStyles isDescription={description ? description.length : false} isLike={isLike}>
        <span className='containerIconPost' onClick={goPost}>
          <div><FaEye className='iconView' /><h5>{counterViews}</h5></div>         {/** counterViews */}
          <div><FaHeart className='iconHeart' /><h5>{counterLikes}</h5></div>       {/** counterLikes */}
          <div><FaComment className='iconComment' /><h5>{counterComments}</h5></div>   {/** counterComments */}
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
        <small>Ver post completo</small>
      </FootCardPostInProfileStyles>
    </CardPostInFeedContainerStyles>
  )
}

export default CardPostInFeed