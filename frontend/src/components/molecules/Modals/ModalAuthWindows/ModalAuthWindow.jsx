import React, { useContext, useState } from 'react'
import { ModalAuthWindowContainerStyles, WrapperModalAuthWindowStyles } from './ModalAuthWindowStyles'
import Login from '../../Login/Login'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { ContainerFormsAuthStyles, WelcomeContentDefaultPageStyles, WelcomeMessageDefaultPageStyles } from '../../../../Views/DefaultPage/DefaultPageStyles'
import FormLoginWindow from '../../Forms/FormLoginWindow/FormLoginWindow'
import FormRegisterWindow from '../../Forms/FormRegisterWindow/FormRegisterWindow'

const ModalAuthWindow = () => {
  const { isOpenModalWindowAuth, setIsOpenModalWindowAuth, toggleAuth, setToggleAuth } = useContext(GlobalContext);

  const renderAuthForms = () => {
    if(toggleAuth === 'login'){
      return (<FormLoginWindow/>)
    } else if(toggleAuth === 'register'){
      return (<FormRegisterWindow/>);
    }
  }
  
  return (
    <ModalAuthWindowContainerStyles isOpenModalWindowAuth={isOpenModalWindowAuth}>
       <WrapperModalAuthWindowStyles>
        <WelcomeContentDefaultPageStyles>
          <WelcomeMessageDefaultPageStyles>
             <h2>Registrate en <b>Mediagram</b> para explorar al máximo tu mundo!</h2>
             <button onClick={() => setIsOpenModalWindowAuth(false)}>Cerrar ventana</button>
          </WelcomeMessageDefaultPageStyles>
        </WelcomeContentDefaultPageStyles>
        <ContainerFormsAuthStyles>
          { renderAuthForms() }
        </ContainerFormsAuthStyles>
       </WrapperModalAuthWindowStyles>
    </ModalAuthWindowContainerStyles>
    )
}

export default ModalAuthWindow



