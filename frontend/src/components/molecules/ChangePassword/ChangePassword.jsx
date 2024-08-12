import React, { useEffect, useState } from 'react'
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer'
import { ChangeImageUserContainerStyles } from '../ChangeImageUser/ChangeImageUserStyles'
import { FormChangePasswordStyle } from './ChangePasswordStyles'
import { GoAlertFill } from 'react-icons/go';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, validateSession } from '../../../redux/slices/authSlices/authSlices';
import ModalStatusChangePassword from '../Modals/ModalStatusChangePassword/ModalStatusChangePassword';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';
import { useNavigate } from 'react-router-dom';


const ChangePassword = () => {
    const [ inputPassword, setInputPassword ] = useState(''); 
    const [ inputRepeatPassword, setInputRepeatPassword ] = useState('');
    const [ isValidate, setIsValidate ] = useState({error: '', validate: ''});
    const [ isButtonVisible, setIsButtonVisible ] = useState(false);
    const status = useSelector( state => state.authSlices.status );
    const errorMessage = useSelector( state => state.authSlices.message );
    const isLoading = useSelector( state => state.authSlices.isLoading );
    const dispatch = useDispatch()

    const handleValidateInputPassword = () => {

        //              REFACTORIZAR CODIGO, SENTENCIAS IF ANIDADAS 
        const lowerCase = /[a-z]/g;
        const upperCase = /[A-Z]/g;
        const symbol =  /[!@#$%^&*()_+-={};':"|,.<>?~]/g;
        const number = /[0-9]/g;
        const whiteSpace = /\S/g;

        if(!lowerCase.test(inputPassword)){
            setIsValidate({ error: 'Debes incluir una minúscula.', validate: false });
            setIsButtonVisible(false);
            return;
        } else if(!upperCase.test(inputPassword)){
            setIsValidate({ error: 'Debes incluir una mayúscula.', validate: false });
            setIsButtonVisible(false);
            return;
        } else if(!symbol.test(inputPassword)) {
            setIsValidate({ error: 'Debes incluir un caracter especial.', validate: false });
            setIsButtonVisible(false);
            return;
        } else if(!number.test(inputPassword)) {
            setIsValidate({ error: 'Debes incluir un número.', validate: false });
            setIsButtonVisible(false);
            return;
        } else if(!whiteSpace.test(inputPassword)) {
            setIsValidate({ error: 'No puedes incluir espacios.', validate: false });
            setIsButtonVisible(false);
            return;
        } else if(inputPassword.length < 6) {
            setIsValidate({ error: 'La contraseña debe tener al menos 6 caracteres.', validate: false });
            setIsButtonVisible(false);
            return;
        }  else if(inputPassword !== inputRepeatPassword) {
            setIsValidate({ error: 'Las contraseñas no coinciden.', validate: false });
            setIsButtonVisible(false);
            return;
        } else {
            setIsButtonVisible(true);
            setIsValidate({ error: '', validate: true });
        }
    }
    
    const sendChangePassword = async (e) => {
        e.preventDefault();
        // await dispatch(validateSession())
        if( isValidate.validate == true ){
            dispatch(changePassword(inputPassword));
        } else {
            setIsValidate({ error: 'Faltan datos por verificar! Por favor, revisa los campos.', validate: false });
        }
    }

useEffect(() => {
    handleValidateInputPassword()
}, [ inputPassword, inputRepeatPassword ] );

  return (
    <TransitionContainer>
        {
            isLoading 
            ? <LoaderResponsive/>
            : status !== null
            ? <ModalStatusChangePassword status={status} error={errorMessage} />
            : <ChangeImageUserContainerStyles>
                <h2>Cambiar contraseña.</h2>
                <ul>
                    <p>La contraseña debe tener al menos:</p>
                    <li>Una minúscula.</li>
                    <li>Una mayúscula.</li>
                    <li>Un número.</li>
                    <li>Un caracter especial: <b>{'!@#$%^&*()_+-={};:"|,.<>?~'}</b></li>
                    <li>Mayor que 6 caracteres.</li>
                </ul>
                <FormChangePasswordStyle isValidate={isButtonVisible} onSubmit={(e) => e.preventDefault()}>
                    <span>
                        <input type="text" require={true} placeholder='Nueva contraseña' value={inputPassword} onChange={(e) => setInputPassword(e.target.value.trim())}/>
                        <input type='text' require={true} placeholder='Repite nueva contraseña' value={inputRepeatPassword} onChange={(e) => setInputRepeatPassword(e.target.value.trim())}/>
                        <div className='containerMessageValidationPassword'>
                           <GoAlertFill className='iconError'/>
                           <BsFillCheckCircleFill className='iconOkay'/>
                           <small>{isValidate.error}</small>
                        </div>
                    </span>
                    <button className='btnChangePassword' hidden={!isButtonVisible} onClick={(e) => sendChangePassword(e)}>Cambiar contraseña</button>
                </FormChangePasswordStyle>
              </ChangeImageUserContainerStyles>
        }
    </TransitionContainer>
    )
}

export default ChangePassword