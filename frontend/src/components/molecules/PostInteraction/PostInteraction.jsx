import React, { useContext, useState } from 'react'
import { ItemInteractionStyles, ListInteractionStyles, PostInteractionContainerStyles } from './PostInteractionStyles'
import { FaEye, FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { handleLikeToPost } from '../../../redux/slices/postSlices/postSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';
import { useNavigate, useParams } from 'react-router-dom';
import { setStatusNotification } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import useIsAdmin from '../../../Hooks/useIsAdmin';
import MenuViewPost from '../MenuViewPost/MenuViewPost';
import useIsLike from '../../../Hooks/useLike';
import { MoonLoader } from 'react-spinners';
import { getLikes } from '../../../redux/slices/likeSlices/likeSlices';
import { getViews } from '../../../redux/slices/viewSlices/viewSlices';
import { POST } from '../../../libs/entities';


const PostInteraction = ({ counterViews, counterLikes, post, likes }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const sendLike = useIsLike();
    const params = useParams();
    const userAuth = useSelector(state => state.authSlices.user);
    const isLoadingPost = useSelector(state => state.postSlices.isLoading);
    const { isLogged } = useSelector(state => state.authSlices);
    const { setIsOpenModalWindowAuth, setIsOpen } = useContext(GlobalContext);
    const [isLike, setIsLike] = useState(isLogged ? likes.some(usr => usr === userAuth._id) : false);
    const [countLikes, setCountLikes] = useState(counterLikes);
    const isAdmin = isLogged ? useIsAdmin({ dataRecived: post[0].postBy._id, dataAuth: userAuth._id }) : false;

    const handleSendLike = async () => {
        if (!isLogged) {
            await sendLike(handleLikeToPost, params.idPost);
        } else {
            isLike ? setCountLikes(countLikes - 1) : setCountLikes(countLikes + 1)
            setIsLike(!isLike);
            await sendLike(handleLikeToPost, params.idPost);
        }
    }

    const openLikes = async () => {
        params.typeInteraction = 'likes';
        await dispatch(getLikes({ entity: POST, entityID: params.idPost }));
        navigator(`/getPostByID/${params.idPost}/${params.typeInteraction}`);
        setIsOpen(true);
    }

    const openViews = async () => {
        params.typeInteraction = 'views';
        await dispatch(getViews({ entity: POST, entityID: params.idPost }))
        navigator(`/getPostByID/${params.idPost}/${params.typeInteraction}`);
        setIsOpen(true);
    }

    return (
        <PostInteractionContainerStyles>
            <ListInteractionStyles >
                <ItemInteractionStyles >
                    <FaEye className='iconView' onClick={openViews} /><h5 onClick={openViews}>{counterViews}</h5>
                </ItemInteractionStyles>
                <ItemInteractionStyles isLike={isLike}>
                    <FaHeart className='iconHeart' onClick={handleSendLike} /><h5 onClick={openLikes}>{countLikes}</h5>
                </ItemInteractionStyles>
                <MenuViewPost
                    post={post}
                    isAdmin={isAdmin}
                    userAuth={userAuth}
                />
            </ListInteractionStyles>
        </PostInteractionContainerStyles>
    )
}

export default PostInteraction