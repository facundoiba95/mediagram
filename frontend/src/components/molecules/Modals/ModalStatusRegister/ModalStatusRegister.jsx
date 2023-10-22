import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { restarStatusPost } from '../../../../redux/slices/postSlices/postSlices';
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdError } from 'react-icons/md';
import { LoaderCreatePostContainerStyles } from '../../Loaders/LoaderCreatePost/LoaderCreatePostStyles';
import TransitionContainer from '../../../Containers/TransitionContainer/TransitionContainer';
import { ModalStatusCreateContentBoxStyles } from '../ModalStatusCreateContent/ModalStatusCreateContentStyles';
import { restartStatusAuthSlice } from '../../../../redux/slices/authSlices/authSlices';


    const ModalStatusRegister = ({status, error}) => {
        const navigator = useNavigate();
        const dispatch = useDispatch();
        
        const goRegister = () => {
            navigator('/register');
            dispatch(restartStatusAuthSlice());
        }

        const isSuccessfullyContent = () => {
            return (
                <>
                  <BsPatchCheckFill className='animate__animated animate__heartBeat iconStatusContent'/>
                  <h2>Felicitaciones! Ya eres parte de <b>Mediagram</b>!</h2>
                  <p><b onClick={() => navigator('/')}>Inicia sesión</b>para continuar.</p>
                </>
            )
        }
    
        const errorCreatePost = () => {
            return (
                <>
                 <MdError className='animate__animated animate__rubberBand iconStatusContent'/>
                 <h2>Error {status}! {error}</h2>
                 <span>
                    <button onClick={() => goRegister()}>Verificar datos</button>
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
                    ? isSuccessfullyContent()
                    : errorCreatePost()
                }
            </ModalStatusCreateContentBoxStyles>
            </TransitionContainer>
        </LoaderCreatePostContainerStyles>
        )
    }


export default ModalStatusRegister