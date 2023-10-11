import React from 'react'
import { ContainerButtonsFollowUpRequestStyles, FollowUpItemStyles, FollowUpListStyles, FollowUpRequestContainerStyles, TitleOfFollowUpRequestStyles } from './FollowUpRequestStyles'
import { useSelector } from 'react-redux';
import { RiUserSmileFill } from 'react-icons/ri';

const FollowUpRequest = () => {
    const userAuth = useSelector( state => state.authSlices.user );
    const listFollowUpRequest = userAuth.followUpRequest;

    const renderFollowUpRequestList = () => {
        if(listFollowUpRequest){
            return listFollowUpRequest.filter(request => request.status === 'PENDING').map( item => {
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
                        <button className='btnAcceptRequest'>Aceptar</button>
                        <button className='btnRejectRequest'>Rechazar</button>
                      </ContainerButtonsFollowUpRequestStyles>
                    </FollowUpItemStyles>
                )
            })
        } else {
            return (
                <p>No tienes solicitudes pendientes</p> 
            )
        }
    }


  return (
    <FollowUpRequestContainerStyles>
        <TitleOfFollowUpRequestStyles>
           <h2>Solicitudes de seguimiento</h2>
        </TitleOfFollowUpRequestStyles>
        <FollowUpListStyles>
            { renderFollowUpRequestList() }
        </FollowUpListStyles>
    </FollowUpRequestContainerStyles>
    )
}

export default FollowUpRequest