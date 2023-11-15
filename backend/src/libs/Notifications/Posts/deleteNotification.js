import Notification from "../../../models/Notification.js";
import User from "../../../models/User.js";

export default async (req, postedBy,type) => {
  try {
    const foundUserToNotification = await User.findOne({ username: postedBy.username });
    const notificationPostedBy = foundUserToNotification.notifications;
    const userAuth = req.userAuth;

    const foundNotification = await Notification.findOne({
      _id: { $in: notificationPostedBy },
      "createdBy.username": userAuth.username,
      type
    });

    const isExistNotificationInUser = notificationPostedBy.findIndex(item => item == foundNotification._id.toString());

    if (isExistNotificationInUser !== -1) {
      foundUserToNotification.notifications.splice(isExistNotificationInUser, 1);

      await Notification.findOneAndDelete({
        _id: foundNotification._id,
        "createdBy.username": userAuth.username,
        type
      });

      await foundUserToNotification.save();

      console.log(`Like from "${userAuth.username}" deleted!`);
    }

  } catch (error) {
    console.error('Ocurrio un error en deleteNotificationInUser.js. Error: ', error);
  }
};