import Notification from "../../models/Notification.js";
import User from "../../models/User.js";

export default async ( username, userAuth, type ) => {
    const foundUserToNotification = await User.findOne({username}); // usuario que contiene la notificacion
    
    const notificationPostedBy = foundUserToNotification.notifications; // _id de notificaciones
    
    const foundNotification = await Notification.findOne({  // busca la notificacion en bdd
      _id: notificationPostedBy,
      "createdBy.username": userAuth.username,
      type
    });

    return {
        foundUserToNotification,
        notificationPostedBy,
        foundNotification
    }
}