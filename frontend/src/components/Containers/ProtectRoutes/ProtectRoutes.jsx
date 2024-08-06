<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { logout, validateSession } from '../../../redux/slices/authSlices/authSlices';
import { useDispatch, useSelector } from 'react-redux';
import GlobalLoader from '../../molecules/Loaders/GlobalLoader/GlobalLoader';
import { restartUserSlice } from '../../../redux/slices/userSlices/userSlices';
import { resetTagState } from '../../../redux/slices/tagSlices/tagSlices';
import { resetStateLocation } from '../../../redux/slices/locationSlices/locationSlices';
import { restartNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { restartPostsList } from '../../../redux/slices/postSlices/postSlices';
import { GlobalContext } from '../../../Context/GlobalContext';

const ProtectedRoutes = ({ children, redirectTo }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { isLogged, isLoading } = useSelector(state => state.authSlices);
  const [sessionChecked, setSessionChecked] = useState(false);
  const { setIsOpenMenu } = useContext(GlobalContext);

  useEffect(() => {
    if (!isLogged) {
      dispatch(logout());
      dispatch(restartPostsList());
      dispatch(restartNotifications());
      dispatch(resetStateLocation());
      dispatch(resetTagState());
      dispatch(restartUserSlice());
      setIsOpenMenu(false);
      navigator(redirectTo)
    }
  }, [isLogged, dispatch, navigator])

  
  if(isLogged) {
    return children
  } else {
    return null;
  }
};

=======
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { logout, validateSession } from '../../../redux/slices/authSlices/authSlices';
import { useDispatch, useSelector } from 'react-redux';
import GlobalLoader from '../../molecules/Loaders/GlobalLoader/GlobalLoader';
import { restartUserSlice } from '../../../redux/slices/userSlices/userSlices';
import { resetTagState } from '../../../redux/slices/tagSlices/tagSlices';
import { resetStateLocation } from '../../../redux/slices/locationSlices/locationSlices';
import { restartNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { restartPostsList } from '../../../redux/slices/postSlices/postSlices';
import { GlobalContext } from '../../../Context/GlobalContext';

const ProtectedRoutes = ({ children, redirectTo }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { isLogged, isLoading } = useSelector(state => state.authSlices);
  const [sessionChecked, setSessionChecked] = useState(false);
  const { setIsOpenMenu } = useContext(GlobalContext);

  useEffect(() => {
    if (!isLogged) {
      dispatch(logout());
      dispatch(restartPostsList());
      dispatch(restartNotifications());
      dispatch(resetStateLocation());
      dispatch(resetTagState());
      dispatch(restartUserSlice());
      setIsOpenMenu(false);
      navigator(redirectTo)
    }
  }, [isLogged, dispatch, navigator])

  
  if(isLogged) {
    return children
  } else {
    return null;
  }
};

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ProtectedRoutes;