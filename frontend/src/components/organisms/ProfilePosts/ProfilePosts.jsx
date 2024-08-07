import React from 'react'
import { MessagePrivateAccountStyles, ProfilePostsContainerStyles } from './ProfilePostsStyles'
import { useSelector } from 'react-redux'
import ContentIsEmpty from '../../molecules/Modals/PostsIsEmpty/PostsIsEmpty'
import { HiOutlineLockClosed } from 'react-icons/hi';
import SkeletonCardPostProfile from '../../molecules/Loaders/SkeletonCardPostProfile/SkeletonCardPostProfile'
import CardPostProfileText from '../Cards/CardPostProfileText/CardPostProfileText'
import CardPostProfileMedia from '../Cards/CardPostProfileMedia/CardPostProfileMedia'
import { useNavigate, useParams } from 'react-router-dom'


const ProfilePosts = () => {
  // states
  const userAuth = useSelector(state => state.authSlices.user);
  const { userSelected } = useSelector(state => state.userSlices);
  const posts = useSelector(state => state.postSlices.post);
  const isLoadingPost = useSelector(state => state.postSlices.isLoading);
  const isLoadingUser = useSelector(state => state.userSlices.isLoading);
  const { isFollowing } = useSelector(state => state.userSlices);
  const isUserAuth = userSelected.some(usr => usr.username === userAuth.username);
  const navigator = useNavigate();
  const params = useParams();


  const renderContentProfile = () => {
    return posts.map(item => {
      const { thumbnail, likes, _id, counterViews, counterLikes, counterComments, mediaType, textContent, createdAt } = item;
      const isLike = likes.some(usr => usr.idUser == userAuth._id)

      const goPost = () => {
        params.idPost = _id;
        navigator(`/getPostByID/${params.idPost}`)
      }

      if (isLoadingPost || isLoadingUser) {
        return (<SkeletonCardPostProfile />)
      } else {
        if (textContent) {
          return (
            <CardPostProfileText 
              thumbnail={userSelected[0].thumbnail}
              username={userSelected[0].username}
              counterComments={counterComments}
              counterLikes={counterLikes}
              counterViews={counterViews}
              textContent={textContent}
              createdAt={createdAt}
              goPost={goPost}
              isLike={isLike}
            />
          )
        } else {
          return (
            <CardPostProfileMedia
              thumbnail={thumbnail}
              _id={_id}
              counterComments={counterComments}
              counterLikes={counterLikes}
              counterViews={counterViews}
              mediaType={mediaType}
              goPost={goPost}
              isLike={isLike}
              key={_id}
            />
          )
        }

      }
    })
  }

  const renderPrivateAccountMessage = () => {
    return (
      <MessagePrivateAccountStyles>
        <HiOutlineLockClosed className='iconPrivateAccount' />
        <h2>Esta cuenta es privada. Envíale una solicitud de seguimiento.</h2>
      </MessagePrivateAccountStyles>
    )
  }


  const handleViewPrivateAccountContent = () => {
    const { isPrivate } = userSelected[0];

    const renderEmptyContent = () => {
      return <ContentIsEmpty />;
    };

    if (isUserAuth) return posts.length ? renderContentProfile() : renderEmptyContent();

    if (isPrivate) {
      if (!isFollowing) {
        return renderPrivateAccountMessage();
      } else {
        return posts.length ? renderContentProfile() : renderEmptyContent();
      }
    } else {
      return posts.length ? renderContentProfile() : renderEmptyContent();
    }
  };

  return (
    <ProfilePostsContainerStyles posts={posts}>
      {
        handleViewPrivateAccountContent()
      }
    </ProfilePostsContainerStyles>
  )
}

export default ProfilePosts;

