import React, { useState } from 'react'
import { PostCommentsItemStyles } from '../../organisms/PostComments/PostCommentsStyles'
import dateTime from '../../../libs/dateTime'
import { FaHeart } from 'react-icons/fa'
import useIsLike from '../../../Hooks/useLike'
import { handleLikeComment, restarStatusPost } from '../../../redux/slices/postSlices/postSlices'
import { useDispatch, useSelector } from 'react-redux'

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
    const userAuth = useSelector(state => state.authSlices.user);
    const statusPost = useSelector(state => state.postSlices.status);
    const sendLike = useIsLike();
    const [isLike, setIsLike] = useState(likes.some(usr => usr === userAuth._id));
    const [countLikes, setCountLikes] = useState(counterLikes);
    const dispatch = useDispatch();

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
        <PostCommentsItemStyles data-id={_id} data-idpost={_idPost} isLike={isLike}>
            <img src={commentBy.thumbnail} alt="" className='imgUser'/>
            <ul className='contentComment'>
                <p className='comment'><b>{commentBy.username}</b> {comment}</p>
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