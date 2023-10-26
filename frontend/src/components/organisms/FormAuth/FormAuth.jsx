import React, { useContext, useState } from 'react'
import { FormAuthContainerStyles } from './FormAuthStyles'
import Login from '../../molecules/Login/Login'
import { useLocation } from 'react-router-dom'
import Register from '../../molecules/Register/Register'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useSelector } from 'react-redux'

const FormAuth = ({children}) => {
  const location = useLocation();
  const isLogged = useSelector( state => state.authSlices.isLogged ); 
  const isLoading = useSelector( state => state.authSlices.isLoading );

  const renderFormsAuth = () =>  {
    if( location.pathname === '/' && isLogged == false ){
      return (
        <Login/>
      )
    } else if(location.pathname === '/register' && isLogged == false ){
      return (
        <Register/>
      )
    }
  }

  const renderTitleAuth = () => {
    if(isLoading){
      return (<></>)
    } else if(location.pathname === '/' && isLogged == false){
      return (<h2>Iniciar sesión</h2>)
    } else if(location.pathname === '/register' && isLogged == false) {
      return (<h2>Registrarme</h2>)
    }
  }

  return (
    <FormAuthContainerStyles>
        {renderTitleAuth()}
        {renderFormsAuth()}
    </FormAuthContainerStyles>
    )
}

export default FormAuth