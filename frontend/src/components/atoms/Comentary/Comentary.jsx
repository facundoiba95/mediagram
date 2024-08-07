import React, { useEffect } from 'react'
import { ItemCommentContentStyles, ItemCommentStyles, ItemCommentUserInfoStyles } from './ComentaryStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import dateTime from '../../../libs/dateTime'
import { TbPointFilled } from 'react-icons/tb';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Comentary = ({ comment, username, thumbnail, createdAt, _id }) => {
  const navigator = useNavigate();
  const params = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idComment = searchParams.get('idComment');

  const goToProfile = () => {
    params.username = username;
    navigator(`/profile/${params.username}`)
  }

  const isCommentSelected = idComment === _id;
  return (
    <ItemCommentStyles isCommentSelected={isCommentSelected} data-idComment={_id}>
      <ItemCommentUserInfoStyles onClick={goToProfile} isCommentSelected={isCommentSelected}>
        {
          thumbnail
            ? <img src={thumbnail} alt="image user in comment" />
            : <RiUserSmileFill className='imgProfile' />
        }
        <h5>{username}</h5>
        <small>{dateTime(createdAt)}</small>
      </ItemCommentUserInfoStyles>
      <ItemCommentContentStyles isCommentSelected={isCommentSelected}>
        <p><TbPointFilled className='divideComment' />{comment}</p>
      </ItemCommentContentStyles>
    </ItemCommentStyles>
  )
}

export default Comentary