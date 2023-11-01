import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { GlobalContext } from '../../../Context/GlobalContext';

const ValidateSession = ({ children }) => {
  const isLogged = useSelector(state => state.authSlices.isLogged);
  const statusAuth = useSelector(state => state.authSlices.status);
  const { setIsOpenModalWindowAuth } = useContext(GlobalContext);

  useEffect(() => {
    if(statusAuth !== 200 && !isLogged){
      setIsOpenModalWindowAuth(true);
    } else {     
      setIsOpenModalWindowAuth(false);
    }
  }, [ statusAuth ]);

  return (
    <>
    { children }
    </>
  )
}

export default ValidateSession;
 