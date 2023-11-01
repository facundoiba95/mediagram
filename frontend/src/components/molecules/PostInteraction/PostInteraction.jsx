import React, { useContext } from 'react'
import { ItemInteractionStyles, ListInteractionStyles, PostInteractionContainerStyles } from './PostInteractionStyles'
import{ FaComment, FaEye, FaHeart } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { handleLikeToPost } from '../../../redux/slices/postSlices/postSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';

const PostInteraction = ({ counterViews, counterLikes, post, likedPost }) => {
    const dispatch = useDispatch();
    const userAuth = useSelector( state => state.authSlices.user );
    const { setIsOpenModalWindowAuth } = useContext(GlobalContext);

    const sendLike = async () => {
        const result = await dispatch(validateSession());
        
        if(await result.payload.status === 200){
            const newLike = {
                username: userAuth.username,
                thumbnail: userAuth.thumbnail,
                _id: userAuth._id,
                idPost: post[0]._id,
                postedBy: post[0].postedBy
            };
    
            dispatch(handleLikeToPost(newLike));
        } else {
            setIsOpenModalWindowAuth(true)
          return;
        }
      }
    
  return (
    <PostInteractionContainerStyles>
        <ListInteractionStyles >
            <ItemInteractionStyles >
                <FaEye className='iconView'/><h5>{counterViews}</h5>         {/** counterViews */}
            </ItemInteractionStyles>
            <ItemInteractionStyles likedPost={likedPost}>
               <FaHeart className='iconHeart' onClick={sendLike}/><h5>{counterLikes}</h5>     {/** counterLikes */}
            </ItemInteractionStyles>
            <ItemInteractionStyles>
               <BsShareFill className='iconComment'/>
            </ItemInteractionStyles>
        </ListInteractionStyles>
    </PostInteractionContainerStyles>
    )
}

export default PostInteraction