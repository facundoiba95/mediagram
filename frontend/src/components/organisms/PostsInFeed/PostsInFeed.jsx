import React, { useEffect } from 'react'
import { PostsInFeedContainerStyles } from './PostsInFeedStyles'
import CardPostInFeed from '../../molecules/CardPostInFeed/CardPostInFeed'
import { useSelector } from 'react-redux';
import SkeletonCardPostFeed from '../../molecules/Loaders/SkeletonCardPostFeed/SkeletonCardPostFeed';
import LoaderWidthVw from '../../molecules/Loaders/LoaderWidthVw/LoaderWidthVw';

const PostsInFeed = ({isReadyFeed}) => {
  const posts = useSelector( state => state.postSlices.post );
  const isLoadingPost = useSelector( state => state.postSlices.isLoading );

  const renderPosts = () => {
    if(isReadyFeed){
      return posts.map(item => {
        if(isLoadingPost){
          return (
            <SkeletonCardPostFeed/>
          )
        } else {
          if(!item.foundedPosts) return;
          const { thumbnail, description ,_id} = item;  
          const { username, imgProfile } = item.foundedPosts;
          return (
            <CardPostInFeed
            username={username}
            imgProfile={imgProfile}
            description={description}
            thumbnail={thumbnail}
            _id={_id}
            />
          )
        }
      })
    } else {
      return (<LoaderWidthVw/>)
    }
    
  }


  return (
    <PostsInFeedContainerStyles>
        { renderPosts() }
    </PostsInFeedContainerStyles>
    )
}

export default PostsInFeed