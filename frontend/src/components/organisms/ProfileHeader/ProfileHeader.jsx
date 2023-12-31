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
import { followUser, handleIsFollowing, refreshUser, unfollowUser } from '../../../redux/slices/userSlices/userSlices';
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

const ProfileHeader = () => {
  // hooks and tools
  const dispatch = useDispatch();
  const params = useParams();
  const navigator = useNavigate();

  // states redux Toolkit
  const userAuth = useSelector( state => state.authSlices.user );
  const isLogged = useSelector( state => state.authSlices.isLogged );
  const user = useSelector( state => state.userSlices.userFiltered );
  const isFollowing = useSelector( state => state.userSlices.isFollowing ); // debe manejarse desde el backend
  const isLoading = useSelector( state => state.userSlices.isLoading );
  const isLoadingAuth = useSelector( state => state.authSlices.isLoading );
  const isUserAuth = userAuth.username === user[0].username;

  // useContext 
  const { isOpenMenuSetting, setIsOpenMenuSetting } = useContext( GlobalContext );

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
      } = user[0];

    const renderImgProfile = () => {
      if(imgProfile.length){
        return( 
          <ImgProfileStyles>
            <img src={thumbnail} alt="" />
          </ImgProfileStyles>
        )
      } else {
        return (
          <ImgProfileStyles>
            <RiUserSmileFill className='imgProfile'/>
          </ImgProfileStyles>
        )
      }    
    }

    const renderNumberCellphone = () => {
      return (
        <span>
          <MdOutlineSmartphone className='iconActions'/>
          <p>{numberCellphone}</p>
        </span>
      )
    }

    const renderActions = () => {
      return (
        <ActionProfileContainerStyles>
          <span>
            <PiHandWavingBold className='iconGreet'/>
            <small>Dejar saludo</small>
            <p>{greets.length}</p>
          </span>
          <span>
            <RiStarSmileFill className='iconStar'/>
            <small>Dar estrella</small>
            <p>{stars.length}</p>
          </span>
          <span>
            <AiFillLike className='iconLike'/>
            <small>Me gusta este perfil</small>
            <p>{likesInProfile.length}</p>
          </span>
        </ActionProfileContainerStyles>
      )
    }

    const renderButtonFollow = () => {
      if(user[0]._id === userAuth._id){
        return (
          <span className='spanMenuSetting' onClick={() => setIsOpenMenuSetting(!isOpenMenuSetting) }>
            <MdSettings className='iconSetting'/>
            <small>Ajustes de usuario.</small>
            <small></small>
          </span>
        )
      }
      if(isFollowing || followUpRequest.length){
        if(followUpRequest.length){
            if(followUpRequest[0].status === 'PENDING'){
              return (
               <ButtonResponsive 
                id={followUpRequest[0]._id} 
                title={`Pendiente`} 
                icon={<FaUserClock 
                data-id={followUpRequest[0]._id} 
                className='icon'/>}/>
              )
            } else if(followUpRequest[0].status === 'REJECTED') {
              return (
                <ButtonResponsive 
                title={`Seguir`} 
                icon={<BsFillPersonCheckFill 
                className='icon' />} 
                handleFunction={() => handleFollowUser()}
                id={followUpRequest[0]._id}/>
              )
            } else if(followUpRequest[0].status === 'ACCEPT') {
              return (
                <ButtonResponsive 
                title={`Siguiendo`} 
                icon={<BsFillPersonCheckFill 
                className='icon' />} 
                handleFunction={(e) => handleUnfollowUser(e)}
                id={followUpRequest[0]._id}/>
              )
            }
      } else {
        return (
          <ButtonResponsive  
            title={`Seguir`} 
            icon={<IoMdPersonAdd 
            className='icon' 
            />} 
            handleFunction={() => handleFollowUser()}/>
        )
      }} else {
        return (
          <ButtonResponsive  
            title={`Seguir`} 
            icon={<IoMdPersonAdd 
            className='icon' 
            />} 
            handleFunction={() => handleFollowUser()}/>
        )
      }
  }

    const handleFollowUser = async () => {
      const { imgProfile, username, _id, } = user[0];

      const newFollower = {
        imgProfile,
        username,
        _id
      };

      await dispatch(validateSession());
      if(isLogged){
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
      const { _id, username } = user[0];
      const dataToUnfollow = {
        username,
        idFollowUpRequest: e.target.dataset.id
      };

      await dispatch(validateSession());

      if(isLogged) {
        if(window.confirm(`Dejar de seguir a "${username}"`)){
          if(e.target.dataset.id === undefined) return alert('Por favor, intenta nuevamente.');
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

  return (
    <>
    {
      isLogged ?
      <ProfileHeaderContainerStyles>
      <MenuSettingUserAuth isPrivate={isPrivate}/>
      {
        isLoading || isLoadingAuth
        ? <SkeletonCardContentProfile/>
        : <>
            { renderImgProfile() }
            <InfoProfileContainerStyles isOpenMenuSetting={isOpenMenuSetting}>
              <span className='title'>
                <p>{username}</p>
                { renderButtonFollow() }
              </span>
              <InfoProfileHeader 
              countPosts={countPosts}
              countFollowings={countFollowings}
              countFollowers={countFollowers}
              isPrivate={isPrivate}
              isUserAuth={isUserAuth}
              />
            
               <GrOverview className='iconViews'/>
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