<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import { ModalAuthWindowContainerStyles, WrapperModalAuthWindowStyles } from './ModalAuthWindowStyles'
import Login from '../../Login/Login'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { ContainerFormsAuthStyles, WelcomeContentDefaultPageStyles, WelcomeMessageDefaultPageStyles } from '../../../../Views/DefaultPage/DefaultPageStyles'
import FormLoginWindow from '../../../organisms/Forms/FormLoginWindow/FormLoginWindow'
import FormRegisterWindow from '../../../organisms/Forms/FormRegisterWindow/FormRegisterWindow'
import { LogoMediagramStyle } from '../../../atoms/LogoMediagram/LogoMediagramStyles'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'
import { useSelector } from 'react-redux'

const ModalAuthWindow = () => {
  const { isOpenModalWindowAuth, setIsOpenModalWindowAuth, toggleAuth, setToggleAuth } = useContext(GlobalContext);
  const statusPost = useSelector( state => state.postSlices.status );

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
             {
              statusPost === 401
              ? <h2>Este post pertenece a una cuenta privada! Debes enviarle una solicitud de seguimiento para ver su contenido.</h2>
              : <>
                  <h2>Regístrate para explorar al máximo tu mundo!</h2>
                  <h3>Descubre todas las interacciónes dentro de la app y conécta con quién quieras!</h3>
                </>
             }
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



=======
import React, { useContext, useState } from 'react'
import { ModalAuthWindowContainerStyles, WrapperModalAuthWindowStyles } from './ModalAuthWindowStyles'
import Login from '../../Login/Login'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { ContainerFormsAuthStyles, WelcomeContentDefaultPageStyles, WelcomeMessageDefaultPageStyles } from '../../../../Views/DefaultPage/DefaultPageStyles'
import FormLoginWindow from '../../../organisms/Forms/FormLoginWindow/FormLoginWindow'
import FormRegisterWindow from '../../../organisms/Forms/FormRegisterWindow/FormRegisterWindow'
import { LogoMediagramStyle } from '../../../atoms/LogoMediagram/LogoMediagramStyles'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'
import { useSelector } from 'react-redux'

const ModalAuthWindow = () => {
  const { isOpenModalWindowAuth, setIsOpenModalWindowAuth, toggleAuth, setToggleAuth } = useContext(GlobalContext);
  const statusPost = useSelector( state => state.postSlices.status );

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
             {
              statusPost === 401
              ? <h2>Este post pertenece a una cuenta privada! Debes enviarle una solicitud de seguimiento para ver su contenido.</h2>
              : <>
                  <h2>Regístrate para explorar al máximo tu mundo!</h2>
                  <h3>Descubre todas las interacciónes dentro de la app y conécta con quién quieras!</h3>
                </>
             }
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



>>>>>>> b3173dc1 (first commit in Ubuntu)
