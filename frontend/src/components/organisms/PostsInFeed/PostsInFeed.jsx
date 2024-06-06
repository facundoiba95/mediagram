import React, { useContext, useEffect } from 'react'
import { PostsInFeedContainerStyles } from './PostsInFeedStyles'
import CardPostInFeed from '../../molecules/CardPostInFeed/CardPostInFeed'
import { useSelector } from 'react-redux';
import SkeletonCardPostFeed from '../../molecules/Loaders/SkeletonCardPostFeed/SkeletonCardPostFeed';
import DefaultPageFeed from '../../molecules/DefaultPageFeed/DefaultPageFeed';
import { GlobalContext } from '../../../Context/GlobalContext';
import Loader from '../../molecules/Loaders/Loader/Loader';

const PostsInFeed = ({ isReadyFeed }) => {
  const posts = useSelector(state => state.postSlices.post);
  const isLoadingPost = useSelector(state => state.postSlices.isLoading);
  const { openLoader, setOpenLoader } = useContext(GlobalContext);

  const renderPosts = () => {
    if (isReadyFeed) {
      return posts.map(item => {
        if (isLoadingPost) {
          return (
            <SkeletonCardPostFeed />
          )
        } else {
          if (!item.foundedPosts) return;
          setOpenLoader(false)
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
            />
          )
        }
      })
    } else {
      setOpenLoader(true)
      return (<Loader />)
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