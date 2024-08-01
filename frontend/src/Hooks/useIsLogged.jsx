import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { validateSession } from '../redux/slices/authSlices/authSlices';

const useIsLogged = () => {
    const { isLogged } = useSelector(state => state.authSlices);
    const dispatch = useDispatch();
    const navigator = useNavigate();

    useEffect(() => {
        dispatch(validateSession());
    }, [])

  return isLogged;
}

export default useIsLogged