import React, { useContext } from 'react'
import { GlobalContainerGridStyles, GlobalContainerScrollSectionStyle } from './GlobalContainerStyles'
import NavbarHeader from '../../organisms/NavbarMenu/NavbarMenu'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const GlobalContainer = ({children}) => {
  const isLogged = useSelector( state => state.authSlices.isLogged);
  const location = useLocation();


  return (
    <GlobalContainerGridStyles isLogged={isLogged}>
        <NavbarHeader/>
        <GlobalContainerScrollSectionStyle isLogged={isLogged} isFeed={location.pathname === '/'}>
          {children}
        </GlobalContainerScrollSectionStyle>
    </GlobalContainerGridStyles>
    )
}

export default GlobalContainer