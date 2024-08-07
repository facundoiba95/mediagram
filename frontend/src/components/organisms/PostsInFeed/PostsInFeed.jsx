import React from 'react'
import { PostsInFeedContainerStyles } from './PostsInFeedStyles'
import { useSelector } from 'react-redux';
import SkeletonCardPostFeed from '../../molecules/Loaders/SkeletonCardPostFeed/SkeletonCardPostFeed';
import DefaultPageFeed from '../../molecules/DefaultPageFeed/DefaultPageFeed';
import GlobalLoader from '../../molecules/Loaders/GlobalLoader/GlobalLoader';
import CreateContentFeed from '../CreateContentFeed/CreateContentFeed';
import CardPostInFeed from '../Cards/CardPostInFeed/CardPostInFeed';

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

          const {
            description,
            _id,
            counterLikes,
            counterViews,
            counterComments,
            likes,
            location,
            referTo,
            mediaType,
            media_url,
            createdAt,
            textContent,
            postByUser,
            comments
          } = item;
          const { username, thumbnail } = postByUser[0];
          return (
            <CardPostInFeed
              username={username}
              imgProfile={thumbnail}
              description={description}
              counterComments={counterComments}
              counterLikes={counterLikes}
              counterViews={counterViews}
              likes={likes.map(like => like.idUser)}
              location={location}
              referTo={referTo}
              _id={_id}
              mediaType={mediaType}
              media_url={media_url}
              textContent={textContent}
              createdAt={createdAt}
              postByUser={postByUser[0]}
              comments={comments}
              key={index}
            />
          )
        }
      })
    } else {
      return (<GlobalLoader/>)
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

<<<<<<< HEAD
=======
import React from 'react'
import { PostsInFeedContainerStyles } from './PostsInFeedStyles'
import { useSelector } from 'react-redux';
import SkeletonCardPostFeed from '../../molecules/Loaders/SkeletonCardPostFeed/SkeletonCardPostFeed';
import DefaultPageFeed from '../../molecules/DefaultPageFeed/DefaultPageFeed';
import GlobalLoader from '../../molecules/Loaders/GlobalLoader/GlobalLoader';
import CardPostInFeed from '../Cards/CardPostInFeed/CardPostInFeed';

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

          const {
            description,
            _id,
            counterLikes,
            counterViews,
            counterComments,
            likes,
            location,
            referTo,
            mediaType,
            media_url,
            createdAt,
            textContent,
            postByUser,
            comments
          } = item;
          const { username, thumbnail } = postByUser[0];
          return (
            <CardPostInFeed
              username={username}
              imgProfile={thumbnail}
              description={description}
              counterComments={counterComments}
              counterLikes={counterLikes}
              counterViews={counterViews}
              likes={likes.map(like => like.idUser)}
              location={location}
              referTo={referTo}
              _id={_id}
              mediaType={mediaType}
              media_url={media_url}
              textContent={textContent}
              createdAt={createdAt}
              postByUser={postByUser[0]}
              comments={comments}
              key={index}
            />
          )
        }
      })
    } else {
      return (<GlobalLoader/>)
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
=======
>>>>>>> parent of 60d7322 (first commit in Ubuntu)
export default PostsInFeed