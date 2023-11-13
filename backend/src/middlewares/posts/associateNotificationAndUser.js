import Notification from "../../models/Notification.js";

export default async ( _idUser ) => {
    
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
            {
                $unwind: '$notificationBy'
            },
            {
                $match: {
                    'notificationBy._id': { $in: [ _idUser ] }
                }
            }
        ]);

        const restrictNotificationAndUser = notificationAndUser.map(notif => {
            notif.notificationBy = {
                username: notif.notificationBy.username,
                thumbnail: notif.notificationBy.thumbnail,
                _id: notif.notificationBy._id
            }
            return { ... notif }
        });

        return restrictNotificationAndUser;
    } catch (error) {
        console.error('Ocurrio un error en el middleware associateNotificationAndUser.js . Error: ', error);
        throw new Error('Ocurrio un error en el middleware associateNotificationAndUser.js . Error: ', error);
    }
}