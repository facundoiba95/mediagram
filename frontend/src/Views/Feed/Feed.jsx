import React, { useEffect, useState } from 'react'
import { FeedContainerHeaderStyles, FeedContainerNewsStyles, FeedContainerPostsStyles, FeedContainerStyles } from './FeedStyles'
import ListFriendFeed from '../../components/organisms/ListFriendFeed/ListFriendFeed'
import PostsInFeed from '../../components/organisms/PostsInFeed/PostsInFeed'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsOfFollowings } from '../../redux/slices/postSlices/postSlices'
import { getNotifications } from '../../redux/slices/socketSlices/notificationSlices/notificationSlices'
import socket from '../../../socket'
import { Howl, Howler } from 'howler';
import songNotification from '../../assets/sound4.mp3';

const Feed = () => {
const dispatch = useDispatch();
const [ isReadyFeed, setIsReadyFeed ] = useState(false);
const userAuth = useSelector( state => state.authSlices.user );
const notifications = useSelector( state => state.notificationSlices.notifications );
const stateNotifications = useSelector( state => state.notificationSlices.state );
const sound = new Howl({
  src:[songNotification],
  volume: 0.1
})

  useEffect(() => {
    const handleGetPostsByFollowing = async () => {
      await dispatch(getPostsOfFollowings());
      setIsReadyFeed(true)
    }
    tabNotification()
    handleGetPostsByFollowing();
   }, [ dispatch ]);


   const tabNotification = () => {
    notifications.filter(item => item.status === 'PENDING').length >= 1 
    ? document.title = `Mediagram (${notifications.filter(item => item.status === 'PENDING').length})`
    : document.title = `Mediagram`
   }

   useEffect(() => {
    tabNotification()
    socket.on('newNotification', (data) => {
      dispatch(getNotifications(userAuth._id));
      // sound.volume(0.1);
      // sound.play();
      console.log('NUEVA NOTIFICACION: ', data);
    })
  }, [ stateNotifications ])

  useEffect(() => {
    dispatch(getNotifications(userAuth._id));
  }, [])

   
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