import React, { useEffect, useState } from 'react'
import { FormLoginContainerStyles, MessageLoginContainerStyles } from './LoginStyles'
import ButtonResponsive from '../../atoms/ButtonResponsive/ButtonResponsive'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer';
import { handleLogin, restartStatusAuthSlice } from '../../../redux/slices/authSlices/authSlices';
import Loader from '../Loaders/Loader/Loader';
import { GoAlertFill } from 'react-icons/go';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MoonLoader } from 'react-spinners';

const Login = () => {
    const statusLogin = useSelector( state => state.authSlices.status );
    const errorMessage = useSelector( state => state.authSlices.error );
    const isLoading = useSelector( state => state.authSlices.isLoading );
    const isLogged = useSelector( state => state.authSlices.isLogged );
    const [ inputUsername, setInputUsername ] = useState('');
    const [ inputPassword, setInputPassword ] = useState('');
    const [ messageLogin, setMessageLogin ] = useState({ error: '', validate: null, type:'' }); 
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
          navigator('/')
          setMessageLogin({ error: '', validate: isLogged });
          dispatch(restartStatusAuthSlice());
          break;
        case 404:
          setMessageLogin({ error: 'Usuario no encontrado!', validate: isLogged, type: 'username' })
          dispatch(restartStatusAuthSlice());
          break;
        case 401:
          setMessageLogin({ error: 'Contraseña incorrecta!', validate: isLogged, type: 'password' })
          dispatch(restartStatusAuthSlice());
          break;
        case 500:
          setMessageLogin({ error: errorMessage, validate: isLogged })
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
        <MoonLoader size={50} color='#FF70A6' className='spinner'/>
        :
        <FormLoginContainerStyles type={messageLogin.type}>
        <input type="text" name='username' placeholder='Username' value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}/>
        <input type="password" name='password' placeholder='Password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
        <MessageLoginContainerStyles isLogged={messageLogin.validate}>
            <GoAlertFill className='iconError'/>
            <BsFillCheckCircleFill className='iconOkay'/>
            <small>{messageLogin.error}</small>
        </MessageLoginContainerStyles>
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