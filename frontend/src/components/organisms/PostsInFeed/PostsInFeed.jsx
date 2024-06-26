import React from 'react'
import { PostsInFeedContainerStyles } from './PostsInFeedStyles'
import CardPostInFeed from '../../molecules/CardPostInFeed/CardPostInFeed'
import { useSelector } from 'react-redux';
import SkeletonCardPostFeed from '../../molecules/Loaders/SkeletonCardPostFeed/SkeletonCardPostFeed';
import DefaultPageFeed from '../../molecules/DefaultPageFeed/DefaultPageFeed';
import GlobalLoader from '../../molecules/Loaders/GlobalLoader/GlobalLoader';

const PostsInFeed = ({ isReadyFeed }) => {
  const posts = useSelector(state => state.postSlices.post);
  const isLoadingPost = useSelector(state => state.postSlices.isLoading);

  const renderPosts = () => {
    if (isReadyFeed) {
      return posts.map((item, index) => {
        if (isLoadingPost) {
          return (
            <SkeletonCardPostFeed key={index}/>
          )
        } else {
          if (!item.foundedPosts) return;

          const {
            thumbnail,
            description,
            _id,
            counterLikes,
            counterViews,
            counterComments,
            likes,
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
              likes={likes}
              location={location}
              referTo={referTo}
              _id={_id}
              key={index}
            />
          )
        }
      })
    } else {
      return (<GlobalLoader />)
    }

  }


  return (
    <PostsInFeedContainerStyles>
      {
        isLoadingPost
          ? <SkeletonCardPostFeed />
          : posts.length
            ? renderPosts()
            : <DefaultPageFeed />
      }
    </PostsInFeedContainerStyles>
  )
}

export default PostsInFeed