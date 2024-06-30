import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdError } from 'react-icons/md';
import { LoaderCreatePostContainerStyles } from '../../Loaders/LoaderCreatePost/LoaderCreatePostStyles';
import TransitionContainer from '../../../Containers/TransitionContainer/TransitionContainer';
import { ModalStatusCreateContentBoxStyles } from '../ModalStatusCreateContent/ModalStatusCreateContentStyles';
import 'animate.css';
import { restartStatusUser } from '../../../../redux/slices/userSlices/userSlices';

const ModalStatusUpdateImage = ({ status, error }) => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const isSuccessfullyContent = () => {
        setTimeout(() => {
            navigator(`/profile/${params.username}`);
            dispatch(restartStatusUser());
        }, 3000);

        return (
            <>
                <BsPatchCheckFill className='animate__animated animate__heartBeat iconStatusContent' />
                <pre>Se actualizo la imagen de perfil!</pre>
            </>
        )
    }

    const handleError = () => {
        return (
            <>
                <MdError className='animate__animated animate__heartBeat iconStatusContent' />
                <pre>Error {status}! {error}</pre>
                <span>
                    <button onClick={() => dispatch(restartStatusUser())}>Verificar datos</button>
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
                            : handleError()
                    }
                </ModalStatusCreateContentBoxStyles>
            </TransitionContainer>
        </LoaderCreatePostContainerStyles>
    )
}

export default ModalStatusUpdateImage