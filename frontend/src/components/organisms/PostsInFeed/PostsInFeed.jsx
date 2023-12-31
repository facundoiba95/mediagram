import React, { useEffect } from 'react'
import { PostsInFeedContainerStyles } from './PostsInFeedStyles'
import CardPostInFeed from '../../molecules/CardPostInFeed/CardPostInFeed'
import { useSelector } from 'react-redux';
import SkeletonCardPostFeed from '../../molecules/Loaders/SkeletonCardPostFeed/SkeletonCardPostFeed';
import LoaderWidthVw from '../../molecules/Loaders/LoaderWidthVw/LoaderWidthVw';
import DefaultPageFeed from '../../molecules/DefaultPageFeed/DefaultPageFeed';

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
          const { 
            thumbnail,
            description ,
            _id, 
            counterLikes, 
            counterViews, 
            counterComments, 
            likedPost, 
            location,
            referTo
          } = item;  
          const { username, imgProfile } = item.foundedPosts;
          return (
            <CardPostInFeed
            username={username}
            imgProfile={imgProfile}
            description={description}
            thumbnail={thumbnail}
            counterComments={counterComments}
            counterLikes={counterLikes}
            counterViews={counterViews}
            likedPost={likedPost}
            location={location}
            referTo={referTo}
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
        {
          posts.length
          ? renderPosts()
          : <DefaultPageFeed/>
        }
    </PostsInFeedContainerStyles>
    )
}

export default PostsInFeed