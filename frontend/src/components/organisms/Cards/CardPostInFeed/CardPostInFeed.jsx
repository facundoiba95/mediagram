import React, { useRef } from 'react'
import { CardPostInFeedContainerStyles } from './CardPostInFeedStyles'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { VIDEO } from '../../../../libs/mediaType';
import useIsVisible from '../../../../Hooks/useIsVisible';
import dateTime from '../../../../libs/dateTime';
import HeadCardPost from '../../../molecules/HeadCardPost/HeadCardPost';
import { PostMediaType } from '../../../molecules/PostMediaType/PostMediaType';
import FootCardPost from '../../../molecules/FootCardPost/FootCardPost';
import PostTextContent from '../../../molecules/PostTextContent/PostTextContent';
import AddComment from '../../../molecules/AddComment/AddComment';
import PostComments from '../../PostComments/PostComments';

const CardPostInFeed = ({
  _id,
  imgProfile,
  username,
  description,
  counterViews,
  counterLikes,
  counterComments,
  comments,
  likes,
  location,
  referTo,
  mediaType,
  media_url,
  createdAt,
  textContent,
  postByUser
}) => {
  const navigator = useNavigate();
  const params = useParams();
  const userAuth = useSelector(state => state.authSlices.user);
  const cardPost_ref = useRef();
  const isVideo = mediaType === VIDEO;
  const playVideo = useIsVisible({ refElement: cardPost_ref, optionalCondition: isVideo });

  const goToProfile = (e) => {
    const valueUsername = e.currentTarget.dataset.username;
    params.username = valueUsername;
    navigator(`/profile/${params.username}`);
  }

  const goPost = () => {
    params.idPost = _id;
    navigator(`/getPostByID/${params.idPost}`);
  }


  return (
    <CardPostInFeedContainerStyles ref={cardPost_ref}>
      <HeadCardPost
        referTo={referTo}
        goProfile={goToProfile}
        imgProfile={imgProfile}
        username={username}
      />
      <h5 className='dateTime'>{dateTime(createdAt)}</h5>
      <PostMediaType
        mediaType={mediaType}
        media_url={media_url}
        playVideo={playVideo}
        goPost={goPost}
      />
      <PostTextContent textContent={textContent} />
      <FootCardPost
        _id={_id}
        username={username}
        goPost={goPost}
        likes={likes}
        counterComments={counterComments}
        counterLikes={counterLikes}
        counterViews={counterViews}
        description={description}
        userAuth={userAuth}
        location={location}
      />
      <PostComments comments={comments}/>
      <AddComment
        hiddenComments={true}
        postBy={postByUser._id}
        idPost={_id}
      />
    </CardPostInFeedContainerStyles>
  )
}

export default CardPostInFeed