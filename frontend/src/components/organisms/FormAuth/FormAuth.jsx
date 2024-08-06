<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import { FormAuthContainerStyles } from './FormAuthStyles'
import Login from '../../molecules/Login/Login'
import { useLocation } from 'react-router-dom'
import Register from '../../molecules/Register/Register'
import { useSelector } from 'react-redux'

const FormAuth = () => {
  const location = useLocation();
  const isLogged = useSelector( state => state.authSlices.isLogged ); 
  const isLoading = useSelector( state => state.authSlices.isLoading );

  const renderFormsAuth = () =>  {
    if( location.pathname == '/defaultPage' && !isLogged){
      return (
        <Login/>
      )
    } else if(location.pathname == '/register' && !isLogged){
      return (
        <Register/>
      )
    }
  }

  const renderTitleAuth = () => {
    if(isLoading){
      return (<></>)
    } else if(location.pathname === '/defaultPage' && !isLogged ){
      return (<h2>Iniciar sesión</h2>)
    } else if(location.pathname === '/register' && !isLogged ) {
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

=======
import React, { useContext, useEffect, useState } from 'react'
import { FormAuthContainerStyles } from './FormAuthStyles'
import Login from '../../molecules/Login/Login'
import { useLocation } from 'react-router-dom'
import Register from '../../molecules/Register/Register'
import { useSelector } from 'react-redux'

const FormAuth = () => {
  const location = useLocation();
  const isLogged = useSelector( state => state.authSlices.isLogged ); 
  const isLoading = useSelector( state => state.authSlices.isLoading );

  const renderFormsAuth = () =>  {
    if( location.pathname == '/defaultPage' && !isLogged){
      return (
        <Login/>
      )
    } else if(location.pathname == '/register' && !isLogged){
      return (
        <Register/>
      )
    }
  }

  const renderTitleAuth = () => {
    if(isLoading){
      return (<></>)
    } else if(location.pathname === '/defaultPage' && !isLogged ){
      return (<h2>Iniciar sesión</h2>)
    } else if(location.pathname === '/register' && !isLogged ) {
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default FormAuth