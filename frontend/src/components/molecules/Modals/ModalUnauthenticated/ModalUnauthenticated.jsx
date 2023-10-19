import React from 'react'
import { ModalUnauthenticatedBoxStyles, ModalUnauthenticatedContainerStyles } from './ModalUnauthenticatedStyles'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'
import { useNavigate, useParams } from 'react-router-dom'

const ModalUnauthenticated = () => {
  const params = useParams();
  const navigator = useNavigate();

  return (
    <ModalUnauthenticatedContainerStyles>
        <ModalUnauthenticatedBoxStyles>
            <LogoMediagram/>
            <span>
              {
                params.username 
                ? <small><strong>{params.username}</strong> está en Mediagram! </small>
                : <small>Acceso restringido a usuarios no autenticados.</small>
              }
            </span>
            <p>Debes <b onClick={() => navigator('/')}>iniciar sesión</b> o <b onClick={() => navigator('/register')}>registrarte</b> para conectar!</p>
        </ModalUnauthenticatedBoxStyles>
    </ModalUnauthenticatedContainerStyles>
    )
}

export default ModalUnauthenticated