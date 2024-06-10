import React, { useContext } from 'react'
import { ActionProfileContainerStyles, ImgProfileStyles, InfoProfileContainerStyles, ProfileHeaderContainerStyles, StatsInProfileStyles } from './ProfileHeaderStyles'
import { useDispatch, useSelector } from 'react-redux';
import { RiUserSmileFill, RiStarSmileFill } from 'react-icons/ri';
import { GrOverview } from 'react-icons/gr';
import { MdOutlineSmartphone } from 'react-icons/md';
import { PiHandWavingBold } from 'react-icons/pi';
import { AiFillLike } from 'react-icons/ai';
import { IoMdPersonAdd } from 'react-icons/io';
import ButtonResponsive from '../../atoms/ButtonResponsive/ButtonResponsive';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FaUserClock } from 'react-icons/fa';
import { followUser, handleIsFollowing, refreshUser, restartUserFound, unfollowUser } from '../../../redux/slices/userSlices/userSlices';
import { refreshUserAuth, restartStatusAuthSlice, validateSession } from '../../../redux/slices/authSlices/authSlices';
import { useNavigate, useParams } from 'react-router-dom';
import LoaderResponsive from '../../molecules/Loaders/LoaderResponsive/LoaderResponsive';
import InfoProfileHeader from '../../molecules/InfoProfileHeader/InfoProfileHeader';
import { getPosts } from '../../../redux/slices/postSlices/postSlices';
import { MdSettings } from 'react-icons/md';
import { MenuSettingUserAuth } from '../../molecules/MenuSettingUserAuth/MenuSettingUserAuth';
import { GlobalContext } from '../../../Context/GlobalContext';
import ModalUnauthenticated from '../../molecules/Modals/ModalUnauthenticated/ModalUnauthenticated';
import SkeletonCardContentProfile from '../../molecules/Loaders/SkeletonCardContentProfile/SkeletonCardContentProfile';
import { setStatusNotification } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { IoHeartCircle } from "react-icons/io5";
import ImgProfile from '../../atoms/ImgProfile/ImgProfile';
import ButtonMenuProfile from '../../atoms/ButtonMenuProfile/ButtonMenuProfile';
import ButtonFollow from '../../atoms/ButtonResponsive/ButtonFollow';

const ProfileHeader = () => {
  // hooks and tools
  const dispatch = useDispatch();
  const params = useParams();
  const navigator = useNavigate();

  // states redux Toolkit
  const userAuth = useSelector(state => state.authSlices.user);
  const isLogged = useSelector(state => state.authSlices.isLogged);
  const { userSelected } = useSelector(state => state.userSlices);
  const isFollowing = useSelector(state => state.userSlices.isFollowing); // debe manejarse desde el backend
  const isLoading = useSelector(state => state.userSlices.isLoading);
  const isLoadingAuth = useSelector(state => state.authSlices.isLoading);
  const isUserAuth = userAuth.username === userSelected[0].username;
  const existInListFriends = userAuth.closeList.some(usr => usr === userSelected[0]._id);
  // useContext 
  const { isOpenMenuSetting } = useContext(GlobalContext);

  const {
    username,
    isPrivate,
    countFollowings,
    countFollowers,
    countPosts,
    imgProfile,
    thumbnail,
    viewsInProfile,
    numberCellphone,
    stars,
    likesInProfile,
    greets,
    followUpRequest
  } = userSelected[0];


  const renderNumberCellphone = () => {
    return (
      <span>
        <MdOutlineSmartphone className='iconActions' />
        <p>{numberCellphone}</p>
      </span>
    )
  }

  const renderActions = () => {
    return (
      <ActionProfileContainerStyles>
        <span>
          <PiHandWavingBold className='iconGreet' />
          <small>Dejar saludo</small>
          <p>{greets.length}</p>
        </span>
        <span>
          <RiStarSmileFill className='iconStar' />
          <small>Dar estrella</small>
          <p>{stars.length}</p>
        </span>
        <span>
          <AiFillLike className='iconLike' />
          <small>Me gusta este perfil</small>
          <p>{likesInProfile.length}</p>
        </span>
      </ActionProfileContainerStyles>
    )
  }

  const renderButtonHeadProfile = () => {
    if (userSelected[0]._id === userAuth._id) {
      return (<ButtonMenuProfile />)
    } else {
      return (
        <ButtonFollow
          followUpRequest={followUpRequest}
          isFollowing={isFollowing}
          handleFollowUser={handleFollowUser}
          handleUnfollowUser={handleUnfollowUser}
        />)
    }
  }

  const handleFollowUser = async () => {
    const { imgProfile, username, _id, } = userSelected[0];

    const newFollower = {
      imgProfile,
      username,
      _id
    };

    await dispatch(validateSession());
    if (isLogged) {
      await dispatch(followUser(newFollower));
      await dispatch(handleIsFollowing(params.username));
      await dispatch(setStatusNotification());
      await dispatch(refreshUser(username));
      await dispatch(getPosts(params.username))
      await dispatch(refreshUserAuth());
      dispatch(restartStatusAuthSlice());
    } else {
      dispatch(restartStatusAuthSlice())
      navigator('/')
    }
  }

  const handleUnfollowUser = async (e) => {
    const { _id, username } = userSelected[0];
    const dataToUnfollow = {
      username,
      idFollowUpRequest: e.currentTarget.dataset.id
    };

    await dispatch(validateSession());

    if (isLogged) {
      if (e.target.dataset.id === undefined) return alert('Por favor, intenta nuevamente.');
      if (window.confirm(`Dejar de seguir a "${username}"`)) {
        await dispatch(unfollowUser(dataToUnfollow));
        await dispatch(refreshUser(username));
        await dispatch(refreshUserAuth());
        await dispatch(handleIsFollowing(params.username))
        dispatch(restartStatusAuthSlice());
      } else {
        return;
      }
    } else {
      navigator('/')
    }

  }


  const renderIconListFriends = () => {
    if (existInListFriends) {
      return (
        <span className='containerInfoListFriends'>
          <IoHeartCircle className='iconListFriends' />
          <small>Estas en su lista de amigos</small>
        </span>
      )
    }
  }

  return (
    <>
      {
        isLogged ?
          <ProfileHeaderContainerStyles>
            <MenuSettingUserAuth/>
            {
              isLoading || isLoadingAuth
                ? <SkeletonCardContentProfile />
                : <>
                  <ImgProfile imgProfile={imgProfile} thumbnail={thumbnail} />
                  <InfoProfileContainerStyles isOpenMenuSetting={isOpenMenuSetting} isListFriends={existInListFriends}>
                    <span className='title'>
                      <p>{username}</p>
                      {renderButtonHeadProfile()}
                    </span>
                    <InfoProfileHeader
                      countPosts={countPosts}
                      countFollowings={countFollowings}
                      countFollowers={countFollowers}
                      isPrivate={isPrivate}
                      isUserAuth={isUserAuth}
                    />

                    <GrOverview className='iconViews' />
                    {renderIconListFriends()}
                    {viewsInProfile}

                  </InfoProfileContainerStyles>
                </>
            }
          </ProfileHeaderContainerStyles>
          : <ModalUnauthenticated />
      }
    </>
  )
}

export default ProfileHeader