import subscribeNotifications from "./subscribeNotifications.js";
import getNotifications from "./getNotifications.js";
import viewNotifications from "./viewNotifications.js";
import newNotification from "./newNotification.js";

export const rooms = new Map(); // rooms de socket.io

export default (socket) => {
    subscribeNotifications(socket);
    getNotifications(socket);
    viewNotifications(socket);
    newNotification(socket);
}
