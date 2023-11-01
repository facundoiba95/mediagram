import React, { useContext, useState } from 'react'
import { ModalAuthWindowContainerStyles, WrapperModalAuthWindowStyles } from './ModalAuthWindowStyles'
import Login from '../../Login/Login'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { ContainerFormsAuthStyles, WelcomeContentDefaultPageStyles, WelcomeMessageDefaultPageStyles } from '../../../../Views/DefaultPage/DefaultPageStyles'
import FormLoginWindow from '../../Forms/FormLoginWindow/FormLoginWindow'
import FormRegisterWindow from '../../Forms/FormRegisterWindow/FormRegisterWindow'
import { LogoMediagramStyle } from '../../../atoms/LogoMediagram/LogoMediagramStyles'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'

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
            {/* <LogoMediagramStyle>Mediagram</LogoMediagramStyle> */}
            <LogoMediagram/>
             <h2>Regístrate para explorar al máximo tu mundo!</h2>
             <h3>Descubre todas las interacciónes dentro de la app y conécta con quién quieras!</h3>
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



