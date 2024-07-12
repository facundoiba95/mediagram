import Notification from "../../models/Notification.js";
import User from "../../models/User.js";

//@params postBy = ObjectID
//@params idAuth = ObjectID
//@params type = String 
export default async ( postBy, idAuth, type ) => {
  const foundUserToNotification = await User.findOne({_id: postBy}); // usuario que contiene la notificacion
  const notificationPostedBy = foundUserToNotification.notifications; // _id de notificaciones
  
  const foundNotification = await Notification.findOne({  // busca la notificacion en bdd
    _id: {$in: notificationPostedBy},
    createdBy: idAuth,
    type
  });

  return {
      foundUserToNotification,
      notificationPostedBy,
      foundNotification
  }
}