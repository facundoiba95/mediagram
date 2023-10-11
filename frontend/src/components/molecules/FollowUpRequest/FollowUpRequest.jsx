import React from 'react'
import { ContainerButtonsFollowUpRequestStyles, FollowUpItemStyles, FollowUpListStyles, FollowUpRequestContainerStyles, TitleOfFollowUpRequestStyles } from './FollowUpRequestStyles'

const FollowUpRequest = () => {
  return (
    <FollowUpRequestContainerStyles>
        <TitleOfFollowUpRequestStyles>
           <h2>Solicitudes de seguimiento</h2>
        </TitleOfFollowUpRequestStyles>
        <FollowUpListStyles>
            <FollowUpItemStyles>
                <p>Username</p>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/4/4d/Franciscus_in_2015.jpg'} alt="image user follow up request" />
                <ContainerButtonsFollowUpRequestStyles>
                    <button className='btnAcceptRequest'>Aceptar</button>
                    <button className='btnRejectRequest'>Rechazar</button>
                </ContainerButtonsFollowUpRequestStyles>
            </FollowUpItemStyles>
            <FollowUpItemStyles>
                <p>Username</p>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/4/4d/Franciscus_in_2015.jpg'} alt="image follow up request" />
                <ContainerButtonsFollowUpRequestStyles>
                    <button className='btnAcceptRequest'>Aceptar</button>
                    <button className='btnRejectRequest'>Rechazar</button>
                </ContainerButtonsFollowUpRequestStyles>
            </FollowUpItemStyles>
            <FollowUpItemStyles>
                <p>Username</p>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/4/4d/Franciscus_in_2015.jpg'} alt="image follow up request" />
                <ContainerButtonsFollowUpRequestStyles>
                    <button className='btnAcceptRequest'>Aceptar</button>
                    <button className='btnRejectRequest'>Rechazar</button>
                </ContainerButtonsFollowUpRequestStyles>
            </FollowUpItemStyles>
            <FollowUpItemStyles>
                <p>Username</p>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/4/4d/Franciscus_in_2015.jpg'} alt="image follow up request" />
                <ContainerButtonsFollowUpRequestStyles>
                    <button className='btnAcceptRequest'>Aceptar</button>
                    <button className='btnRejectRequest'>Rechazar</button>
                </ContainerButtonsFollowUpRequestStyles>
            </FollowUpItemStyles>
        </FollowUpListStyles>
    </FollowUpRequestContainerStyles>
    )
}

export default FollowUpRequest