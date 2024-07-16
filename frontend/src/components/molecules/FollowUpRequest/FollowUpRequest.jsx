import React, { useContext } from 'react'
import { FollowUpListStyles, FollowUpRequestContainerStyles, MessageNotFollowUpRequestStyles, TitleOfFollowUpRequestStyles } from './FollowUpRequestStyles'
import { useDispatch, useSelector } from 'react-redux';
import { handleFollowUpRequest } from '../../../redux/slices/userSlices/userSlices';
import { refreshUserAuth } from '../../../redux/slices/authSlices/authSlices';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../Context/GlobalContext';
import { setStatusNotification, setUserReceptor } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import FollowUpRequestItem from '../FollowUpRequestItem/FollowUpRequestItem';
import MoonLoader from '../Loaders/MoonLoaderResponsive/MoonLoaderResponsive';
import MoonLoaderResponsive from '../Loaders/MoonLoaderResponsive/MoonLoaderResponsive';

const FollowUpRequest = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();
    const { setIsOpenNotifications } = useContext(GlobalContext);
    const userAuth = useSelector(state => state.authSlices.user);
    const isLoading = useSelector(state => state.authSlices.isLoading);
    const isLoadingUser = useSelector(state => state.userSlices.isLoading);
    const notifications = useSelector(state => state.notificationSlices.notifications);
    const existPending_followUpRequest = userAuth.followUpRequest.some(request => request.status === 'PENDING');
   
    const sendRequestFollowUp = async (e) => {
        const dataFollowUpRequest = {
            username: e.currentTarget.dataset.username,
            idFollowUpRequest: e.currentTarget.dataset.idfollowuprequest,
            followUpRequestResult: e.currentTarget.dataset.result,
            imgProfile: e.currentTarget.dataset.imgprofile,
            _id: e.currentTarget.dataset.id
        };

        await dispatch(handleFollowUpRequest(dataFollowUpRequest));
        await dispatch(setStatusNotification());
        await dispatch(setUserReceptor(dataFollowUpRequest.username));
        await dispatch(refreshUserAuth());
    }

    const goToProfile = (e) => {
        const valueUser = e.currentTarget.dataset.username;
        params.username = valueUser;
        setIsOpenNotifications(false);
        navigator(`/profile/${params.username}`)
    }

    const renderFollowUpRequestList = () => {
        if (existPending_followUpRequest) {
            return userAuth.followUpRequest.filter(request => request.status === 'PENDING').map(request => {
                const { username, imgProfile, _id } = request.sentBy[0];

                return (
                    <FollowUpRequestItem
                        _id={_id}
                        request={request}
                        username={username}
                        imgProfile={imgProfile}
                        goToProfile={goToProfile}
                        sendRequestFollowUp={sendRequestFollowUp}
                        idNotification={request._id}
                    />
                )
            })
        } else {
            return (
                <MessageNotFollowUpRequestStyles>
                    <p>No tienes solicitudes pendientes.</p>
                </MessageNotFollowUpRequestStyles>
            )
        }
    }

    const renderCounterFollowUpRequestPending = () => {
        return notifications.filter(request => request.type === 'follower' && request.content.status === 'PENDING').length
    }


    return (
        <FollowUpRequestContainerStyles listFollowUpRequest={userAuth.followUpRequest.length > 0}>
            <TitleOfFollowUpRequestStyles>
                <h2>Solicitudes de seguimiento</h2>
                <p>{renderCounterFollowUpRequestPending()}</p>
            </TitleOfFollowUpRequestStyles>
            <FollowUpListStyles listFollowUpRequest={userAuth.length > 0}>
                {
                    isLoading || isLoadingUser
                        ? <MoonLoaderResponsive size={40} />
                        : renderFollowUpRequestList()
                }
            </FollowUpListStyles>
        </FollowUpRequestContainerStyles>
    )
}

export default FollowUpRequest