import React, { useContext } from 'react'
import { NotificationsContainerStyles } from './NotificationsStyles'
import ListNotifications from '../../molecules/ListNotifications/ListNotifications'
import { GlobalContext } from '../../../Context/GlobalContext'

const Notifications = () => {
    const { isOpenNotifications } = useContext( GlobalContext );
  return (
    <NotificationsContainerStyles isOpenNotifications={isOpenNotifications}>
        <ListNotifications/>
    </NotificationsContainerStyles>
    )
}

export default Notifications