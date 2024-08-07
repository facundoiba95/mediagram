import React, { useContext, useEffect, useState } from 'react'
import { FormRegisterContainerStyles } from '../../../molecules/Register/RegisterStyles'
import TransitionContainer from '../../../Containers/TransitionContainer/TransitionContainer';
import { GoAlertFill } from 'react-icons/go';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validateLengthInputs, validatePassword, validateUsername } from '../../../../libs/validateInputs';
import { handleRegister } from '../../../../redux/slices/authSlices/authSlices';
import ModalStatusRegister from '../../../molecules/Modals/ModalStatusRegister/ModalStatusRegister';
import { GlobalContext } from '../../../../Context/GlobalContext';

const FormRegisterWindow = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const isLoading = useSelector( state => state.authSlices.isLoading );
  const { setToggleAuth } = useContext(GlobalContext);
  const [ inputUsername, setInputUsername ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');
  const [ repeatPassword, setRepeatPassword ] = useState('');
  const [ inputEmail, setInputEmail ] = useState('');
  const [ isValidate, setIsValidate ] = useState({ error: [], validate: ''});
  const [ isButtonVisible, setIsButtonVisible ] = useState(false);
  const status = useSelector( state => state.authSlices.status );
  const errorMessage = useSelector( state => state.authSlices.message );
  const isLengthInput = validateLengthInputs({ inputUsername, inputPassword, repeatPassword, inputEmail });

  const sendRegister = (e) => {
      e.preventDefault();

          const user = {
              username: inputUsername.trim(),
              password: inputPassword.trim(),
              email: inputEmail.trim()
          };

          if(isValidate.validate == true){
              if(isLengthInput.validate == true){
                  dispatch(handleRegister(user));
              } else {
                  setIsValidate(isLengthInput);
                  return;
              }
          }
      }
  
  const handleValidateUsername = (e) => {
      const inputValue = e.currentTarget.value;
      setInputUsername(inputValue);
      const result = validateUsername(inputValue);
      setIsValidate(result);
  }
  
  const handleValidatePassword = (e) => {
      const inputValue = e.currentTarget.value;
      setInputPassword(inputValue);
      const result = validatePassword(inputValue, repeatPassword);
      setIsValidate(result);
  };

  const handleRepeatPassword = (e) => {
      const inputValue = e.currentTarget.value;
      setRepeatPassword(inputValue);
      const result = validatePassword(inputPassword, inputValue);
      setIsValidate(result);
  }

  const handleValidateEmail = (e) => {
      const inputValue = e.currentTarget.value;
      setInputEmail(inputValue);
      const result = validateEmail(inputValue);
      setIsValidate(result);
  }

  useEffect(() => {
      isValidate.validate == true
      ? setIsButtonVisible(true)
      : setIsButtonVisible(false)
  }, [ isValidate.validate ])

return (
  <TransitionContainer>
      {
          isLoading 
          ? <Loader/>
          : status !== null
          ? <ModalStatusRegister status={status} error={ errorMessage } />
          : <FormRegisterContainerStyles isValidate={ isValidate.validate }>
             <input type="text" required name='username' placeholder='Nombre de usuario' value={inputUsername} onChange={(e) => handleValidateUsername(e)}/>
             <input type="text" required name='password' placeholder='Contraseña' value={inputPassword} onChange={(e) => handleValidatePassword(e)}/>
             <input type="text" required placeholder='Repetir contraseña'value={repeatPassword} onChange={(e) => handleRepeatPassword(e)}/> 
             <input type="email" required name='email' value={inputEmail} placeholder='Email' onChange={(e) => handleValidateEmail(e)}/>
               <div className='containerMessageValidationPassword'>
                 <GoAlertFill className='iconError'/>
                 <BsFillCheckCircleFill className='iconOkay'/>
                 <small>{isValidate.length ? '' : isValidate.error.map(item => item.message)}</small>
              </div>
              <button 
              className='btnRegister'
              onClick={(e) => sendRegister(e)}
              hidden={!isButtonVisible}
              >Registrarme</button>
              <button className='goLogin' onClick={() => setToggleAuth('login')}>Volver atrás</button>
           </FormRegisterContainerStyles>
      }
  </TransitionContainer>

  )
}

export default FormRegisterWindow;