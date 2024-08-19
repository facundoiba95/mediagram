import Notification from "../../models/Notification.js";
import constants_notifications from "../Notifications/constants_notifications.js";

export default async (_idUser) => {
    try {
        const notificationAndUser = await Notification.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: 'notifications',
                    as: 'notificationBy',
                }
            },
            { $unwind: '$notificationBy' },
            { $match: { 'notificationBy._id': { $in: [_idUser] } } },
            {
                $project: {
                    _id: 1,
                    createdBy: 1,
                    content: 1,
                    status: 1,
                    type: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    'notificationBy._id': 1,
                    'notificationBy.thumbnail': 1,
                    'notificationBy.username': 1
                }
            }
        ]).limit(constants_notifications.limitNotifications);

        const populatedNotifications = await Notification.populate(
            notificationAndUser,
            {
                path: 'createdBy',
                select: "_id username thumbnail"
            });

        return populatedNotifications;
    } catch (error) {
        console.error('Ocurrio un error en el middleware associateNotificationAndUser.js . Error: ', error);
        throw new Error('Ocurrio un error en el middleware associateNotificationAndUser.js . Error: ', error);
    }
}