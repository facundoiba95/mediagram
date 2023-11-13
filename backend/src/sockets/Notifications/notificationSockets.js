import mongoose from "mongoose"
import associateNotificationAndUser from "../../middlewares/posts/associateNotificationAndUser.js"

export const getNotifications = ( socket ) => {
    socket.on('getNotifications', async (data) => {
        console.log(' GET NOTIFICATIONS');
        const _id = new mongoose.Types.ObjectId(data._id);
        const result = await associateNotificationAndUser(_id);
        socket.emit('getNotifications', result)
    })
};
