import React from 'react'
import { ContainerButtonsFollowUpRequestStyles, FollowUpItemStyles } from '../FollowUpRequest/FollowUpRequestStyles'
import { RiUserSmileFill } from 'react-icons/ri'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'

const FollowUpRequestItem = ({
    _id,
    username,
    imgProfile,
    request,
    goToProfile,
    sendRequestFollowUp
}) => {
    return (
        <FollowUpItemStyles key={_id}>
            <span data-username={username}>
                <small onClick={(e) => goToProfile(e)}>Ver pefil</small>
                <p onClick={(e) => goToProfile(e)}>{username}</p>
                {
                    imgProfile
                        ? <img src={imgProfile} alt="image user follow up request" onClick={(e) => goToProfile(e)} />
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
                    onClick={(e) => sendRequestFollowUp(e)} />

                <BsXCircle className='btnRejectRequest'
                    data-idfollowuprequest={request._id}
                    data-username={username}
                    data-result={'50d11393-dc3f-4ac4-89a6-143febd2e131'}
                    onClick={(e) => sendRequestFollowUp(e)} />
            </ContainerButtonsFollowUpRequestStyles>
        </FollowUpItemStyles>
    )
}

export default FollowUpRequestItem