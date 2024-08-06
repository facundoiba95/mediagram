<<<<<<< HEAD
import User from "../../models/User.js";
import { notification_template_newComment, notification_template_newFollower, notification_template_newLike } from "./template_notifications.js";
import typeNotification from "./typeNotification.js";

//@params userAuth = Object
//@params userID = ObjectID
//@params type = String typeNotification.js
//@params status = String
//@params message = String
//@params idPost = ObjectID
//@params thumbnailPost = String
export default async ({ userAuth, userID, type, status, message, idPost, thumbnailPost, idComment }) => {
  try {
    const userFound = await User.findOne({ _id: userID })

    let newNotification;

    switch (type) {
      case typeNotification.FOLLOWER:
        newNotification = await notification_template_newFollower({ message, status, userAuth });
        break;
      case typeNotification.LIKE:
        newNotification = await notification_template_newLike({ thumbnailPost, idPost, userAuth });
        break;
      case typeNotification.COMMENT:
        newNotification = await notification_template_newComment({ thumbnailPost, idPost, idComment, userAuth, message });
        break;
      default:
        break;
    }

    userFound.notifications.unshift(newNotification._id);

    await userFound.save();
    await newNotification.save();

    return newNotification;
  } catch (error) {
    console.error('Ocurrio un error en newNotification.js. Error: ', error);
  }
};



=======
import User from "../../models/User.js";
import { notification_template_newComment, notification_template_newFollower, notification_template_newLike } from "./template_notifications.js";
import typeNotification from "./typeNotification.js";

//@params userAuth = Object
//@params userID = ObjectID
//@params type = String typeNotification.js
//@params status = String
//@params message = String
//@params idPost = ObjectID
//@params thumbnailPost = String
export default async ({ userAuth, userID, type, status, message, idPost, thumbnailPost, idComment }) => {
  try {
    const userFound = await User.findOne({ _id: userID })

    let newNotification;

    switch (type) {
      case typeNotification.FOLLOWER:
        newNotification = await notification_template_newFollower({ message, status, userAuth });
        break;
      case typeNotification.LIKE:
        newNotification = await notification_template_newLike({ thumbnailPost, idPost, userAuth });
        break;
      case typeNotification.COMMENT:
        newNotification = await notification_template_newComment({ thumbnailPost, idPost, idComment, userAuth, message });
        break;
      default:
        break;
    }

    userFound.notifications.unshift(newNotification._id);

    await userFound.save();
    await newNotification.save();

    return newNotification;
  } catch (error) {
    console.error('Ocurrio un error en newNotification.js. Error: ', error);
  }
};



>>>>>>> b3173dc1 (first commit in Ubuntu)
