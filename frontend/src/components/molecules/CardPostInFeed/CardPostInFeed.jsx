import React from 'react'
import { CardPostInFeedContainerStyles, FootCardPostInProfileStyles, HeadCardPostInProfileStyles } from './CardPostInFeedStyles'
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';
import { RiUserSmileFill } from 'react-icons/ri';


const CardPostInFeed = ({
  imgProfile,
  username,
  thumbnail,
  description,
}) => {
  return (
    <CardPostInFeedContainerStyles>
            <HeadCardPostInProfileStyles>
              {
                imgProfile
                ? <img src={imgProfile}/>
                : <RiUserSmileFill className='imgProfile'/>
              }
              <h4>{username}</h4>
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