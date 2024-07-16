import React, { useContext, useEffect, useRef, useState } from 'react'
import { FeedContainerHeaderStyles, FeedContainerNewsStyles, FeedContainerPostsStyles, FeedContainerStyles } from './FeedStyles'
import ListFriendFeed from '../../components/organisms/ListFriendFeed/ListFriendFeed'
import PostsInFeed from '../../components/organisms/PostsInFeed/PostsInFeed'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsOfFollowings } from '../../redux/slices/postSlices/postSlices'
import { getNotifications, setStatusNotification } from '../../redux/slices/socketSlices/notificationSlices/notificationSlices'
import { Howl, Howler } from 'howler';
import songNotification from '../../assets/sound4.mp3';
import { getCloseList, restartUserSelected } from '../../redux/slices/userSlices/userSlices'
import { GlobalContext } from '../../Context/GlobalContext'
import CreateContentFeed from '../../components/organisms/CreateContentFeed/CreateContentFeed'
import { socket } from '../../../socket'

const Feed = () => {
  const dispatch = useDispatch();
  const { topScroll, setTopScroll, setOpenLoader } = useContext(GlobalContext);
  const [isReadyFeed, setIsReadyFeed] = useState(false);
  const userAuth = useSelector(state => state.authSlices.user);
  const { isLogged } = useSelector(state => state.authSlices);
  const stateNotifications = useSelector(state => state.notificationSlices.state);
  const { userReceptor } = useSelector(state => state.notificationSlices);
  const containerPostRef = useRef(null);
  const sound = new Howl({
    src: [songNotification],
    volume: 0.1
  })


  useEffect(() => {
    setOpenLoader(true)

    const handleGetPostsByFollowing = async () => {
      await dispatch(getPostsOfFollowings());
      setIsReadyFeed(true)
      setOpenLoader(false)
    }
    handleGetPostsByFollowing();
    dispatch(getCloseList())
  }, [dispatch]);


  useEffect(() => {
    if (socket) {
      socket.on('newNotification', (data) => {
        dispatch(getNotifications(userAuth._id));
        sound.volume(0.5);
        sound.play();
      })
    }
  }, [stateNotifications, userReceptor])

  useEffect(() => {
    dispatch(getNotifications(userAuth._id));
    dispatch(restartUserSelected());
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
        <ListFriendFeed />
      </FeedContainerHeaderStyles>

      <FeedContainerPostsStyles ref={containerPostRef}>
        <CreateContentFeed />
        <PostsInFeed isReadyFeed={isReadyFeed} />
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