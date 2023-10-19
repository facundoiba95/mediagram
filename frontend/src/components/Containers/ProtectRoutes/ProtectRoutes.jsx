import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from '../../../Views/Home/Home';

const ProtectRoutes = ({path, element}) => {
    const isLogged = useSelector( state => state.authSlices.isLogged );
    
  return (
    <Route path={ isLogged ? path : '/' } element={ isLogged ? element : <Home/> } />
    )
}

export default ProtectRoutes