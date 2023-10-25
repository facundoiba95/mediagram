import React, { useEffect } from 'react'
import { PostsInFeedContainerStyles } from './PostsInFeedStyles'
import CardPostInFeed from '../../molecules/CardPostInFeed/CardPostInFeed'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsOfFollowings } from '../../../redux/slices/postSlices/postSlices';
import { useLocation } from 'react-router-dom';
import SkeletonCardPostFeed from '../../molecules/Loaders/SkeletonCardPostFeed/SkeletonCardPostFeed';

const PostsInFeed = () => {
  const posts = useSelector( state => state.postSlices.post );
  const isLoadingPost = useSelector( state => state.postSlices.isLoading );
  const dispatch = useDispatch();
  const location = useLocation();


  useEffect(() => {
    dispatch(getPostsOfFollowings());
}, [ location.pathname === '/feed' ])

  const renderPosts = () => {
    if(!posts) return (<SkeletonCardPostFeed/>)
    return posts.map(item => {
      if(isLoadingPost){
        return (
          <SkeletonCardPostFeed/>
        )
      } else {
        const { thumbnail, description } = item;  
        const { username, imgProfile } = item.foundedPosts;
        return (
          <CardPostInFeed
          username={username}
          imgProfile={imgProfile}
          description={description}
          thumbnail={thumbnail}
          />
        )
      }
    })
  }


  return (
    <PostsInFeedContainerStyles>
        { renderPosts() }
    </PostsInFeedContainerStyles>
    )
}

export default PostsInFeed