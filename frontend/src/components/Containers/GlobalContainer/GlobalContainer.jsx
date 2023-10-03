import React, { useContext } from 'react'
import { GlobalContainerGridStyles, GlobalContainerScrollSectionStyle } from './GlobalContainerStyles'
import NavbarHeader from '../../organisms/NavbarMenu/NavbarMenu'
import { useSelector } from 'react-redux';

const GlobalContainer = ({children}) => {
  const isLogged = useSelector( state => state.authSlices.isLogged);
  return (
    <GlobalContainerGridStyles isLogged={isLogged}>
        <NavbarHeader/>
        <GlobalContainerScrollSectionStyle isLogged={isLogged}>
          {children}
        </GlobalContainerScrollSectionStyle>
    </GlobalContainerGridStyles>
    )
}

export default GlobalContainer