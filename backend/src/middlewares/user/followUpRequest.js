/*
    la variable "foundFollowUpRequest" busca si ya existe un documento con la followUpRequest del usuario que envia la solicitud ( userToFollowing ),
    si esto existe, se reemplazan los datos, o cambia el estado de la solicitud.
    si no existe, se crea un documento nuevo con los datos del usuario solicitante dentro del usuario a seguir.

*/

import mongoose from "mongoose";

export default async ( req,res,next ) => {
    try {
        const userToFollow = req.foundUserFollower;
        const userToFollowing = req.foundUserFollowing;
        const foundFollowUpRequest = userToFollow.followUpRequest.filter(request => request.sentBy.find(usr => usr.username === userToFollowing.username));

        const newFollower = {
            imgProfile: userToFollowing.imgProfile,
            username: userToFollowing.username,
            _id: new mongoose.Types.ObjectId(userToFollowing._id)
        }

        await handleFollowUpRequest( userToFollow, newFollower, foundFollowUpRequest );
        
        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware followUpRequest.js().Error: ',error.message)
        next(error);
    }
}


const handleFollowUpRequest = async ( userToFollow, newFollower,foundFollowUpRequest ) => {
    const { isPrivate, username } = userToFollow;

    if(isPrivate){
        if(foundFollowUpRequest.length){
            foundFollowUpRequest[0].status = 'PENDING';
            await userToFollow.save();
            return await Promise.reject({ error: `Se envio la solicitud de seguimiento a "${username}"`, status: 201 })
        }

        userToFollow.followUpRequest.unshift({
            status: 'PENDING',
            sentBy: newFollower
        })
        
        await userToFollow.save();
        return await Promise.reject({ error: `Se envio la solicitud de seguimiento a "${username}"`, status: 201 })
    } else {
        if(foundFollowUpRequest.length) {
            foundFollowUpRequest[0].status = 'ACCEPT';
            await userToFollow.save();
            return;
        }

        userToFollow.followUpRequest.unshift({
            status: 'ACCEPT',
            sentBy: newFollower
        })
    
        await userToFollow.save();
    }
}