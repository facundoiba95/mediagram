<<<<<<< HEAD
import React, { useState } from 'react'
import { FootCardPostInProfileStyles } from '../../organisms/Cards/CardPostInFeed/CardPostInFeedStyles';
import { FaComment, FaEye, FaHeart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import useIsLike from '../../../Hooks/useLike';
import { handleLikeToPost } from '../../../redux/slices/postSlices/postSlices';

const FootCardPost = ({
    description,
    counterComments,
    counterViews,
    counterLikes,
    likes,
    userAuth,
    goPost,
    _id,
    username,
    location
}) => {
    const sendLike = useIsLike();
    const [isLike, setIsLike] = useState(likes.some(usr => usr === userAuth._id));
    const [countLikes, setCountLikes] = useState(counterLikes);

    const handleLike = async () => {
        isLike ? setCountLikes(countLikes - 1) : setCountLikes(countLikes + 1);
        setIsLike(!isLike);
        await sendLike(handleLikeToPost, _id, username, isLike);
    }


    return (
        <FootCardPostInProfileStyles isDescription={description ? description.length : false} isLike={isLike}>
            <span className='containerIconPost'>
                <div><FaEye className='iconView' /><h5>{counterViews}</h5></div>
                <div><FaHeart className='iconHeart' onClick={handleLike} /><h5>{countLikes}</h5></div>
                <div><FaComment className='iconComment' /><h5>{counterComments}</h5></div>
                {
                    location && (<div className='containerLocation'><MdLocationOn className='iconLocation' /><h5>{location}</h5></div>)
                }
            </span>
            <span className='containerDescription' onClick={goPost}>
                {
                    description && (<>
                        <h4>{username}</h4>
                        <p>{description}</p>
                    </>)
                }
            </span>
        </FootCardPostInProfileStyles>
    )
}


=======
import React, { useState } from 'react'
import { FootCardPostInProfileStyles } from '../../organisms/Cards/CardPostInFeed/CardPostInFeedStyles';
import { FaComment, FaEye, FaHeart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import useIsLike from '../../../Hooks/useLike';
import { handleLikeToPost } from '../../../redux/slices/postSlices/postSlices';

const FootCardPost = ({
    description,
    counterComments,
    counterViews,
    counterLikes,
    likes,
    userAuth,
    goPost,
    _id,
    username,
    location
}) => {
    const sendLike = useIsLike();
    const [isLike, setIsLike] = useState(likes.some(usr => usr === userAuth._id));
    const [countLikes, setCountLikes] = useState(counterLikes);

    const handleLike = async () => {
        isLike ? setCountLikes(countLikes - 1) : setCountLikes(countLikes + 1);
        setIsLike(!isLike);
        await sendLike(handleLikeToPost, _id, username, isLike);
    }


    return (
        <FootCardPostInProfileStyles isDescription={description ? description.length : false} isLike={isLike}>
            <span className='containerIconPost'>
                <div><FaEye className='iconView' /><h5>{counterViews}</h5></div>
                <div><FaHeart className='iconHeart' onClick={handleLike} /><h5>{countLikes}</h5></div>
                <div><FaComment className='iconComment' /><h5>{counterComments}</h5></div>
                {
                    location && (<div className='containerLocation'><MdLocationOn className='iconLocation' /><h5>{location}</h5></div>)
                }
            </span>
            <span className='containerDescription' onClick={goPost}>
                {
                    description && (<>
                        <h4>{username}</h4>
                        <p>{description}</p>
                    </>)
                }
            </span>
        </FootCardPostInProfileStyles>
    )
}


>>>>>>> b3173dc1 (first commit in Ubuntu)
export default FootCardPost;