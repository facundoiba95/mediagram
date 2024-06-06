import React, { useEffect } from 'react'
import { ModalUnauthenticatedBoxStyles, ModalUnauthenticatedContainerStyles } from './ModalUnauthenticatedStyles'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineLockClosed } from 'react-icons/hi';
import { restartPostState, restartPostsList } from '../../../../redux/slices/postSlices/postSlices'
import ThumbnailUser from '../../../atoms/ThumbnailUser/ThumbnailUser'

const ModalUnauthenticated = () => {
  const params = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.postSlices);
  const userByPost = error ? error.split('"')[1] : '' // ["You don't follow a ", 'facu', '']
  const statusPost = useSelector(state => state.postSlices.status);
  const { isLogged } = useSelector(state => state.authSlices);


  useEffect(() => {
    dispatch(restartPostState())
  }, [statusPost !== 200])

  const renderMessageUnauth = () => {
    if (statusPost !== 200) {
      return (
        <>
          <HiOutlineLockClosed className='iconPrivateAccount' />
          <p>Este post pertenece a una cuenta privada! Debes enviarle una solicitud de seguimiento para ver su contenido.</p>
        </>
      )
    } else if (params.username) {
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
        <LogoMediagram />
        <span>
          {renderMessageUnauth()}
        </span>
        {
          isLogged
            ? <></>
            : <p>Debes <b onClick={() => navigator('/')}>iniciar sesión</b> o <b onClick={() => navigator('/register')}>registrarte</b> para conectar!</p>
        }
        {
          isLogged
            ? <ThumbnailUser userByPost={userByPost} />
            : <></>
        }
      </ModalUnauthenticatedBoxStyles>
    </ModalUnauthenticatedContainerStyles>
  )
}

export default ModalUnauthenticated