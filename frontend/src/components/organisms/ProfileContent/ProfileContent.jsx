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
  const userAuth = useSelector( state => state.authSlices.user );
  const user = useSelector( state => state.userSlices.userFiltered );
  const posts = useSelector( state => state.postSlices.post );
  const isLoadingPost = useSelector( state => state.postSlices.isLoading );
  const isLoadingAuth = useSelector( state => state.authSlices.isLoading );
  const isFollowing = useSelector( state => state.userSlices.isFollowing );
  const isUserAuth = user.some(usr => usr.username === userAuth.username);

  const renderContentProfile = () => {
    return posts.map(item => {
      const { thumbnail, description, postBy, likes, comments, typePost,_id,likedPost } = item;
      if(isLoadingPost){
        return (
          <SkeletonCardPostProfile />
          )
      } else {
        return (
          <CardContentProfile 
          thumbnail={thumbnail}
          description={description}
          postBy={postBy}
          likes={likes}
          comments={comments}
          typePost={typePost}
          likedPost={likedPost}
          _id={_id}
          key={_id}
          />
        )
      }
    })
  }

  const renderPrivateAccountMessage = () => {
    if(isLoadingPost && isLoadingAuth){
      return (
        <LoaderResponsive/>
      )
    } else {
      return (
        <MessagePrivateAccountStyles>
          <HiOutlineLockClosed className='iconPrivateAccount'/>
          <h2>Esta cuenta es privada. Envíale una solicitud de seguimiento.</h2>
        </MessagePrivateAccountStyles>
      )
    }
  }


  // re ver este bloque, buscar manera de hacerlo mejor.
  const handleViewPrivateAccountContent = () => {   
    if(user[0].isPrivate){
      if( isFollowing && posts ) return (<>{ renderContentProfile() }</>);
      if( isFollowing && !posts ) return (<ContentIsEmpty/>);
      if( !isFollowing && isUserAuth && posts) return (<>{ renderContentProfile() }</>);
      if( !isFollowing && isUserAuth && !posts ) return (<ContentIsEmpty/>); 
      if( !isFollowing ) return (<>{ renderPrivateAccountMessage() }</>);
    } else if(!user[0].isPrivate && posts){
      return (<>{renderContentProfile()}</>)
    } else if( !user[0].isPrivate && !posts ) return (<ContentIsEmpty/>)
  }

  return (
    <ProfileContentContainerStyles posts={posts}>
      {
        handleViewPrivateAccountContent()  
      }
    </ProfileContentContainerStyles>
    )
}

export default ProfileContent