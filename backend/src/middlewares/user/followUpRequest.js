export default async ( req,res,next ) => {
    try {
        const userToFollow = req.foundUserFollower;
        const userToFollowing = req.foundUserFollowing;
  
        const newFollower = {
            imgProfile: userToFollowing.imgProfile,
            username: userToFollowing.username,
            _id: userToFollowing._id
        }

        await handleFollowUpRequest(userToFollow, newFollower);
        
        next();
    } catch (error) {
        console.error(error)
        next(error);
    }
}


const handleFollowUpRequest = async (userToFollow, newFollower) => {
    const { isPrivate, username } = userToFollow;

    if(isPrivate){
        userToFollow.followUpRequest.unshift({
            status: 'PENDING',
            sentBy: newFollower
        })
        
        await userToFollow.save();
        return await Promise.reject({ error: `Se envio la solicitud de seguimiento a "${username}"`, status: 201 })
    } else {
        userToFollow.followUpRequest.unshift({
            status: 'ACCEPT',
            sentBy: newFollower
        })
        
        await userToFollow.save();
    }
}