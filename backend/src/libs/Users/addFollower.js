export default async ({_id, userAuth, userFollower, foundFollowUpRequest }) => {
    try {       
        foundFollowUpRequest.status = 'ACCEPT';
        userAuth.followers.unshift(_id);
        userFollower.followings.unshift(userAuth._id);

        await userAuth.save();
        await userFollower.save();
    } catch (error) {
        console.error('Ocurrio un error en la funcion addFollower(). Error', error);
        return;
    }
}