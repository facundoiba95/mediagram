import Notification from "../../models/Notification.js";
import foundNotification from "./foundNotification.js";

//@params idAuth = ObjectID
//@params postBy = ObjectID
//@params type = String 
export default async (idAuth, postBy, type) => {
  try {
    const notification = await foundNotification(postBy, idAuth, type);

    const isExistNotificationInUser = notification.notificationPostedBy.some(item => item.equals(notification.foundNotification._id));

    if (isExistNotificationInUser) {
      const idsNotifications = notification.notificationPostedBy;
      
      // busca y borra la notificacion en bdd
      await Notification.findOneAndDelete({
        _id: { $in: idsNotifications },
        createdBy: idAuth,
        type
      });

      // indice de notificacion
      const indexNotification = notification.notificationPostedBy.findIndex(item => item.equals(notification.foundNotification._id));

      // borrar notificacion en usuario, user.notifications
      notification.foundUserToNotification.notifications.splice(indexNotification, 1);

      await notification.foundUserToNotification.save();

      console.log(`Notification to "${idAuth}" deleted! Notification ID: `);
    } else {
      console.log('Notification not found!');
    }

  } catch (error) {
    console.error('Ocurrio un error en deleteNotification.js. Error: ', error);
  }
};