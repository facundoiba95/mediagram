import React, { useContext, useEffect, useState } from 'react'
import { FormRegisterContainerStyles } from './RegisterStyles'
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../../Context/GlobalContext'
import ButtonResponsive from '../../atoms/ButtonResponsive/ButtonResponsive'
import { useDispatch, useSelector } from 'react-redux';
import { handleRegister, restartStatusAuthSlice } from '../../../redux/slices/authSlices/authSlices'
import Loader from '../../../../../../proyectoFinalNUCBA/src/components/molecules/Loader/Loader'

const Register = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const statusRegister = useSelector( state => state.authSlices.status );
    const messageRegister = useSelector( state => state.authSlices.message );
    const isLoading = useSelector( state => state.authSlices.isLoading );

    
    const { isLogged, setIsLogged  } = useContext(GlobalContext);
    const [ inputUsername, setInputUsername ] = useState('');
    const [ inputPassword, setInputPassword ] = useState('');
    const [ repeatPassword, setRepeatPassword ] = useState('');
    const [ inputEmail, setInputEmail ] = useState('');

    const validateInputs = () => {
        if( !inputUsername.length || !inputPassword.length || !repeatPassword.length || !inputEmail.length){
            alert('Debes completar los campos vacios');
            return;
        } else if(inputPassword !== repeatPassword){
            alert('Las contraseñas no coinciden. Por favor, revisalas!.');
            return;
        }
        return true;
    }

    const goToHome = (e) => {
        e.preventDefault();
        if(validateInputs()){
            const user = {
                username: inputUsername.trim(),
                password: inputPassword.trim(),
                email: inputEmail.trim()
            }
            dispatch(handleRegister(user));
        }
    }

    useEffect(() => {
        switch(statusRegister){
            case 200:
                alert('Se registro usuario exitosamente!. Inicia sesión para continuar.')
                dispatch(restartStatusAuthSlice());
                navigator('/');   
                break;
            case 409:
                alert(`El usuario o email ya se encuentran registrados!. Intente con uno diferente.`);
                dispatch(restartStatusAuthSlice());
                break;
            case 500:
                alert('Ocurrio un error en el servidor! No se pudo completar el registro.');
                break;
                default:
                    break;
        }
    }, [ statusRegister ])

  return (
    <TransitionContainer>
        {
            isLoading ?
            <Loader/>
            : <FormRegisterContainerStyles>
               <input type="text" required name='username' value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}/>
               <input type="password" required name='password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
               <input type="password" required value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
               <input type="email" required name='email' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>

                <ButtonResponsive 
                title={'Registrarme'}
                isAlternative={true}
                handleFunction={(e) => goToHome(e)}/>
             </FormRegisterContainerStyles>
        }
    </TransitionContainer>

    )
}

export default Register