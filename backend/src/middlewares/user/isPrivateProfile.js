<<<<<<< HEAD
import mongoose from "mongoose";
import User from "../../models/User.js"
import isFollowing from "../../libs/Users/isFollowing.js";
import addViewInProfile from "../../libs/Users/addViewInProfile.js";

// @params users = [Object]
// @params idUserAuth = ObjectId
const restrictDataUsersPrivateAccount = (users, idUserAuth) => {
    const restrictData = users.map(usr => {
        const foundFollowUpRequest = usr.followUpRequest.filter(request => request.sentBy.find(usr => usr._id.equals(idUserAuth)));
        usr.email = null;
        usr.followings = [];
        usr.followers = [];
        usr.posts = [];
        usr.histories = null;
        usr.stars = usr.stars.length;
        usr.viewsInProfile = usr.viewsInProfile.length;
        usr.likesInProfile = usr.likesInProfile.length;
        usr.closeList = null;
        usr.greets = usr.greets.length;
        usr.createdAt = null;
        usr.updatedAt = null;
        usr.notifications = null;
        usr.followUpRequest = foundFollowUpRequest;

        return { ...usr };
    })

    return [restrictData[0]._doc];
}

// @params userRecived = [Object]
// @params idUserAuth = ObjectId
// esta funcion no tiene el nombre corrrecto segun lo que realiza
export const restrictFollowUpRequestData = (userRecived, idUserAuth) => {
    const restrictFollowUpRequests = userRecived.map(usr => {
        const foundFollowUpRequest = usr.followUpRequest.filter(request => request.sentBy.some(usr => usr._id.equals(idUserAuth)));

        if(!usr._id.equals(idUserAuth)){
            usr.closeList = [];
            usr.notifications = [];
        }

        usr.followUpRequest = foundFollowUpRequest;
        return { ...usr };
    });

    return [restrictFollowUpRequests[0]._doc];
}

// @params usernameRecived = String
// @params idUserAuth = ObjectId
export default async ( req, res, next ) => {
    const usernameRecived = req.body.username ? req.body.username : req.params.username;
    const idUserAuth = req.idUser;

    try {
        const userRecived = await User.find({ username: usernameRecived }, { password: 0, createdAt: 0, updatedAt: 0 });
        const idUserRecived = new mongoose.Types.ObjectId(userRecived[0]._id);

        if (idUserRecived.equals(idUserAuth)) {
            console.log('Peticion de usuario autenticado.')
            req.userSelected = restrictFollowUpRequestData(userRecived, idUserAuth); // devuelve datos sin restricciones
            req.privateAccount = false;
            return  next()
        } else if (userRecived[0].isPrivate == true) {
            if (await isFollowing(usernameRecived, idUserAuth)) {
                console.log('Cuenta privada, pero se siguen mutuamente. Data sin restringir');
                req.userSelected = restrictFollowUpRequestData(userRecived, idUserAuth);
                req.privateAccount = false;
                await addViewInProfile(userRecived, idUserAuth)
                return next()  // devuelve datos sin restricciones
            } else {
                console.log(`Cuenta privada. El usuario autenticado no sigue al usuario "${usernameRecived}". Data restringida`);
                req.userSelected = restrictDataUsersPrivateAccount(userRecived, idUserAuth); // devuelve datos restringidos.
                req.privateAccount = true;
                return next()
            }
        } else if (userRecived[0].isPrivate == false) {
            console.log('No tiene cuenta privada, Data sin restringir.');
            req.userSelected = await restrictFollowUpRequestData(userRecived, idUserAuth);
            req.privateAccount = false;
            await addViewInProfile(userRecived, idUserAuth)
            return next();
        }
    } catch (error) {
        console.error('Ocurrio un error en el modulo isPrivateProfile.js. Bloque trycatch. Error: ', error);
        next(error)
    }
=======
import mongoose from "mongoose";
import User from "../../models/User.js"
import isFollowing from "../../libs/Users/isFollowing.js";
import addViewInProfile from "../../libs/Users/addViewInProfile.js";

// @params users = [Object]
// @params idUserAuth = ObjectId
const restrictDataUsersPrivateAccount = (users, idUserAuth) => {
    const restrictData = users.map(usr => {
        const foundFollowUpRequest = usr.followUpRequest.filter(request => request.sentBy.find(usr => usr._id.equals(idUserAuth)));
        usr.email = null;
        usr.followings = [];
        usr.followers = [];
        usr.posts = [];
        usr.histories = null;
        usr.stars = usr.stars.length;
        usr.viewsInProfile = usr.viewsInProfile.length;
        usr.likesInProfile = usr.likesInProfile.length;
        usr.closeList = null;
        usr.greets = usr.greets.length;
        usr.createdAt = null;
        usr.updatedAt = null;
        usr.notifications = null;
        usr.followUpRequest = foundFollowUpRequest;

        return { ...usr };
    })

    return [restrictData[0]._doc];
}

// @params userRecived = [Object]
// @params idUserAuth = ObjectId
// esta funcion no tiene el nombre corrrecto segun lo que realiza
export const restrictFollowUpRequestData = (userRecived, idUserAuth) => {
    const restrictFollowUpRequests = userRecived.map(usr => {
        const foundFollowUpRequest = usr.followUpRequest.filter(request => request.sentBy.some(usr => usr._id.equals(idUserAuth)));

        if(!usr._id.equals(idUserAuth)){
            usr.closeList = [];
            usr.notifications = [];
        }

        usr.followUpRequest = foundFollowUpRequest;
        return { ...usr };
    });

    return [restrictFollowUpRequests[0]._doc];
}

// @params usernameRecived = String
// @params idUserAuth = ObjectId
export default async ( req, res, next ) => {
    const usernameRecived = req.body.username ? req.body.username : req.params.username;
    const idUserAuth = req.idUser;

    try {
        const userRecived = await User.find({ username: usernameRecived }, { password: 0, createdAt: 0, updatedAt: 0 });
        const idUserRecived = new mongoose.Types.ObjectId(userRecived[0]._id);

        if (idUserRecived.equals(idUserAuth)) {
            console.log('Peticion de usuario autenticado.')
            req.userSelected = restrictFollowUpRequestData(userRecived, idUserAuth); // devuelve datos sin restricciones
            req.privateAccount = false;
            return  next()
        } else if (userRecived[0].isPrivate == true) {
            if (await isFollowing(usernameRecived, idUserAuth)) {
                console.log('Cuenta privada, pero se siguen mutuamente. Data sin restringir');
                req.userSelected = restrictFollowUpRequestData(userRecived, idUserAuth);
                req.privateAccount = false;
                await addViewInProfile(userRecived, idUserAuth)
                return next()  // devuelve datos sin restricciones
            } else {
                console.log(`Cuenta privada. El usuario autenticado no sigue al usuario "${usernameRecived}". Data restringida`);
                req.userSelected = restrictDataUsersPrivateAccount(userRecived, idUserAuth); // devuelve datos restringidos.
                req.privateAccount = true;
                return next()
            }
        } else if (userRecived[0].isPrivate == false) {
            console.log('No tiene cuenta privada, Data sin restringir.');
            req.userSelected = await restrictFollowUpRequestData(userRecived, idUserAuth);
            req.privateAccount = false;
            await addViewInProfile(userRecived, idUserAuth)
            return next();
        }
    } catch (error) {
        console.error('Ocurrio un error en el modulo isPrivateProfile.js. Bloque trycatch. Error: ', error);
        next(error)
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}