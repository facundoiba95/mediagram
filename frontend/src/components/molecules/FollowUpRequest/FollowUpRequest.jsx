import React from 'react'
import { ContainerButtonsFollowUpRequestStyles, FollowUpItemStyles, FollowUpListStyles, FollowUpRequestContainerStyles, MessageNotFollowUpRequestStyles, TitleOfFollowUpRequestStyles } from './FollowUpRequestStyles'
import { useDispatch, useSelector } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri';
import { handleFollowUpRequest } from '../../../redux/slices/userSlices/userSlices';
import { refreshUserAuth } from '../../../redux/slices/authSlices/authSlices';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';

const FollowUpRequest = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector( state => state.authSlices.isLogged );
    const userAuth = useSelector( state => state.authSlices.user );
    const isLoading = useSelector( state => state.authSlices.isLoading );
    const isLoadingUser = useSelector( state => state.userSlices.isLoading );
    const listFollowUpRequest = userAuth;

    const sendRequestFollowUp = async (e) => {
        const dataFollowUpRequest = {
            username: e.target.dataset.username,
            idFollowUpRequest: e.target.dataset.idfollowuprequest,
            followUpRequestResult: e.target.dataset.result,
            imgProfile: e.target.dataset.imgprofile,
            _id: e.target.dataset.id
        };

        await dispatch(handleFollowUpRequest(dataFollowUpRequest));
        await dispatch(refreshUserAuth());
    }

    const renderFollowUpRequestList = () => {
        if(listFollowUpRequest){
            if(listFollowUpRequest.followUpRequest && listFollowUpRequest.followUpRequest.length){
                return listFollowUpRequest.followUpRequest.filter(request => request.status === 'PENDING').map( item => {
                    console.log(item);
                    const { username, imgProfile, _id } = item.sentBy[0];
                    return (
                        <FollowUpItemStyles key={_id}>
                          <p>{ username }</p>
                          {
                            imgProfile
                            ? <img src={imgProfile} alt="image user follow up request" />
                            : <RiUserSmileFill className='imgProfile'/>
                          }
                          <ContainerButtonsFollowUpRequestStyles>
                            <button className='btnAcceptRequest' 
                            data-idfollowuprequest={item._id} 
                            data-username={username}
                            data-result={'5cc07723-451c-418f-b90a-e6b469f1f2b1'}
                            data-imgprofile={imgProfile}
                            data-id={_id}
                            onClick={(e) => sendRequestFollowUp(e)}>Aceptar</button>
    
                            <button className='btnRejectRequest' 
                            data-idfollowuprequest={item._id} 
                            data-username={username}
                            data-result={'50d11393-dc3f-4ac4-89a6-143febd2e131'}
                            onClick={(e) => sendRequestFollowUp(e)}>Rechazar</button>
                          </ContainerButtonsFollowUpRequestStyles>
                        </FollowUpItemStyles>
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
    }


  return (
    <FollowUpRequestContainerStyles listFollowUpRequest={listFollowUpRequest && listFollowUpRequest.length}>
        <TitleOfFollowUpRequestStyles>
           <h2>Solicitudes de seguimiento</h2>
        </TitleOfFollowUpRequestStyles>
        <FollowUpListStyles listFollowUpRequest={listFollowUpRequest && listFollowUpRequest.length}>
            {
                isLoading || isLoadingUser
                ? <LoaderResponsive/>
                : renderFollowUpRequestList() 
            }
        </FollowUpListStyles>
    </FollowUpRequestContainerStyles>
    )
}

export default FollowUpRequest