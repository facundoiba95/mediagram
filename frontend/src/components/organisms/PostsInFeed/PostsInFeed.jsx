import React from 'react'
import { PostsInFeedContainerStyles, TitlePostsInFeedStyles } from './PostsInFeedStyles'
import CardPostInFeed from '../../molecules/CardPostInFeed/CardPostInFeed'

const PostsInFeed = () => {
  return (
    <PostsInFeedContainerStyles>
        <CardPostInFeed/>
        <CardPostInFeed/>
        <CardPostInFeed/>
        <CardPostInFeed/>
    </PostsInFeedContainerStyles>
    )
}

export default PostsInFeed