<<<<<<< HEAD
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateSession } from '../redux/slices/authSlices/authSlices';
import { setStatusNotification, setUserReceptor } from '../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { GlobalContext } from '../Context/GlobalContext';

const useIsLike = () => {
    const dispatch = useDispatch();
    const { setIsOpenModalWindowAuth } = useContext(GlobalContext);
    const { isLogged } = useSelector(state => state.authSlices);

    //@params handlerLike = RDX Toolkit Slice function()
    //@params id = ObjectID
    const sendLike = async (handlerLike, id, username, isLike) => {
        if (isLogged) {
            await dispatch(handlerLike(id));

            // activar cuando se de like, no cuando se de dislike.
            if(!isLike) await dispatch(setStatusNotification());
            
            await dispatch(setUserReceptor(username));
        } else {
            setIsOpenModalWindowAuth(true);
            return;
        }
    };

    return sendLike;
};

=======
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateSession } from '../redux/slices/authSlices/authSlices';
import { setStatusNotification, setUserReceptor } from '../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { GlobalContext } from '../Context/GlobalContext';

const useIsLike = () => {
    const dispatch = useDispatch();
    const { setIsOpenModalWindowAuth } = useContext(GlobalContext);
    const { isLogged } = useSelector(state => state.authSlices);

    //@params handlerLike = RDX Toolkit Slice function()
    //@params id = ObjectID
    const sendLike = async (handlerLike, id, username, isLike) => {
        if (isLogged) {
            await dispatch(handlerLike(id));

            // activar cuando se de like, no cuando se de dislike.
            if(!isLike) await dispatch(setStatusNotification());
            
            await dispatch(setUserReceptor(username));
        } else {
            setIsOpenModalWindowAuth(true);
            return;
        }
    };

    return sendLike;
};

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default useIsLike;