import React, { useContext } from 'react'
import { MessagePrivateAccountStyles, ProfileContentContainerStyles } from './ProfileContentStyles'
import CardContentProfile from '../../molecules/CardContentProfile/CardContentProfile'
import { useSelector } from 'react-redux'
import ContentIsEmpty from '../../molecules/Modals/ContentIsEmpty/ContentIsEmpty'
import { HiOutlineLockClosed } from 'react-icons/hi';
import { GlobalContext } from '../../../Context/GlobalContext'
import SkeletonCardPostProfile from '../../molecules/Loaders/SkeletonCardPostProfile/SkeletonCardPostProfile'
import LoaderResponsive from '../../molecules/Loaders/LoaderResponsive/LoaderResponsive'


const ProfileContent = () => {
  // states
  const userAuth = useSelector(state => state.authSlices.user);
  const { userSelected } = useSelector(state => state.userSlices);
  const posts = useSelector(state => state.postSlices.post);
  const isLoadingPost = useSelector(state => state.postSlices.isLoading);
  const isLoadingUser = useSelector(state => state.userSlices.isLoading);
  const { isFollowing } = useSelector(state => state.userSlices);
  const isUserAuth = userSelected.some(usr => usr.username === userAuth.username);

  const renderContentProfile = () => {
    return posts.map(item => {
      const { thumbnail, likes, _id, counterViews, counterLikes, counterComments, mediaType } = item;
      if (isLoadingPost || isLoadingUser) {
        return (<SkeletonCardPostProfile />)
      } else {
        return (
          <CardContentProfile
            thumbnail={thumbnail}
            likes={likes}
            _id={_id}
            counterComments={counterComments}
            counterLikes={counterLikes}
            counterViews={counterViews}
            mediaType={mediaType}
            key={_id}
          />
        )
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
    <ProfileContentContainerStyles posts={posts}>
      {
        handleViewPrivateAccountContent()
      }
    </ProfileContentContainerStyles>
  )
}

export default ProfileContent

