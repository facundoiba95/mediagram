import foundNotification from "../../foundNotification.js";
import Notification from "../../../../models/Notification.js";

export default async (userAuth, postByID, type, status, message) => {
  try {

    const notification = await foundNotification(postByID, userAuth._id, type);

    const newNotification = new Notification({
      type: 'follower',
      content: {
        message,
        status
      },
      createdBy: userAuth._id,
    });

    notification.foundUserToNotification.notifications.unshift(newNotification._id);

    await notification.foundUserToNotification.save();
    await newNotification.save();

  } catch (error) {
    console.error('Ocurrio un error en createFollowUpRequest.js. Error: ', error);
  }
};