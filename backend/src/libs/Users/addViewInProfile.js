export default async (userRecived, idAuth) => {
    try {
        const isExistUserInViews = await userRecived[0].viewsInProfile.some(user => user.equals(idAuth));
        const isUserAuth = userRecived[0]._id.equals(idAuth);
        const anonymView = "ANONYM_VIEW";
        
        if(isExistUserInViews) return;
        if(isUserAuth) return;

        if(!idAuth) {
            userRecived[0].viewsInProfile.push(anonymView);
            userRecived[0].counterViews = userRecived[0].viewsInProfile.length;
        } else {
            userRecived[0].viewsInProfile.push(idAuth);
            userRecived[0].counterViews = userRecived[0].viewsInProfile.length;
        }

        await userRecived[0].save();

    } catch (error) {
        console.error('Ocurrio un error en addViewInProfile. Error: ', error);
        return await Promise.reject({error, status: 500});
    }
}