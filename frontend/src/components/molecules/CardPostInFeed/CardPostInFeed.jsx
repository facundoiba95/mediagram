import React from 'react'
import { CardPostInFeedContainerStyles, FootCardPostInProfileStyles, HeadCardPostInProfileStyles } from './CardPostInFeedStyles'
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { RiUserSmileFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { handleIsFollowing, selectUser } from '../../../redux/slices/userSlices/userSlices';
import { useNavigate, useParams } from 'react-router-dom';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';
import { getPosts } from '../../../redux/slices/postSlices/postSlices';

const CardPostInFeed = ({
  imgProfile,
  username,
  thumbnail,
  description,
}) => {

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const isLogged = useSelector( state => state.authSlices.isLogged );
  const params = useParams();

  const goToProfile = async (e) => {
    await dispatch(validateSession());
    if(isLogged){
        params.username = username;
        navigator(`/profile/${params.username}`);
        await dispatch(selectUser(params.username));
        dispatch(handleIsFollowing(params.username));
        await dispatch(getPosts(params.username));
        await dispatch(restartUserFound());
    } else {
        navigator('/');
    }
}

  return (
    <CardPostInFeedContainerStyles>
            <HeadCardPostInProfileStyles>
              {
                imgProfile
                ? <img src={imgProfile} onClick={ () => goToProfile()}/>
                : <RiUserSmileFill className='imgProfile' onClick={ () => goToProfile()}/>
              }
              <h4 onClick={ () => goToProfile()}>{username}</h4>
            </HeadCardPostInProfileStyles>
            <img src={thumbnail} alt="" />
            <FootCardPostInProfileStyles isDescription={description ? description.length : false}>
              <span className='containerIconPost'>
                <div><FaEye className='iconView'/><h5>22</h5></div>         {/** counterViews */}
                <div><FaHeart className='iconHeart'/><h5>4</h5></div>       {/** counterLikes */}
                <div><FaComment className='iconComment'/><h5>6</h5></div>   {/** counterComments */}
              </span>
              <span className='containerDescription'>
                {
                  description ?
                  <>
                    <h4>{ username }</h4>
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