import React, { useEffect, useState } from 'react'
import { FormLoginContainerStyles } from './LoginStyles'
import ButtonResponsive from '../../atoms/ButtonResponsive/ButtonResponsive'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer';
import { handleLogin, restartStatusAuthSlice } from '../../../redux/slices/authSlices/authSlices';
import Loader from '../Loaders/Loader/Loader';

const Login = () => {
    const statusLogin = useSelector( state => state.authSlices.status );
    const isLoading = useSelector( state => state.authSlices.isLoading );
    
    const [ inputUsername, setInputUsername ] = useState('');
    const [ inputPassword, setInputPassword ] = useState('');
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handleFunctionLogin = (e) => {
        e.preventDefault();
        const user = {
          username: inputUsername.trim(),
          password: inputPassword.trim()
        }

        dispatch(handleLogin(user));
    }
    
    const handleFunctionRegister = (e) => {
        e.preventDefault();
        navigator('/register');
    }

    useEffect(() => {
      switch(statusLogin){
        case 200:
          navigator('/');
          dispatch(restartStatusAuthSlice());
          break;
        case 404:
          alert('Usuario inexistente! Regístrate!');
          dispatch(restartStatusAuthSlice());
          break;
        case 401:
          alert('Contraseña incorrecta.');
          dispatch(restartStatusAuthSlice());
          break;
        case 500:
          alert('Ocurrio un error en el servidor!');
          dispatch(restartStatusAuthSlice());
          break;
          default:
            break;
      }
    }, [ statusLogin ])

  return (
    <TransitionContainer>
      {
        isLoading ?
        <Loader/>
        :
        <FormLoginContainerStyles>
        <input type="text" name='username' placeholder='Username' value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}/>
        <input type="password" name='password' placeholder='Password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
        
           <ButtonResponsive 
            title={'Iniciar sesión'}
            isAlternative={false}
            handleFunction={(e) => handleFunctionLogin(e)}/>
            
            <ButtonResponsive 
            title={'Registrarme'}
            isAlternative={true}
            handleFunction={(e) => handleFunctionRegister(e)}/>
        </FormLoginContainerStyles>
      }
    </TransitionContainer>
    )
}

export default Login