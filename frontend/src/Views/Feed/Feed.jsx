import React, { useEffect, useState } from 'react'
import { FeedContainerHeaderStyles, FeedContainerNewsStyles, FeedContainerPostsStyles, FeedContainerStyles } from './FeedStyles'
import ListFriendFeed from '../../components/organisms/ListFriendFeed/ListFriendFeed'
import PostsInFeed from '../../components/organisms/PostsInFeed/PostsInFeed'
import { useDispatch } from 'react-redux'
import { getPostsOfFollowings } from '../../redux/slices/postSlices/postSlices'

const Feed = () => {
const dispatch = useDispatch();
const [ isReadyFeed, setIsReadyFeed ] = useState(false);

  useEffect(() => {
    const handleGetPostsByFollowing = async () => {
      await dispatch(getPostsOfFollowings());
      setIsReadyFeed(true)
    }

    handleGetPostsByFollowing();
   }, [ dispatch ]);
   
  return (
    <FeedContainerStyles>
        <FeedContainerHeaderStyles>
            <ListFriendFeed/>
        </FeedContainerHeaderStyles>

        <FeedContainerPostsStyles>
          <PostsInFeed isReadyFeed={isReadyFeed}/>
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