import User from "../models/User.js"
import isFollowing from "./isFollowing.js";

const restrictDataUsersPrivateAccount = (users, idUser) => {
    const restrictData = users.map( usr => {
        const foundFollowUpRequest = usr.followUpRequest.filter(request => request.sentBy.find(usr => usr._id.toString() === idUser));
        usr.email = null;
        usr.followings = [];
        usr.followers = [];
        usr.posts = [];
        usr.histories = null;
        usr.stars = usr.stars.length;
        usr.viewsInProfile = usr.viewsInProfile.length;
        usr.likesInProfile = usr.likesInProfile.length;
        usr.greets = usr.greets.length;
        usr.createdAt = null;
        usr.updatedAt = null;
        usr.followUpRequest = foundFollowUpRequest;
        
        return { ... usr };
    })

    return [ restrictData[0]._doc ];
}

export const restrictFollowUpRequestData = ( foundUser, idUser ) => {
    const restrictFollowUpRequests = foundUser.map(usr => {
        const foundFollowUpRequest = usr.followUpRequest.filter(request => request.sentBy.find(usr => usr._id.toString() === idUser));
        
        usr.followUpRequest = foundFollowUpRequest;
        return {  ... usr};
    });

    return [ restrictFollowUpRequests[0]._doc ];
}

export default async ( username, idUser ) => {
    try {
        const foundUser = await User.find({ username },{ password:0 });


        if( foundUser[0].isPrivate == true){               // perfil privado ?
            if( await isFollowing( username, idUser )){    // son seguidores ?
                console.log('data sin restringir');        
                return restrictFollowUpRequestData( foundUser, idUser );                          // devuelve datos sin restricciones
            } else {
                console.log('data restringida');
                return restrictDataUsersPrivateAccount(foundUser, idUser); // devuelve data restringida.
            }
        } else if( foundUser[0].isPrivate == false ){
            console.log('no tiene cuenta privada');
            return await restrictFollowUpRequestData(foundUser, idUser);
        }
    } catch (error) {
        console.error('Ocurrio un error en el modulo isPrivateProfile.js. Bloque trycatch. Error: ', error);
    }
}