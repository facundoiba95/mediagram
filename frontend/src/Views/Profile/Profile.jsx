import React, { useContext, useEffect, useState } from 'react'
import { ProfileContainerStyles } from './ProfileStyles'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ProfileHeader from '../../components/organisms/ProfileHeader/ProfileHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getPosts } from '../../redux/slices/postSlices/postSlices'
import { handleIsFollowing, resetState_followers, resetState_followings, selectUser } from '../../redux/slices/userSlices/userSlices'
import { restartStatusAuthSlice, validateSession } from '../../redux/slices/authSlices/authSlices'
import ModalSearchUsers from '../../components/molecules/Modals/ModalSearchUsers/ModalSearchUsers'
import { GlobalContext } from '../../Context/GlobalContext'
import ImageViewer from '../../components/molecules/ImageViewer/ImageViewer'
import GlobalLoader from '../../components/molecules/Loaders/GlobalLoader/GlobalLoader'
import ProfilePosts from '../../components/organisms/ProfilePosts/ProfilePosts'

const Profile = ({ children }) => {
  // states
  const { isLogged } = useSelector(state => state.authSlices);
  const userAuth = useSelector(state => state.authSlices.user);
  const [isReadyProfile, setIsReadyProfile] = useState(false);
  const { userSelected, followers, followings } = useSelector(state => state.userSlices);

  // useContext 
  const { isOpen, setOpenLoader } = useContext(GlobalContext);

  // hooks and tools
  const navigator = useNavigate();
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();

  const placeholderValue = {
    followers: `Buscar seguidores de ${params.username}`,
    followings: `Buscar a quién sigue ${params.username}`
  }

  useEffect(() => {
    if (!isLogged) {
      navigator('/');
    }
  }, [isLogged, navigator]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setOpenLoader(true);
      await dispatch(selectUser(params.username));
    };

    if (isLogged) {
      fetchUserProfile();
    }
  }, [dispatch, isLogged, params.username, setOpenLoader]);


  useEffect(() => {
    const fetchUserDetails = async () => {
      if (userSelected.length > 0) {
        userAuth._id !== userSelected[0]._id && await dispatch(handleIsFollowing(userSelected[0]._id))
        await dispatch(getPosts(params.username));
        dispatch(restartStatusAuthSlice());
        setIsReadyProfile(true);
        setOpenLoader(false);
      }
    };

    fetchUserDetails();
  }, [userSelected]);

  const renderModalSearchUsers = () => {
    if (params.typeFollow === 'followers') {
      return (
        <ModalSearchUsers
          isOpen={isOpen}
          data={followers}
          placeholderValue={placeholderValue[params.typeFollow]}
          resetData={resetState_followers}
        />
      )
    } else if (params.typeFollow === 'followings') {
      return (
        <ModalSearchUsers
          isOpen={isOpen}
          data={followings}
          placeholderValue={placeholderValue[params.typeFollow]}
          resetData={resetState_followings}
        />
      )
    }
  }


  const renderProfile = () => {
    if (isLogged && isReadyProfile) {
      return (
        <ProfileContainerStyles>
          {renderModalSearchUsers()}
          <ProfileHeader />
          {
            location.pathname === `/profile/${params.username}/changeImageUser`
              ? <>{children}</>
              : location.pathname === `/profile/${params.username}/changePassword`
                ? <>{children}</>
                : location.pathname === `/profile/${params.username}/closeList`
                  ? <>{children}</>
                  : location.pathname === `/profile/${params.username}/changeLocation`
                    ? <>{children}</>
                    : location.pathname === `/profile/${params.username}/changeProfession`
                      ? <>{children}</>
                      : <ProfilePosts />
          }
        </ProfileContainerStyles>
      )
    } else {
      return (<GlobalLoader />)
    }
  }

  return (
    <TransitionContainer>
      <ImageViewer image={userSelected[0] ? userSelected[0].imgProfile : []} />
      {
        renderProfile()
      }
    </TransitionContainer>
  )
}

export default Profile