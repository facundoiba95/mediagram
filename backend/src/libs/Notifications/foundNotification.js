import Notification from "../../models/Notification.js";
import User from "../../models/User.js";

//@params userID = ObjectID
//@params type = String 
export default async (userID, idNotification) => {
 
  // usuario que contiene la notificacion
  const foundUserToNotification = await User.findOne({ _id: userID }); 

  // _id de notificaciones
  const notificationPostedBy = foundUserToNotification.notifications; 

  //busca notificacion en base de datos.
  const foundNotification = await Notification.findOne({_id: idNotification});

  return {
    foundUserToNotification,
    notificationPostedBy,
    foundNotification
  }
}



// if (type === "like") {
//   foundNotification = await Notification.findOne({  // busca la notificacion en bdd
//     _id: idNotification,
//     createdBy: idAuth,
//     "content.idPost": idReferer,
//     type
//   });
// } else if(type === "follower"){
//   foundNotification = await Notification.findOne({  // busca la notificacion en bdd
//     _id: idNotification,
//     createdBy: { $in: idsUsers },
//     type
//   });
// }