import React, { useState } from 'react'
import { PostCommentsItemStyles } from '../../organisms/PostComments/PostCommentsStyles'
import dateTime from '../../../libs/dateTime'
import { FaHeart } from 'react-icons/fa'
import useIsLike from '../../../Hooks/useLike'
import { handleLikeComment, restarStatusPost } from '../../../redux/slices/postSlices/postSlices'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ItemCommentPost = ({
    _idPost,
    _id,
    commentBy,
    comment,
    counterLikes,
    replies,
    likes,
    createdAt
}) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();
    const location = useLocation();

    const userAuth = useSelector(state => state.authSlices.user);
    const statusPost = useSelector(state => state.postSlices.status);
    const sendLike = useIsLike();
    const [isLike, setIsLike] = useState(likes.some(usr => usr.idUser === userAuth._id));
    const [countLikes, setCountLikes] = useState(counterLikes);
    const searchParams = new URLSearchParams(location.search);
    const idComment = searchParams.get('idComment');
  
    const goToProfile = () => {
      params.username = commentBy.username;
      navigator(`/profile/${params.username}`)
    }
  
    const isCommentSelected = idComment === _id;

    const handleLike = async () => {
        await dispatch(restarStatusPost())
        await sendLike(handleLikeComment, _id, commentBy.username, isLike);

        if(statusPost !== 200) {
            alert("Ocurrio un error al agregar like al post.")
            return;
        } else {
            isLike ? setCountLikes(countLikes - 1) : setCountLikes(countLikes + 1);
            setIsLike(!isLike);
            return;
        }
    }

    return (
        <PostCommentsItemStyles data-id={_id} data-idpost={_idPost} isLike={isLike} data-idComment={_id} isCommentSelected={isCommentSelected}>
            <img src={commentBy.thumbnail} alt="" className='imgUser' onClick={goToProfile}/>
            <ul className='contentComment'>
                <p className='comment'><b onClick={goToProfile}>{commentBy.username}</b> {comment}</p>
                <li className='infoComment'>
                    <small>{dateTime(createdAt)}</small>
                    <div>
                        <FaHeart className='iconHeart' onClick={handleLike} />
                        <h5>{countLikes}</h5>
                    </div>
                </li>
            </ul>
        </PostCommentsItemStyles>
    )
}

export default ItemCommentPost