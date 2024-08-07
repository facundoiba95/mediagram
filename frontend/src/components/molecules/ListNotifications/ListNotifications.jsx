<<<<<<< HEAD
import React, { useContext, useEffect } from 'react'
import { ListNotificationStyles, ListNotificationsContainerStyles, TitleNotificationsStyles } from './ListNotificationsStyles'
import { AiFillLeftCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications, viewNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import ItemNotification from '../../atoms/ItemNotification/ItemNotification';
import { getFollowUpRequests } from '../../../redux/slices/authSlices/authSlices';
import FollowUpRequest from '../../organisms/FollowUpRequest/FollowUpRequest';


const ListNotifications = () => {
  const { isOpenNotifications, setIsOpenNotifications } = useContext(GlobalContext);
  const notifications = useSelector(state => state.notificationSlices.notifications);

  const renderNotifications = () => {
    return notifications.map(item => {
      const { type, content, createdBy, status, createdAt } = item;
      return (
        <ItemNotification
          type={type}
          content={content}
          createdBy={createdBy}
          createdAt={createdAt}
          status={status}
        />
      )

    }).reverse();
  }

  const handleOpenNotifications = async () => {
    setIsOpenNotifications(!isOpenNotifications);
  }

  return (
    <ListNotificationsContainerStyles isOpenNotifications={isOpenNotifications}>
      <AiFillLeftCircle className='iconCloseNotifications' onClick={handleOpenNotifications} />
      <TitleNotificationsStyles>Notificaciónes</TitleNotificationsStyles>
      <FollowUpRequest />
      <ListNotificationStyles>
        {renderNotifications()}
      </ListNotificationStyles>
    </ListNotificationsContainerStyles>
  )
}

=======
import React, { useContext, useEffect } from 'react'
import { ListNotificationStyles, ListNotificationsContainerStyles, TitleNotificationsStyles } from './ListNotificationsStyles'
import { AiFillLeftCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications, viewNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import ItemNotification from '../../atoms/ItemNotification/ItemNotification';
import { getFollowUpRequests } from '../../../redux/slices/authSlices/authSlices';
import FollowUpRequest from '../../organisms/FollowUpRequest/FollowUpRequest';


const ListNotifications = () => {
  const { isOpenNotifications, setIsOpenNotifications } = useContext(GlobalContext);
  const notifications = useSelector(state => state.notificationSlices.notifications);

  const renderNotifications = () => {
    return notifications.map(item => {
      const { type, content, createdBy, status, createdAt } = item;
      return (
        <ItemNotification
          type={type}
          content={content}
          createdBy={createdBy}
          createdAt={createdAt}
          status={status}
        />
      )

    }).reverse();
  }

  const handleOpenNotifications = async () => {
    setIsOpenNotifications(!isOpenNotifications);
  }

  return (
    <ListNotificationsContainerStyles isOpenNotifications={isOpenNotifications}>
      <AiFillLeftCircle className='iconCloseNotifications' onClick={handleOpenNotifications} />
      <TitleNotificationsStyles>Notificaciónes</TitleNotificationsStyles>
      <FollowUpRequest />
      <ListNotificationStyles>
        {renderNotifications()}
      </ListNotificationStyles>
    </ListNotificationsContainerStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ListNotifications