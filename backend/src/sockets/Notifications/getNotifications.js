<<<<<<< HEAD
import mongoose from "mongoose";
import associateNotificationAndUser from "../../libs/Posts/associateNotificationAndUser.js";

export default (socket) => {
    socket.on('getNotifications', async (data) => {
        const _id = new mongoose.Types.ObjectId(data._id);
        const result = await associateNotificationAndUser(_id);
        socket.to(socket.userAuth.username).emit('getNotifications', result)
    })
=======
import mongoose from "mongoose";
import associateNotificationAndUser from "../../libs/Posts/associateNotificationAndUser.js";

export default (socket) => {
    socket.on('getNotifications', async (data) => {
        const _id = new mongoose.Types.ObjectId(data._id);
        const result = await associateNotificationAndUser(_id);
        socket.to(socket.userAuth.username).emit('getNotifications', result)
    })
>>>>>>> b3173dc1 (first commit in Ubuntu)
}