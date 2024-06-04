import deleteNotification from "../../deleteNotification.js";
import createFollowUpNotification from "./createFollowUpNotification.js";
import acceptFollowUpRequestNotification from "./acceptFollowUpRequestNotification.js";

export default async ( postBy, userAuth, status ) => {
    try {
        switch (status){
            case "PENDING":
                await createFollowUpNotification( userAuth, postBy.username, 'follower', status );
                break;
            case "REJECTED":
                await deleteNotification( userAuth, postBy.username, 'follower' );
                break;
            case "ACCEPT":
                await acceptFollowUpRequestNotification( postBy, userAuth, 'follower' );
                break;
            default:
                break;
        }
    } catch (error) {
        console.error('Ocurrio un error al crear la notificacion "followUpRequestNotification.js". Error: ', error)
    }
};