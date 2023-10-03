import React from 'react'
import { DefaultPageContainerStyles } from './DefaultPageStyles'
import FormAuth from '../../components/organisms/FormAuth/FormAuth'
import LogoMediagram from '../../components/atoms/LogoMediagram/LogoMediagram'
import { LogoMediagramStyle } from '../../components/atoms/LogoMediagram/LogoMediagramStyles'
import { useNavigate } from 'react-router-dom'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'

const DefaultPage = () => {
   const navigate = useNavigate();

  return (
   <TransitionContainer>
     <DefaultPageContainerStyles>
      <span>
         <h2>Bienvenido a </h2>
         <LogoMediagramStyle onClick={() => navigate('/')}>{'Mediagram'}</LogoMediagramStyle>
      </span>
        <h3>Inicia sesión o si aún no tienes una cuenta Regístrate!</h3>
   
        <FormAuth/>
     </DefaultPageContainerStyles>
   </TransitionContainer>

    )
}

export default DefaultPage