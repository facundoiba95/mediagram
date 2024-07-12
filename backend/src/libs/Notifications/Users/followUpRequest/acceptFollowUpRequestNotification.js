import foundNotification from "../../foundNotification.js";

export default async (postBy, idAuth, type, message) => {
    try {
        const notification = await foundNotification(postBy, idAuth, type);

        notification.foundNotification.content = {
            status: 'ACCEPT',
            message
        }
        
        await notification.foundNotification.save();
    } catch (error) {
        console.error('Ocurrio un error al cambiar el estado de la followUpRequest. En "acceptFollowUpRequestNotification.js". Error: ', error)
    }
}