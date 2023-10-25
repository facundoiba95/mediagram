import React from 'react'
import { PostsInFeedContainerStyles } from './PostsInFeedStyles'
import CardPostInFeed from '../../molecules/CardPostInFeed/CardPostInFeed'
import { useSelector } from 'react-redux';
import SkeletonCardPostFeed from '../../molecules/Loaders/SkeletonCardPostFeed/SkeletonCardPostFeed';

const PostsInFeed = () => {
  const posts = useSelector( state => state.postSlices.post );
  const isLoadingPost = useSelector( state => state.postSlices.isLoading );

  const renderPosts = () => {
    if(!posts) return (<SkeletonCardPostFeed/>)
    return posts.map(item => {
      if(isLoadingPost){
        return (
          <SkeletonCardPostFeed/>
        )
      } else {
        if(!item.foundedPosts) return (<SkeletonCardPostFeed/>);
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