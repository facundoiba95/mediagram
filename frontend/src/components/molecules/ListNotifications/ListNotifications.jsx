import React, { useContext } from 'react'
import { ListNotificationsContainerStyles, TitleNotificationsStyles } from './ListNotificationsStyles'
import FollowUpRequest from '../FollowUpRequest/FollowUpRequest'
import { AiFillLeftCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';


const ListNotifications = () => {
    const { isOpenNotifications, setIsOpenNotifications } = useContext( GlobalContext );
  return (
    <ListNotificationsContainerStyles isOpenNotifications={isOpenNotifications}>
        <AiFillLeftCircle className='iconCloseNotifications' onClick={() => setIsOpenNotifications(!isOpenNotifications)}/>
        <TitleNotificationsStyles>
            Notificaciónes
        </TitleNotificationsStyles>
        <FollowUpRequest/>
    </ListNotificationsContainerStyles>
    )
}

export default ListNotifications