import React, { useContext, useEffect, useState } from 'react'
import { ItemInteractionStyles, ListInteractionStyles, PostInteractionContainerStyles, SharePostContainerStyles } from './PostInteractionStyles'
import{ FaComment, FaEye, FaHeart } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, handleLikeToPost } from '../../../redux/slices/postSlices/postSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';
import { useNavigate, useParams } from 'react-router-dom';
import { setStatusNotification } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { MdDeleteForever } from "react-icons/md";
import useIsAdmin from '../../../Hooks/useIsAdmin';
import { refreshUser } from '../../../redux/slices/userSlices/userSlices';

const PostInteraction = ({ counterViews, counterLikes, post, likedPost }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();
    const userAuth = useSelector( state => state.authSlices.user );
    const { setIsOpenModalWindowAuth, setIsOpen } = useContext(GlobalContext);
    const [ openMessage, setOpenMessage ] = useState(false);
    const [ openShareURL, setOpenShareURL ] = useState(false);
    const isAdmin = useIsAdmin({dataRecived: post[0].postBy._id, dataAuth: userAuth._id});
   
    
    const sendLike = async () => {
        const result = await dispatch(validateSession());
        
        if(await result.payload.status === 200){
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
    
    const renderBoxShareURLPost = () => {
        return (
            <SharePostContainerStyles openMessage={openMessage}>
            <p>Copia este enlace para compartir:</p>
            <span>
              <input type='text' value={ window.location.href} id='URLPost'/>
              <button className='btnCopyURL' onClick={sharePostURL}>Copiar</button>
            </span>
            {
                openMessage
                ? <small className='messageShareURLPost'>Se copió la URL del post!</small>
                : <></>
            }
           </SharePostContainerStyles>
        )
    }

    const sharePostURL = () => {
        const URLPost = document.getElementById('URLPost');
        URLPost.select();
        document.execCommand('copy');
        setOpenMessage(true);

        setTimeout(() => {
            setOpenMessage(false);
            setOpenShareURL(false);
        }, 3000);
    }
    
    const handleDeletePost = () => {
        if(window.confirm('Desea eliminar este post?')) {
            params.username = userAuth.username;
            (async () => {
                await dispatch(deletePost(post[0]._id));
                navigator(`/profile/${params.username}`);
            })()
        } else {
            return;
        }
    }

  return (
    <PostInteractionContainerStyles>
        <ListInteractionStyles >
            <ItemInteractionStyles >
                <FaEye className='iconView' onClick={openViews}/><h5 onClick={openViews}>{counterViews}</h5>         {/** counterViews */}
            </ItemInteractionStyles>
            <ItemInteractionStyles likedPost={likedPost}>
               <FaHeart className='iconHeart' onClick={sendLike}/><h5 onClick={openLikes}>{counterLikes}</h5>     {/** counterLikes */}
            </ItemInteractionStyles>
            <ItemInteractionStyles openShareURL={openShareURL}>
               <BsShareFill className='iconComment' onClick={() => setOpenShareURL(!openShareURL)}/>
               {
                openShareURL
                ? renderBoxShareURLPost()
                : <></>
               }
            </ItemInteractionStyles>
            {
                isAdmin
                ? <ItemInteractionStyles>
                    <MdDeleteForever onClick={handleDeletePost} className='iconDeletePost'/>
                </ItemInteractionStyles>
                : <></>
            }

        </ListInteractionStyles>
    </PostInteractionContainerStyles>
    )
}

export default PostInteraction