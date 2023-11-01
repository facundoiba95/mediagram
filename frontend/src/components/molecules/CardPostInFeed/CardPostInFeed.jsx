import React from 'react'
import { CardPostInFeedContainerStyles, FootCardPostInProfileStyles, HeadCardPostInProfileStyles } from './CardPostInFeedStyles'
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { RiUserSmileFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByID, handleLikeToPost } from '../../../redux/slices/postSlices/postSlices';

const CardPostInFeed = ({
  _id,
  imgProfile,
  username,
  thumbnail,
  description,
  counterViews,
  counterLikes,
  counterComments,
  likedPost
}) => {

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const params = useParams();
  const userAuth = useSelector( state => state.authSlices.user );


  const goToProfile = () => {
    params.username = username;
    navigator(`/profile/${params.username}`);
}
  
  const goPost = async () => {
    params.idPost = _id;
    navigator(`/getPostByID/${params.idPost}`);
  }


  const sendLike = () => {
      const newLike = {
          username: userAuth.username,
          thumbnail: userAuth.thumbnail,
          _id: userAuth._id,
          idPost: _id,
          postedBy: { 
            username, 
            thumbnail: imgProfile,
            _id 
          }
      };

      dispatch(handleLikeToPost(newLike));
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
        <FootCardPostInProfileStyles isDescription={description ? description.length : false} likedPost={likedPost}>
          <span className='containerIconPost' onClick={goPost}>
            <div><FaEye className='iconView'/><h5>{counterViews}</h5></div>         {/** counterViews */}
            <div><FaHeart className='iconHeart'/><h5>{counterLikes}</h5></div>       {/** counterLikes */}
            <div><FaComment className='iconComment'/><h5>{counterComments}</h5></div>   {/** counterComments */}
          </span>
          <span className='containerDescription' onClick={goPost}>
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