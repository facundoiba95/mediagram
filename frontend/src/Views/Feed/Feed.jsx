import React, { useContext, useEffect, useRef, useState } from 'react'
import { FeedContainerHeaderStyles, FeedContainerSuggestionsStyles, FeedContainerPostsStyles, FeedContainerStyles } from './FeedStyles'
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
import SuggestedUsers from '../../components/organisms/SuggestedUsers/SuggestedUsers'
import TitleSuggestions from '../../components/atoms/TitleSuggestions/TitleSuggestions'

const Feed = () => {
  const dispatch = useDispatch();
  const { topScroll, setTopScroll, setOpenLoader, setActiveEffect } = useContext(GlobalContext);
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
    if (isLogged) {
      setOpenLoader(true)
      const handleGetPostsByFollowing = async () => {
        await dispatch(getPostsOfFollowings());
        await dispatch(getCloseList())
        setIsReadyFeed(true)
        setOpenLoader(false)
      }

      handleGetPostsByFollowing();
    }
  }, []);


  useEffect(() => {
    if (socket) {
      socket.on('newNotification', (data) => {
        const userRecived = data.user;

        if (userRecived === userAuth.username) {
          dispatch(getNotifications(userAuth._id));
          setActiveEffect(true)
          sound.volume(0.5);
          sound.play();

          setTimeout(() => {
            setActiveEffect(false)
          }, 3000);
        }
      })
    }
  }, [stateNotifications, userReceptor])




  useEffect(() => {
    if (isLogged) {
      dispatch(getNotifications(userAuth._id));
      dispatch(restartUserSelected());
    }
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

        <FeedContainerSuggestionsStyles>
          <TitleSuggestions title={"Sugerencias"} />
          <SuggestedUsers />
        </FeedContainerSuggestionsStyles>
    </FeedContainerStyles>
  )
}

export default Feed