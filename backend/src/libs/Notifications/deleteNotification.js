import Notification from "../../models/Notification.js";
import foundNotification from "./foundNotification.js";

export default async (userAuth, username, type) => {
  try {
    const notification = await foundNotification( username, userAuth, type );
    
    // buscar indice de notificacion
    const isExistNotificationInUser = notification.notificationPostedBy.findIndex(item => item == notification.foundNotification._id.toString()); 

    if (isExistNotificationInUser !== -1) {
      notification.foundUserToNotification.notifications.splice(isExistNotificationInUser, 1);

      await Notification.findOneAndDelete({
        _id: notification.foundNotification._id,
        "createdBy.username": userAuth.username,
        type
      });

      await notification.foundUserToNotification.save();

      console.log(`Notification to "${userAuth.username}" deleted!`);
    } else {
      console.log('Notification not found!');
    }

  } catch (error) {
    console.error('Ocurrio un error en deleteNotification.js. Error: ', error);
  }
};