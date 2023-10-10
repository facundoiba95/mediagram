import React from 'react'
import { MessagePrivateAccountStyles, ProfileContentContainerStyles } from './ProfileContentStyles'
import CardContentProfile from '../../molecules/CardContentProfile/CardContentProfile'
import { useDispatch, useSelector } from 'react-redux'
import ContentIsEmpty from '../../molecules/Modals/ContentIsEmpty/ContentIsEmpty'
import Skeleton from '@mui/material/Skeleton';
import { useParams } from 'react-router-dom';
import { HiOutlineLockClosed } from 'react-icons/hi';


const ProfileContent = () => {
  // states
  const userAuth = useSelector( state => state.authSlices.user );
  const user = useSelector( state => state.userSlices.userFiltered );
  const posts = useSelector( state => state.postSlices.post );
  const isLoading = useSelector( state => state.postSlices.isLoading );
  const isFollowing = useSelector( state => state.userSlices.isFollowing );
  const isUserAuth = user.some(usr => usr.username === userAuth.username);

  const renderContentProfile = () => {
    return posts.map(item => {
      const { thumbnail, description, postBy, likes, comments, typePost,_id } = item;
      if(isLoading){
        return (
          <Skeleton variant='rounded' width={350} height={350} animation='wave'/>
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
          key={_id}
          />
        )
      }
    })
  }

  const renderPrivateAccountMessage = () => {
    return (
      <MessagePrivateAccountStyles>
        <HiOutlineLockClosed className='iconPrivateAccount'/>
        <h2>Esta cuenta es privada. Envíale una solicitud de seguimiento.</h2>
      </MessagePrivateAccountStyles>
    )
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
      { handleViewPrivateAccountContent()  }
    </ProfileContentContainerStyles>
    )
}

export default ProfileContent