import React, { useContext, useEffect, useRef, useState } from 'react'
import { FeedContainerHeaderStyles, FeedContainerNewsStyles, FeedContainerPostsStyles, FeedContainerStyles } from './FeedStyles'
import ListFriendFeed from '../../components/organisms/ListFriendFeed/ListFriendFeed'
import PostsInFeed from '../../components/organisms/PostsInFeed/PostsInFeed'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsOfFollowings } from '../../redux/slices/postSlices/postSlices'
import { getNotifications } from '../../redux/slices/socketSlices/notificationSlices/notificationSlices'
import socket from '../../../socket'
import { Howl, Howler } from 'howler';
import songNotification from '../../assets/sound4.mp3';
import { getCloseList } from '../../redux/slices/userSlices/userSlices'
import { GlobalContext } from '../../Context/GlobalContext'

const Feed = () => {
const dispatch = useDispatch();
const { setOpenLoader, topScroll, setTopScroll  } = useContext(GlobalContext);
const [ isReadyFeed, setIsReadyFeed ] = useState(false);
const userAuth = useSelector( state => state.authSlices.user );
const notifications = useSelector( state => state.notificationSlices.notifications );
const stateNotifications = useSelector( state => state.notificationSlices.state );
const containerPostRef = useRef(null);
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
    dispatch(getCloseList())
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
    })
  }, [ stateNotifications ])

  useEffect(() => {
    dispatch(getNotifications(userAuth._id));
    setOpenLoader(false);
  }, [])


  // manejar scroll para animacion de ListFriends
  useEffect(() => {
    const handleScroll = () => containerPostRef.current.scrollTop !== 0 ? setTopScroll(false) : setTopScroll(true)
    const container = containerPostRef.current;
    
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerPostRef]);
   
  return (
    <FeedContainerStyles topScroll={topScroll}>
        <FeedContainerHeaderStyles >
            <ListFriendFeed/>
        </FeedContainerHeaderStyles>

        <FeedContainerPostsStyles ref={containerPostRef}>
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