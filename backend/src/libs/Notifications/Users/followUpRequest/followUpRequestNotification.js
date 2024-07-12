import deleteNotification from "../../deleteNotification.js";
import createFollowUpNotification from "./createFollowUpNotification.js";
import acceptFollowUpRequestNotification from "./acceptFollowUpRequestNotification.js";

//@params postBy = usuario solicitado, Object {},
//@params { username, _id } usuario solicitante / usuario autenticado
//@params status = String, "PENDING", "REJECTED", "ACCEPT"
//@params message = String
export default async ( postBy, { username, _id }, status, message) => {
    try {
        switch (status){
            case "PENDING":
                await createFollowUpNotification( {username,_id}, postBy._id, 'follower', status, message);
                break;
            case "REJECTED":
                await deleteNotification( _id, postBy._id, 'follower' );
                break;
            case "ACCEPT":
                await acceptFollowUpRequestNotification( postBy, _id, 'follower', message);
                break;
            default:
                break;
        }
    } catch (error) {
        console.error('Ocurrio un error al crear la notificacion "followUpRequestNotification.js". Error: ', error)
    }
};