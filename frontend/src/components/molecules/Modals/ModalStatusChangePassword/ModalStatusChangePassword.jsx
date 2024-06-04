import React from 'react'
import { ModalStatusCreateContentBoxStyles } from '../ModalStatusCreateContent/ModalStatusCreateContentStyles'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { restartStatusAuthSlice } from '../../../../redux/slices/authSlices/authSlices';
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdError } from 'react-icons/md';
import TransitionContainer from '../../../Containers/TransitionContainer/TransitionContainer';
import { LoaderCreatePostContainerStyles } from '../../Loaders/LoaderCreatePost/LoaderCreatePostStyles';


const ModalStatusChangePassword = ({ status,error }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const isSuccessfullyChangePassword = () => {
        return (
            <>
              <BsPatchCheckFill className='animate__animated animate__heartBeat iconStatusContent'/>
              <h2>Se ha cambiado la contraseña!</h2>
              <p className='goHome' onClick={() => navigator('/feed')}>Volver al inicio</p>
           </>
        )
    }

    const errorChangePassword = () => {
        return (
            <>
             <MdError className='animate__animated animate__heartBeat iconStatusContent'/>
             <h2>Error {status}! {error}</h2>
             <span>
                <button onClick={() => dispatch(restartStatusAuthSlice())}>Verificar datos</button>
             </span>
            </>
        )
    }
  return (
    <LoaderCreatePostContainerStyles>
        <TransitionContainer>
          <ModalStatusCreateContentBoxStyles status={status === 200}>
            {
                status === 200
                ? isSuccessfullyChangePassword()
                : errorChangePassword()
            }
          </ModalStatusCreateContentBoxStyles>
        </TransitionContainer>
    </LoaderCreatePostContainerStyles>
    )
}

export default ModalStatusChangePassword