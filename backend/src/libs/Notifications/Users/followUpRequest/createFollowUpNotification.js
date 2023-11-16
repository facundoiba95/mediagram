import foundNotification from "../../foundNotification.js";
import Notification from "../../../../models/Notification.js";

export default async (userAuth, username, type, status ) => {
  try {

    const notification = await foundNotification( username, userAuth, type);

     const createdBy = {
         username: userAuth.username,
         thumbnail: userAuth.thumbnail,
         _id: userAuth._id
     };
   
     const newNotification = new Notification({
         type: 'follower',
         content: {
             message: `${userAuth.username} quiere seguirte!`,
             status
         },
         createdBy: createdBy,
     });
   
     notification.foundUserToNotification.notifications.unshift(newNotification._id);
     
     await notification.foundUserToNotification.save();
     await newNotification.save();

  } catch (error) {
    console.error('Ocurrio un error en createFollowUpRequest.js. Error: ', error);
  }
};