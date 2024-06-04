import React, { useContext } from 'react'
import { FollowUpListStyles, FollowUpRequestContainerStyles, MessageNotFollowUpRequestStyles, TitleOfFollowUpRequestStyles } from './FollowUpRequestStyles'
import { useDispatch, useSelector } from 'react-redux';
import { handleFollowUpRequest } from '../../../redux/slices/userSlices/userSlices';
import { refreshUserAuth } from '../../../redux/slices/authSlices/authSlices';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../Context/GlobalContext';
import { setStatusNotification } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import FollowUpRequestItem from '../FollowUpRequestItem/FollowUpRequestItem';

const FollowUpRequest = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();
    const { setIsOpenNotifications } = useContext(GlobalContext);
    const userAuth = useSelector(state => state.authSlices.user);
    const isLoading = useSelector(state => state.authSlices.isLoading);
    const isLoadingUser = useSelector(state => state.userSlices.isLoading);
    const notifications = useSelector(state => state.notificationSlices.notifications);

    const sendRequestFollowUp = async (e) => {
        const dataFollowUpRequest = {
            username: e.target.dataset.username,
            idFollowUpRequest: e.target.dataset.idfollowuprequest,
            followUpRequestResult: e.target.dataset.result,
            imgProfile: e.target.dataset.imgprofile,
            _id: e.target.dataset.id
        };

        await dispatch(handleFollowUpRequest(dataFollowUpRequest));
        await dispatch(setStatusNotification());
        await dispatch(refreshUserAuth());
    }

    const goToProfile = (e) => {
        const valueUser = e.target.dataset.username;
        params.username = valueUser;
        setIsOpenNotifications(false);
        navigator(`/profile/${params.username}`)
    }

    const renderFollowUpRequestList = () => {
        if (userAuth.followUpRequest.length) {
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
                        ? <LoaderResponsive />
                        : renderFollowUpRequestList()
                }
            </FollowUpListStyles>
        </FollowUpRequestContainerStyles>
    )
}

export default FollowUpRequest