<<<<<<< HEAD
import mongoose from "mongoose";
import constants_notifications from "../../libs/Notifications/constants_notifications.js";
import associateNotificationAndUser from "../../libs/Posts/associateNotificationAndUser.js";
import Notifications from "../../models/Notification.js";

export default (socket) => {
    socket.on('viewNotifications', async (data) => {
        const _id = new mongoose.Types.ObjectId(data._id);
        const result = await associateNotificationAndUser(_id);
        const idNotifications = result.map(item => item._id);
    
        await Notifications.updateMany(
            { _id: { $in: idNotifications} },
            { "$set": {"status": constants_notifications.statusNotifications_VIEWED }}
        )
        await socket.emit('viewNotifications', result);
    })
=======
import mongoose from "mongoose";
import constants_notifications from "../../libs/Notifications/constants_notifications.js";
import associateNotificationAndUser from "../../libs/Posts/associateNotificationAndUser.js";
import Notifications from "../../models/Notification.js";

export default (socket) => {
    socket.on('viewNotifications', async (data) => {
        const _id = new mongoose.Types.ObjectId(data._id);
        const result = await associateNotificationAndUser(_id);
        const idNotifications = result.map(item => item._id);
    
        await Notifications.updateMany(
            { _id: { $in: idNotifications} },
            { "$set": {"status": constants_notifications.statusNotifications_VIEWED }}
        )
        await socket.emit('viewNotifications', result);
    })
>>>>>>> b3173dc1 (first commit in Ubuntu)
}