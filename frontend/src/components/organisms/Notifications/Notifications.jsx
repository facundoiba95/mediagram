import React, { useContext } from 'react'
import { NotificationsContainerStyles } from './NotificationsStyles'
import ListNotifications from '../../molecules/ListNotifications/ListNotifications'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useSelector } from 'react-redux'

const Notifications = () => {
    const { isOpenNotifications } = useContext( GlobalContext );
    const { isLogged } = useSelector(state => state.authSlices);
  return (
    <NotificationsContainerStyles isOpenNotifications={isOpenNotifications}>
      {
        isLogged
        ?  <ListNotifications/>
        : <></>
      }
    </NotificationsContainerStyles>
    )
}

export default Notifications