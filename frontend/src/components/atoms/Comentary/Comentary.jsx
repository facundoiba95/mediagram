import React from 'react'
import { ItemCommentContentStyles, ItemCommentStyles, ItemCommentUserInfoStyles } from './ComentaryStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import dateTime from '../../../libs/dateTime'
import { TbPointFilled } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';

const Comentary = ({content, username, thumbnail, createdAt }) => { 
  const navigator = useNavigate();
  const params = useParams();

  const goToProfile = () => {
    params.username = username;
    navigator(`/profile/${params.username}`)
  }

  return (
    <ItemCommentStyles>
      <ItemCommentUserInfoStyles onClick={goToProfile}>
        {
          thumbnail
          ? <img src={thumbnail} alt="image user in comment" /> 
          : <RiUserSmileFill className='imgProfile'/>
        }
        <h5>{username}</h5>
        <small>{ dateTime(new Date(createdAt))}</small>
      </ItemCommentUserInfoStyles>
      <ItemCommentContentStyles>
      <p><TbPointFilled className='divideComment'/>{content}</p>
      </ItemCommentContentStyles>
    </ItemCommentStyles>
    )
}

export default Comentary