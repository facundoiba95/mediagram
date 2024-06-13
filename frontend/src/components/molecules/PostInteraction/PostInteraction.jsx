import React, { useContext } from 'react'
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

const PostInteraction = ({ counterViews, counterLikes, post, likes }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();
    const userAuth = useSelector(state => state.authSlices.user);
    const { isLogged } = useSelector(state => state.authSlices);
    const { setIsOpenModalWindowAuth, setIsOpen } = useContext(GlobalContext);
    const isLike = isLogged ? likes.some(usr => usr._id == userAuth._id) : false;
    const isAdmin = isLogged ? useIsAdmin({ dataRecived: post[0].postBy._id, dataAuth: userAuth._id }) : false;


    const sendLike = async () => {
        const result = await dispatch(validateSession());

        if (await result.payload.status === 200) {
            const newLike = {
                username: userAuth.username,
                thumbnail: userAuth.thumbnail,
                _id: userAuth._id,
                idPost: post[0]._id,
                postBy: post[0].postBy
            };

            await dispatch(handleLikeToPost(newLike));
            await dispatch(setStatusNotification());
        } else {
            setIsOpenModalWindowAuth(true)
            return;
        }
    }

    const openLikes = () => {
        params.typeInteraction = 'likes';
        navigator(`/getPostByID/${params.idPost}/${params.typeInteraction}`);
        setIsOpen(true);
    }

    const openViews = () => {
        params.typeInteraction = 'views';
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
                    <FaHeart className='iconHeart' onClick={sendLike} /><h5 onClick={openLikes}>{counterLikes}</h5>
                </ItemInteractionStyles>
                <MenuViewPost
                    post={post}
                    isAdmin={isAdmin}
                    userAuth={userAuth}
                    isPrivate={userAuth.isPrivate}
                />
            </ListInteractionStyles>
        </PostInteractionContainerStyles>
    )
}

export default PostInteraction