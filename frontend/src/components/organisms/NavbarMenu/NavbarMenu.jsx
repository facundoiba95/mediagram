import React, { useContext, useEffect, useRef, useState } from 'react'
import { BoxNotificationNavbarMenuStyles, NavbarMenuContainerStyles, NavbarMenuItemStyles, NavbarMenuListStyles } from './NavbarMenuStyles'
import LogoMediagram from '../../atoms/LogoMediagram/LogoMediagram'
import { ImHome3 } from 'react-icons/im';
import { BiSolidSearchAlt2, BiSolidUser } from 'react-icons/bi';
import { MdExplore } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { HiLightBulb } from 'react-icons/hi';
import { FaUserPlus } from 'react-icons/fa';
import { TbEyeClosed } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getFollowUpRequests, logout } from '../../../redux/slices/authSlices/authSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { restartPostState, restartPostsList } from '../../../redux/slices/postSlices/postSlices';
import { getNotifications, restartNotifications, viewNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { resetTagState } from '../../../redux/slices/tagSlices/tagSlices';
import { resetStateLocation } from '../../../redux/slices/locationSlices/locationSlices';
import { restartUserSelected, restartUserSlice } from '../../../redux/slices/userSlices/userSlices';
import iconNewNotification from "../../../assets/bell_alert1.gif";
import socket from '../../../../socket';

const NavbarHeader = () => {
  // states 
  const isLogged = useSelector(state => state.authSlices.isLogged);
  const user = useSelector(state => state.authSlices.user);
  const notifications = useSelector(state => state.notificationSlices.notifications);
  const updateNotifications = useRef(false);
  const disconnectSocket = socket.disconnectSocket;
 

  // hooks and tools
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  // useContext
  const { 
    setIsOpen, setIsOpenNotifications, 
    isOpenMenu, setIsOpenMenu, 
    isOpenTrendTags, setIsOpenTrendTags,
    activeEffect, setActiveEffect
  } = useContext(GlobalContext);

  const goToProfile = async () => {
    setIsOpenMenu(false);
    setIsOpenTrendTags(false)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    params.username = user.username;
    navigator(`/profile/${params.username}`);
  }

  const goCreateContent = () => {
    navigator('/createContent');
    setIsOpenMenu(false);
    setIsOpenTrendTags(false)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const goHome = () => {
    navigator('/')
    setIsOpenMenu(false);
    setIsOpenTrendTags(false)
    dispatch(restartUserSelected());
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const goExplore = () => {
    navigator('/explore')
    dispatch(restartPostState())
    setIsOpenMenu(false);
    setIsOpenTrendTags(false)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }

  const handleLogout = () => {
    if (window.confirm('Desea cerrar sesión?')) {
      dispatch(logout());
      dispatch(restartPostsList());
      dispatch(restartNotifications());
      dispatch(resetStateLocation());
      dispatch(resetTagState());
      dispatch(restartUserSlice());
      setIsOpenMenu(false);
      disconnectSocket();
      navigator('/');
    } else {
      return;
    }
  }

  const renderImageProfileNavbarMenu = () => {

    if (user && user.imgProfile) {
      return (
        <img src={user.imgProfile} alt="image profile user auth" />
      )
    } else {
      return (
        <BiSolidUser className='iconNavbar' />
      )
    }

  }

  const renderIconNewFollowUpRequest = () => {
    if (!isLogged) return;
    if (user.followUpRequest) {
      const followUpRequests = user.followUpRequest.filter(request => request.status === 'PENDING');
      if (followUpRequests.length) {
        return (
          <>
            <FaUserPlus className='iconNewFollowUpRequest' />
            <p className='counterFollowUpRequests'>{followUpRequests.length}</p>
          </>
        )
      }
    } else {
      return (<></>)
    }
  }

  const openNotifications = async () => {
    setIsOpenNotifications(true);
    setIsOpenTrendTags(false)
    await dispatch(viewNotifications(user._id));
    await dispatch(getNotifications(user._id));
    await dispatch(getFollowUpRequests())
  }


  const renderIconNotification = () => {
    if (notifications) {
      return (
        <>
          {
            activeEffect 
            ? <img src={iconNewNotification} alt='image new notification' className='iconNotification effect_notification'/>
            : <IoMdNotifications  className={"iconNotification"}/>
          }
          <p className='counterNotifications'>{notifications.filter(item => item.status === 'PENDING').length}</p>
        </>
      )
    } else {
      return (
        <>
          <IoMdNotifications className={activeEffect ? "iconNotification effect_notification" : "iconNotification"}/>
          <p className='counterNotifications'></p>
        </>
      )
    }
  }


  return (
    <NavbarMenuContainerStyles isLogged={isLogged} isOpenMenu={isOpenMenu}>
      <LogoMediagram title={'Mediagram'} />
      <NavbarMenuListStyles isOpenMenu={isOpenMenu}>
        <NavbarMenuItemStyles onClick={goHome}>
          <ImHome3 className='iconNavbar' />
          <p>Inicio</p>
        </NavbarMenuItemStyles>
        <NavbarMenuItemStyles onClick={() => setIsOpen(true)}>
          <BiSolidSearchAlt2 className='iconNavbar' onClick={() => setIsOpen(true)} />
          <p onClick={() => setIsOpen(true)}>Buscar</p>
        </NavbarMenuItemStyles>
        <NavbarMenuItemStyles onClick={goExplore}>
          <MdExplore className='iconNavbar' />
          <p>Explorar</p>
        </NavbarMenuItemStyles>
        <NavbarMenuItemStyles>
          <AiFillMessage className='iconNavbar' />
          <p>Mensajes</p>
        </NavbarMenuItemStyles>
        <NavbarMenuItemStyles>
          <BoxNotificationNavbarMenuStyles onClick={openNotifications} ref={updateNotifications} >
            <span>
              {renderIconNotification()}
            </span>
            <span>
              {renderIconNewFollowUpRequest()}
            </span>
          </BoxNotificationNavbarMenuStyles>
        </NavbarMenuItemStyles>
        <NavbarMenuItemStyles onClick={() => goCreateContent()}>
          <HiLightBulb className='iconNavbar' />
          <p>Crear</p>
        </NavbarMenuItemStyles>
        <NavbarMenuItemStyles onClick={() => goToProfile()}>
          {
            renderImageProfileNavbarMenu()
          }
          <p>Perfil</p>
        </NavbarMenuItemStyles>
        <NavbarMenuItemStyles onClick={() => handleLogout()} isLogout={true}>
          <TbEyeClosed className='logout' />
          <p>Cerrar sesión</p>
        </NavbarMenuItemStyles>
      </NavbarMenuListStyles>
    </NavbarMenuContainerStyles>
  )
}

export default NavbarHeader