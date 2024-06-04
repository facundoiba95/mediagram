import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { validateSession } from '../../../redux/slices/authSlices/authSlices';

const ProtectedRoutes = ({ children, redirectTo, isLogged }) => {
  if (isLogged) {
    return children;
  }

  return (<Navigate to={redirectTo} />)
};



export default ProtectedRoutes;