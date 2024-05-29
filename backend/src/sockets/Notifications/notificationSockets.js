import mongoose from "mongoose"
import associateNotificationAndUser from "../../libs/Posts/associateNotificationAndUser.js"
import Notifications from '../../models/Notification.js';

export const getNotifications = ( socket ) => {
    socket.on('getNotifications', async (data) => {
        const _id = new mongoose.Types.ObjectId(data._id);
        const result = await associateNotificationAndUser(_id);
        socket.emit('getNotifications', result)
    })
};


export const viewNotifications = ( socket ) => {
    socket.on('viewNotifications', async (data) => {
        const _id = new mongoose.Types.ObjectId(data._id);
        const result = await associateNotificationAndUser(_id);
        const idNotifications = result.map(item => item._id);

        await Notifications.updateMany(
            { _id: { $in: idNotifications} },
            { "$set": {"status": 'VIEWED' }}
        )
        await socket.emit('viewNotifications', result);
    })
}

export const newNotification = (socket) => {
    socket.on('newNotification', (data) => {
        socket.broadcast.emit('newNotification', {
            message: 'new notification created!'
        });
    });
}