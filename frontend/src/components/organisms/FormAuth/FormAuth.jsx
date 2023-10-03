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

  const renderFormsAuth = () =>  {
    if( location.pathname === '/' && isLogged === false ){
      return (
        <Login/>
      )
    } else if(location.pathname === '/register' && isLogged === false ){
      return (
        <Register/>
      )
    }
  }

  return (
    <FormAuthContainerStyles>
        {renderFormsAuth()}
    </FormAuthContainerStyles>
    )
}

export default FormAuth