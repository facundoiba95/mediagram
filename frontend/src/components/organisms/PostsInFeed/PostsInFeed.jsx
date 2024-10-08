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
            postBy,
            comments
          } = item;
          const { username, thumbnail } = postBy;
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
              postBy={postBy}
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

export default PostsInFeed