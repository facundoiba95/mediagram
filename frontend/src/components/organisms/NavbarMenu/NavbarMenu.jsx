import React, { useContext } from 'react'
import { BoxNotificationNavbarMenuStyles, NavbarMenuContainerStyles, NavbarMenuItemStyles, NavbarMenuListStyles } from './NavbarMenuStyles'
import LogoMediagram from '../../atoms/LogoMediagram/LogoMediagram'
import { ImHome3 } from 'react-icons/im';
import { BiSolidSearchAlt2, BiSolidUser } from 'react-icons/bi';
import { MdExplore } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { HiLightBulb } from 'react-icons/hi';
import { FaUserPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { logout } from '../../../redux/slices/authSlices/authSlices';
import { restartUser, restartUserFiltered, restartUserFound  } from '../../../redux/slices/userSlices/userSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { restartPostsList } from '../../../redux/slices/postSlices/postSlices';

const NavbarHeader = () => {
  // states 
  const isLogged = useSelector( state => state.authSlices.isLogged );
  const isLoading = useSelector( state => state.authSlices.isLoading );
  const user = useSelector( state => state.authSlices.user );
  // hooks and tools
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  
  // useContext
  const { isOpenSearchBar, setIsOpenSearchBar, isOpenNotifications, setIsOpenNotifications  } = useContext(GlobalContext);

  const goToProfile = async () => {
      params.username = user.username;
      navigator(`/profile/${params.username}`);
  }

  const goCreateContent = () => {
    navigator('/createContent');
  }

  const goHome = () => {
    navigator('/feed')
  }

  const handleLogout = () => {
    if(window.confirm('Desea cerrar sesión?')){
      dispatch(logout());
      dispatch(restartUser());
      dispatch(restartUserFound());
      dispatch(restartPostsList());
      dispatch(restartUserFiltered());
      navigator('/');
    } else {
      return;
    }
  }

  const renderImageProfileNavbarMenu = () => {
    
      if(user && user.imgProfile){
        return (
          <img src={user.imgProfile} alt="image profile user auth" />
        )
      } else {
        return (
           <BiSolidUser className='iconNavbar'/>
        )
      }
    
  }

  const renderIconNewFollowUpRequest = () => {
    if(!isLogged) return;
   if( user.followUpRequest ){
    const followUpRequests = user.followUpRequest.filter( request => request.status === 'PENDING' );
    if(followUpRequests.length){
      return (
        <>
            <FaUserPlus className='iconNewFollowUpRequest'/>
            <p className='counterFollowUpRequests'>{followUpRequests.length}</p>
        </>
      )
    }
   } else {
    return (<></>)
   }
  }

  const renderIconNotification = () => {
    if( user ){
      if(user.notifications){
        return (
          <>
            <IoMdNotifications className='iconNotification'/>
            <p className='counterNotifications'>{user.notifications.length}</p>
          </>
        )
      } else {
        return (
          <>
            <IoMdNotifications className='iconNotification'/>
            <p className='counterNotifications'></p>
          </>
        )
      }
     } else {
      return (
        <>
          <IoMdNotifications className='iconNotification'/>
          <p className='counterNotifications'></p>
        </>
      )
     }
  }

  return (
    <NavbarMenuContainerStyles isLogged={isLogged}>
    <LogoMediagram title={'Mediagram'} />
      <NavbarMenuListStyles>
          <NavbarMenuItemStyles onClick={() => goHome()}>
            <ImHome3 className='iconNavbar'/>
            <p>Inicio</p>
          </NavbarMenuItemStyles>
          <NavbarMenuItemStyles onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}>
            <BiSolidSearchAlt2 className='iconNavbar' onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}/>
            <p onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}>Buscar</p>
          </NavbarMenuItemStyles>
          <NavbarMenuItemStyles>
            <MdExplore className='iconNavbar'/>
            <p>Explorar</p>
          </NavbarMenuItemStyles>
          <NavbarMenuItemStyles>
            <AiFillMessage className='iconNavbar'/>
            <p>Mensajes</p>
          </NavbarMenuItemStyles>
          <NavbarMenuItemStyles>
            <BoxNotificationNavbarMenuStyles onClick={() => setIsOpenNotifications(!isOpenNotifications)}>
              <span>
                { renderIconNotification() }
              </span>
              <span>
                { renderIconNewFollowUpRequest() }
              </span>
            </BoxNotificationNavbarMenuStyles>
          </NavbarMenuItemStyles>
          <NavbarMenuItemStyles onClick={() => goCreateContent()}>
            <HiLightBulb className='iconNavbar'/>
            <p>Crear</p>
          </NavbarMenuItemStyles>
               <NavbarMenuItemStyles onClick={() => goToProfile()}>
            {
              renderImageProfileNavbarMenu()
            }
            <p>Perfil</p>
          </NavbarMenuItemStyles>
          <NavbarMenuItemStyles onClick={ () => handleLogout()} isLogout={true}>
            <p>Cerrar sesión</p>
          </NavbarMenuItemStyles>
      </NavbarMenuListStyles>
  </NavbarMenuContainerStyles>
  )
}

export default NavbarHeader