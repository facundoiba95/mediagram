import foundNotification from "../../foundNotification.js";

export default async (postedBy, userAuth, type) => {
    try {
        const notification = await foundNotification(postedBy.username, userAuth, type);

        notification.foundNotification.content = {
            status: 'ACCEPT',
            message: `${notification.foundNotification.createdBy.username} ha comenzado a seguirte!`
        }
        
        await notification.foundNotification.save();  
        console.log(`${notification.foundNotification.createdBy.username} ha comenzado a seguirte!`);  
    } catch (error) {
        console.error('Ocurrio un error al cambiar el estado de la followUpRequest. En "acceptFollowUpRequestNotification.js". Error: ', error)
    }
}