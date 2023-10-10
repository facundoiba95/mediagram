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
        
        return { ... usr };
    })

    return [ restrictData[0]._doc ];
}

export default async ( username, idUser ) => {
    try {
        const foundUser = await User.find({username},{ password:0 });

        if( foundUser[0].isPrivate == true){   
            if( await isFollowing( username, idUser )){    // perfil privado ?
                console.log('data sin restringir');        // son seguidores ?
                return foundUser;                          // devuelve datos sin restricciones
            } else {
                console.log('data restringida');
                return restrictDataUsersPrivateAccount(foundUser); // devuelve data restringida.
            }
        } else if( foundUser[0].isPrivate == false ){
            return foundUser;
        }
    } catch (error) {
        console.error('Ocurrio un error en el modulo isPrivateProfile.js. Bloque trycatch. Error: ', error);
    }
}