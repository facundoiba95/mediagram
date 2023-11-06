import React from 'react'
import { ModalUnauthenticatedBoxStyles, ModalUnauthenticatedContainerStyles } from './ModalUnauthenticatedStyles'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiOutlineLockClosed } from 'react-icons/hi'; 

const ModalUnauthenticated = () => {
  const params = useParams();
  const navigator = useNavigate();
  const statusPost = useSelector( state => state.postSlices.status );

  const renderMessageUnauth = () => {
    if( statusPost !== 200){
      return (
        <>
          <HiOutlineLockClosed className='iconPrivateAccount'/>
          <p>Este post pertenece a una cuenta privada! Debes enviarle una solicitud de seguimiento para ver su contenido.</p>
        </>
      )
    } else if( params.username ) {
      return (
      <small><strong>{params.username}</strong> está en Mediagram! </small>
      )
    } else {
      return (
        <small>Acceso restringido a usuarios no autenticados.</small>
      )
    }
    
  }
  return (
    <ModalUnauthenticatedContainerStyles>
        <ModalUnauthenticatedBoxStyles>
            <LogoMediagram/>
            <span>
              { renderMessageUnauth() }
            </span>
            <p>Debes <b onClick={() => navigator('/')}>iniciar sesión</b> o <b onClick={() => navigator('/register')}>registrarte</b> para conectar!</p>
        </ModalUnauthenticatedBoxStyles>
    </ModalUnauthenticatedContainerStyles>
    )
}

export default ModalUnauthenticated