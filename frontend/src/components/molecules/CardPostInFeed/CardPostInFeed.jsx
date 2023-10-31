import React from 'react'
import { CardPostInFeedContainerStyles, FootCardPostInProfileStyles, HeadCardPostInProfileStyles } from './CardPostInFeedStyles'
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { RiUserSmileFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByID } from '../../../redux/slices/postSlices/postSlices';

const CardPostInFeed = ({
  _id,
  imgProfile,
  username,
  thumbnail,
  description,
  counterViews,
  counterLikes,
  counterComments
}) => {

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const params = useParams();

  const goToProfile = () => {
    params.username = username;
    navigator(`/profile/${params.username}`);
}
  
  const goPost = async () => {
    params.idPost = _id;
    navigator(`/getPostByID/${params.idPost}`);
  }

  return (
    <CardPostInFeedContainerStyles>
        <HeadCardPostInProfileStyles onClick={goToProfile}>
          {
            imgProfile
            ? <img src={imgProfile} />
             : <RiUserSmileFill className='imgProfile'/>
          }
          <h4>{username}</h4>
        </HeadCardPostInProfileStyles>
        <img src={thumbnail} alt="" onClick={goPost} loading='lazy'/>
        <FootCardPostInProfileStyles isDescription={description ? description.length : false}>
          <span className='containerIconPost'>
            <div><FaEye className='iconView'/><h5>{counterViews}</h5></div>         {/** counterViews */}
            <div><FaHeart className='iconHeart'/><h5>{counterLikes}</h5></div>       {/** counterLikes */}
            <div><FaComment className='iconComment'/><h5>{counterComments}</h5></div>   {/** counterComments */}
          </span>
          <span className='containerDescription'>
            {
              description ?
              <>
                <h4>{ username }</h4>
                <p>{ description }</p>
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