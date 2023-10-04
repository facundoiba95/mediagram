import React, { useContext } from 'react'
import { NavbarMenuContainerStyles, NavbarMenuItemStyles, NavbarMenuListStyles } from './NavbarMenuStyles'
import LogoMediagram from '../../atoms/LogoMediagram/LogoMediagram'
import { ImHome3 } from 'react-icons/im';
import { BiSolidSearchAlt2, BiSolidUser } from 'react-icons/bi';
import { MdExplore } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { HiLightBulb } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { logout } from '../../../redux/slices/authSlices/authSlices';
import { restartUser, restartUserFound, setUser } from '../../../redux/slices/userSlices/userSlices';
import { GlobalContext } from '../../../Context/GlobalContext';
import { restartPostsList } from '../../../redux/slices/postSlices/postSlices';


const NavbarHeader = () => {
  const isLogged = useSelector( state => state.authSlices.isLogged );
  const user = useSelector( state => state.authSlices.user );
  const { isOpenSearchBar, setIsOpenSearchBar  } = useContext(GlobalContext);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const goProfile = () => {
    params.username = user.username;
    dispatch(setUser([user]));
    navigator(`/profile/${params.username}`);
  }

  const goCreateContent = () => {
    navigator('/createContent');
  }

  const handleLogout = () => {
    if(window.confirm('Desea cerrar sesión?')){
      dispatch(logout());
      dispatch(restartUser());
      dispatch(restartUserFound())
      dispatch(restartPostsList())
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


  return (
    <NavbarMenuContainerStyles isLogged={isLogged}>
      <LogoMediagram title={'Mediagram'} />
        <NavbarMenuListStyles>
            <NavbarMenuItemStyles onClick={() => navigator('/')}>
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
              <IoMdNotifications className='iconNavbar'/>
              <p>Notificaciónes</p>
            </NavbarMenuItemStyles>
            <NavbarMenuItemStyles onClick={() => goCreateContent()}>
              <HiLightBulb className='iconNavbar'/>
              <p>Crear</p>
            </NavbarMenuItemStyles>
            <NavbarMenuItemStyles onClick={() => goProfile()}>
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