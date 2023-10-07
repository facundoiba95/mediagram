import React, { useEffect } from 'react'
import { ProfileContentContainerStyles } from './ProfileContentStyles'
import CardContentProfile from '../../molecules/CardContentProfile/CardContentProfile'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../redux/slices/postSlices/postSlices'
import ContentIsEmpty from '../../molecules/Modals/ContentIsEmpty/ContentIsEmpty'
import Skeleton from '@mui/material/Skeleton';
import { useParams } from 'react-router-dom';

const ProfileContent = () => {
  // states
  const userAuth = useSelector( state => state.authSlices.user );
  const user = useSelector( state => state.userSlices.user );
  const posts = useSelector( state => state.postSlices.post );
  const isLoading = useSelector( state =>state.postSlices.isLoading );

  // hooks and tools
  const params = useParams();
  const dispatch = useDispatch();

  const renderContentProfile = () => {
    return posts.map(item => {
      const { thumbnail, description, postBy, likes, comments, typePost } = item;
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
          typePost={typePost}/>
        )
      }
    })
  }

  useEffect(() => {
    if(params.username === userAuth.username){
      dispatch(getPosts(userAuth.username));
    } else {
      dispatch(getPosts(user[0].username));
    }
  }, [ params.username ])
  return (
    <ProfileContentContainerStyles posts={posts}>
      { 
         posts
         ? renderContentProfile()
         : <ContentIsEmpty/>
      }
    </ProfileContentContainerStyles>
    )
}

export default ProfileContent