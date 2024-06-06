import React, { useContext } from 'react'
import { ListNotificationStyles, ListNotificationsContainerStyles, TitleNotificationsStyles } from './ListNotificationsStyles'
import FollowUpRequest from '../FollowUpRequest/FollowUpRequest'
import { AiFillLeftCircle } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications, viewNotifications } from '../../../redux/slices/socketSlices/notificationSlices/notificationSlices';
import ItemNotification from '../../atoms/ItemNotification/ItemNotification';


const ListNotifications = () => {
  const { isOpenNotifications, setIsOpenNotifications } = useContext(GlobalContext);
  const notifications = useSelector(state => state.notificationSlices.notifications);
  const dispatch = useDispatch();
  const userAuth = useSelector(state => state.authSlices.user);

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
    await dispatch(viewNotifications(userAuth._id));
    await dispatch(getNotifications(userAuth._id))
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