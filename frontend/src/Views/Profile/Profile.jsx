import React, { useEffect, useState } from 'react'
import { ProfileContainerStyles } from './ProfileStyles'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ProfileHeader from '../../components/organisms/ProfileHeader/ProfileHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ProfileContent from '../../components/organisms/ProfileContent/ProfileContent'
import ContainerBlur from '../../components/Containers/ContainerBlur/ContainerBlur'
import FollowContent from '../../components/organisms/FollowContent/FollowContent'
import LoaderWidthVw from '../../components/molecules/Loaders/LoaderWidthVw/LoaderWidthVw'
import { getPosts } from '../../redux/slices/postSlices/postSlices'
import { handleIsFollowing, selectUser } from '../../redux/slices/userSlices/userSlices'
import { restartStatusAuthSlice, validateSession } from '../../redux/slices/authSlices/authSlices'

const Profile = ({ children }) => {
  // states
  const isLogged = useSelector(state => state.authSlices.isLogged);
  const isLoadingAuth = useSelector(state => state.authSlices.isLoading);
  const isLoading = useSelector(state => state.userSlices.isLoading);
  const [ isReadyProfile, setIsReadyProfile ] = useState(false);

  // hooks and tools
  const navigator = useNavigate();
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    const handleConectProfile = async () => {
      dispatch(validateSession());
      if (isLogged) {
        await dispatch(selectUser(params.username));
        await dispatch(handleIsFollowing(params.username));
        await dispatch(getPosts(params.username));
        dispatch(restartStatusAuthSlice());
        setIsReadyProfile(true);
      } else {
        navigator('/');
      }
    }

    handleConectProfile();
  }, [dispatch, params.username ]);


  const renderProfile = () => {
    if (isLogged === true && isReadyProfile ) {
      return (
        <ProfileContainerStyles>
          <ContainerBlur>
            <FollowContent />
          </ContainerBlur>
          <ProfileHeader />
          {
            location.pathname === `/profile/${params.username}/changeImageUser`
              ? <>{children}</>
              : location.pathname === `/profile/${params.username}/changePassword`
                ? <>{children}</>
                : <ProfileContent />
          }
        </ProfileContainerStyles>
      )
    } else {
      return (<LoaderWidthVw />)
    }
  }

  return (
    <TransitionContainer>
      {
        isLoading || isLoadingAuth
          ? <LoaderWidthVw />
          : renderProfile()
      }
    </TransitionContainer>
  )
}

export default Profile