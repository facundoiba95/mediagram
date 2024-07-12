import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateSession } from '../redux/slices/authSlices/authSlices';
import { setStatusNotification } from '../redux/slices/socketSlices/notificationSlices/notificationSlices';
import { GlobalContext } from '../Context/GlobalContext';

const useIsLike = () => {
    const dispatch = useDispatch();
    const { setIsOpenModalWindowAuth } = useContext(GlobalContext);
    const { isLogged } = useSelector(state => state.authSlices);

    //@params handlerLike = RDX Toolkit Slice function()
    //@params id = ObjectID
    const sendLike = async (handlerLike, id) => {
        await dispatch(validateSession());
        if (isLogged) {
            await dispatch(handlerLike(id));
            await dispatch(setStatusNotification());
        } else {
            setIsOpenModalWindowAuth(true);
            return;
        }
    };

    return sendLike;
};

export default useIsLike;