import React, { useContext, useEffect, useState } from 'react'
import { FormLoginContainerStyles, MessageLoginContainerStyles } from '../../../molecules/Login/LoginStyles'
import TransitionContainer from '../../../Containers/TransitionContainer/TransitionContainer';
import { MoonLoader } from 'react-spinners';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { GoAlertFill } from 'react-icons/go';
import ButtonResponsive from '../../../atoms/ButtonResponsive/ButtonResponsive';
import { handleLogin, restartStatusAuthSlice } from '../../../../redux/slices/authSlices/authSlices';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../../Context/GlobalContext';

const FormLoginWindow = () => {
    const statusLogin = useSelector( state => state.authSlices.status );
    const errorMessage = useSelector( state => state.authSlices.error );
    const isLoading = useSelector( state => state.authSlices.isLoading );
    const isLogged = useSelector( state => state.authSlices.isLogged );
    const { setToggleAuth, isOpenModalWindowAuth, setIsOpenModalWindowAuth } = useContext(GlobalContext);
    const params = useParams();
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
        setToggleAuth('register')
    }

    useEffect(() => {
      switch(statusLogin){
        case 200:
          // navigator(`/getPostByID/${params.idPost}/${params.idComment ? params.idComment : ''}`);  cuando se inicia sesion se vuelve al post que estaba antes!
          setMessageLogin({ error: '', validate: isLogged });
          setIsOpenModalWindowAuth(false)
          // dispatch(restartStatusAuthSlice());
          break;
        case 404:
          setMessageLogin({ error: 'Usuario no encontrado!', validate: isLogged, type: 'username' })
          // dispatch(restartStatusAuthSlice());
          break;
        case 401:
          setMessageLogin({ error: 'Contraseña incorrecta!', validate: isLogged, type: 'password' })
          // dispatch(restartStatusAuthSlice());
          break;
        case 500:
          setMessageLogin({ error: errorMessage, validate: isLogged })
          // dispatch(restartStatusAuthSlice());
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

export default FormLoginWindow;