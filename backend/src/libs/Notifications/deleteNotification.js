import Notification from "../../models/Notification.js";
import foundNotification from "./foundNotification.js";

//@params idAuth = ObjectID
//@params userID = ObjectID
//@params type = String 
//@params idReferer = ObjectID
export default async ({idAuth, userID, idNotification}) => {
  try {
    const notification = await foundNotification(userID, idNotification);
    const { foundUserToNotification, notificationPostedBy } = notification;

    const isExistNotificationInUser = foundUserToNotification.notifications.some(item => item.equals(notification.foundNotification._id));

    if (isExistNotificationInUser) {

      // buscar y eliminar notificacion en base datos, Notification.
      const deletedNotification = await Notification.findOneAndDelete({_id: idNotification});

      // indice de notificacion
      const indexNotification = notificationPostedBy.findIndex(item => item.equals(notification.foundNotification._id));

      // borrar notificacion en usuario, User.notifications
      foundUserToNotification.notifications.splice(indexNotification, 1);

      await notification.foundUserToNotification.save();

      console.log(`Notification to "${idAuth}" deleted! Notification ID: ${deletedNotification._id}, createdBy: ${deletedNotification.createdBy}`);
    } else {
      console.log('Notification not found!');
    }

  } catch (error) {
    console.error('Ocurrio un error en deleteNotification.js. Error: ', error);
  }
};
