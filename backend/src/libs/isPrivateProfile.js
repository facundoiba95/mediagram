import User from "../models/User.js"
import isFollowing from "./isFollowing.js";


/*
    - la data restringida envia: 
        * imgProfile
        * username  
        * _id
        el resto de datos solo muestran la cantidad en numero de objetos que tiene cada propiedad, LENGTH
*/

const restrictDataUsersPrivateAccount = (users) => {
    const restrictData = users.map( usr => {
        usr.email = null;
        usr.followings = usr.followings.length;
        usr.followers = usr.followers.length;
        usr.histories = null;
        usr.posts = usr.posts.length;
        usr.stars = usr.stars.length;
        usr.viewsInProfile = usr.viewsInProfile.length;
        usr.likesInProfile = usr.likesInProfile.length;
        usr.greets = usr.greets.length;
        usr.createdAt = null;
        usr.updatedAt = null;
        
        return { ... usr };
    })

    return [ restrictData[0]._doc ];
}

export default async ( username, idUser ) => {
    try {
        const foundUser = await User.find({username},{ password:0 });
        if( foundUser[0].isPrivate == true){                   // perfil privado ?
            if( await isFollowing( username, idUser )){        // son seguidores ?
                return foundUser;     // devuelve datos sin restricciones
            } else {
                return restrictDataUsersPrivateAccount(foundUser); // devuelve data restringida.
            }
        } else if( foundUser[0].isPrivate == false ){
            return foundUser;
        }
    } catch (error) {
        console.error('Ocurrio un error en el modulo isPrivateProfile.js. Bloque trycatch. Error: ', error);
    }
}