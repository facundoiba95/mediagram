import React, { useContext, useEffect } from 'react'
import { GlobalContainerGridStyles, GlobalContainerScrollSectionStyle } from './GlobalContainerStyles'
import NavbarHeader from '../../organisms/NavbarMenu/NavbarMenu'
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

const GlobalContainer = ({children}) => {
  const isLogged = useSelector( state => state.authSlices.isLogged);
  const location = useLocation();

  return (
    <GlobalContainerGridStyles isLogged={isLogged} >
        <NavbarHeader/>
        <GlobalContainerScrollSectionStyle isLogged={isLogged} isFeed={location.pathname.includes(['profile'])}>
          {children}
        </GlobalContainerScrollSectionStyle>
    </GlobalContainerGridStyles>
    )
}

export default GlobalContainer