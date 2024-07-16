import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children, redirectTo, isLogged }) => {
  if (isLogged) {
    return children;
  }

  return (<Navigate to={redirectTo} />)
};



export default ProtectedRoutes;