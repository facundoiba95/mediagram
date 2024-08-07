import React from 'react'
import { RiUserSmileFill } from 'react-icons/ri'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'
import { ContainerButtonsFollowUpRequestStyles, FollowUpItemStyles } from '../../organisms/FollowUpRequest/FollowUpRequestStyles'

const FollowUpRequestItem = ({
    _id,
    username,
    imgProfile,
    request,
    goToProfile,
    sendRequestFollowUp,
    idNotification
}) => {
    return (
        <FollowUpItemStyles key={_id}>
            <span data-username={username} onClick={(e) => goToProfile(e)}>
                <small >Ver pefil</small>
                <p>{username}</p>
                {
                    imgProfile
                        ? <img src={imgProfile} alt="image user follow up request" />
                        : <RiUserSmileFill className='imgProfile' />
                }
            </span>
            <ContainerButtonsFollowUpRequestStyles>
                <BsCheckCircle className='btnAcceptRequest'
                    data-idfollowuprequest={request._id}
                    data-username={username}
                    data-result={'5cc07723-451c-418f-b90a-e6b469f1f2b1'}
                    data-imgprofile={imgProfile}
                    data-id={_id}
                    data-idnotification={idNotification}
                    onClick={(e) => sendRequestFollowUp(e)}
                />

                <BsXCircle className='btnRejectRequest'
                    data-idfollowuprequest={request._id}
                    data-username={username}
                    data-result={'50d11393-dc3f-4ac4-89a6-143febd2e131'}
                    data-idnotification={idNotification}
                    onClick={(e) => sendRequestFollowUp(e)}
                />
            </ContainerButtonsFollowUpRequestStyles>
        </FollowUpItemStyles>
    )
}

export default FollowUpRequestItem