export default async ( userAuth,idFollowUpRequest, foundFollowUpRequest ) => {
    try {
        const indexToDelete = userAuth.followUpRequest.findIndex(request => request._id.toString() === idFollowUpRequest.toString());
        if (indexToDelete !== -1) {
            foundFollowUpRequest.status = 'REJECTED';
            userAuth.followUpRequest.splice(indexToDelete, 1);
            await userAuth.save();
          }   
    } catch (error) {
        console.error('Ocurrio un error en deleteFollowUpRequest.js. Error: ', error);
    }
}