import React, { useContext } from 'react'
import { ListNotificationStyles, ListNotificationsContainerStyles, TitleNotificationsStyles } from './ListNotificationsStyles'
import { AiFillLeftCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useSelector } from 'react-redux';
import ItemNotification from '../../atoms/ItemNotification/ItemNotification';
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
    });
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

export default ListNotifications