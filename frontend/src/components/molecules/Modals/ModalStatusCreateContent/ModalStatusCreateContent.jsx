import React from 'react'
import { LoaderCreatePostContainerStyles } from '../../Loaders/LoaderCreatePost/LoaderCreatePostStyles'
import { ModalStatusCreateContentBoxStyles } from './ModalStatusCreateContentStyles'
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdError } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restarStatusPost } from '../../../../redux/slices/postSlices/postSlices';
import TransitionContainer from '../../../Containers/TransitionContainer/TransitionContainer';
import('animate.css');


const ModalStatusCreateContent = ({status, error}) => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.authSlices);
    const params = useParams();
    
    const isSuccessfullyContent = () => {
        params.username = user.username;
        
        setTimeout(() => {
           navigator(`/profile/${params.username}`)
           dispatch(restarStatusPost())
        }, 3000);

        return (
            <>
              <BsPatchCheckFill className='animate__animated animate__heartBeat iconStatusContent'/>
              <h2>Se creo el post correctamente!</h2>
           </>
        )
    }

    const errorCreatePost = () => {
        
        return (
            <>
             <MdError className='animate__animated animate__heartBeat iconStatusContent'/>
             <p>Error {status}: <b>{error}</b></p>
             <span>
                <button onClick={() => dispatch(restarStatusPost())}>Verificar datos</button>
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

export default ModalStatusCreateContent