import React from 'react'
import { FeedContainerHeaderStyles, FeedContainerNewsStyles, FeedContainerPostsStyles, FeedContainerStyles } from './FeedStyles'
import ListFriendFeed from '../../components/organisms/ListFriendFeed/ListFriendFeed'

const Feed = () => {
  return (
    <FeedContainerStyles>
        <FeedContainerHeaderStyles>
            <ListFriendFeed/>
        </FeedContainerHeaderStyles>


        <FeedContainerPostsStyles>
            <div>Container posts</div>
            <div>Container posts</div>
            <div>Container posts</div>
            <div>Container posts</div>
            <div>Container posts</div>
            <div>Container posts</div>
        </FeedContainerPostsStyles>
        

        <FeedContainerNewsStyles>
            <div>Container News</div>
            <div>Container News</div>
            <div>Container News</div>
            <div>Container News</div>
            <div>Container News</div>
            <div>Container News</div>
        </FeedContainerNewsStyles>
    </FeedContainerStyles>
  )
}

export default Feed