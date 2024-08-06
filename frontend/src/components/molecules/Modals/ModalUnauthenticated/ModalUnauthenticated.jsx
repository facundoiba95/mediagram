<<<<<<< HEAD
import React, { useContext, useEffect } from 'react'
import { ModalUnauthenticatedBoxStyles, ModalUnauthenticatedContainerStyles } from './ModalUnauthenticatedStyles'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineLockClosed } from 'react-icons/hi';
import { restartPostState, restartPostsList } from '../../../../redux/slices/postSlices/postSlices'
import ThumbnailUser from '../../../atoms/ThumbnailUser/ThumbnailUser'
import { GlobalContext } from '../../../../Context/GlobalContext'

const ModalUnauthenticated = () => {
  const params = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.postSlices);
  const userByPost = error ? error.split('"')[1] : '' // ["You don't follow a ", 'facu', '']
  const statusPost = useSelector(state => state.postSlices.status);
  const { isLogged } = useSelector(state => state.authSlices);
  const { setOpenLoader } = useContext(GlobalContext);


  useEffect(() => {
    dispatch(restartPostState())
    setOpenLoader(false);
  }, [statusPost !== 200])

  const renderMessageUnauth = () => {
    if (statusPost !== 200) {
      return (
        <>
          <HiOutlineLockClosed className='iconPrivateAccount' />
          <p>Este contenido es solo para usuarios autenticados.</p>
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

=======
import React, { useContext, useEffect } from 'react'
import { ModalUnauthenticatedBoxStyles, ModalUnauthenticatedContainerStyles } from './ModalUnauthenticatedStyles'
import LogoMediagram from '../../../atoms/LogoMediagram/LogoMediagram'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineLockClosed } from 'react-icons/hi';
import { restartPostState, restartPostsList } from '../../../../redux/slices/postSlices/postSlices'
import ThumbnailUser from '../../../atoms/ThumbnailUser/ThumbnailUser'
import { GlobalContext } from '../../../../Context/GlobalContext'

const ModalUnauthenticated = () => {
  const params = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.postSlices);
  const userByPost = error ? error.split('"')[1] : '' // ["You don't follow a ", 'facu', '']
  const statusPost = useSelector(state => state.postSlices.status);
  const { isLogged } = useSelector(state => state.authSlices);
  const { setOpenLoader } = useContext(GlobalContext);


  useEffect(() => {
    dispatch(restartPostState())
    setOpenLoader(false);
  }, [statusPost !== 200])

  const renderMessageUnauth = () => {
    if (statusPost !== 200) {
      return (
        <>
          <HiOutlineLockClosed className='iconPrivateAccount' />
          <p>Este contenido es solo para usuarios autenticados.</p>
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

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ModalUnauthenticated