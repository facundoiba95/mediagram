export default async (req, res, next) => {
    try {
        const isPrivateProfile = req.isPrivateProfile; // Boolean
        const foundPost = req.associatePostAndUser; // [ Object ]
        const { isUserAuth, userAuth, isLogged } = req.validation;

        const keepAddView = () => foundPost[0].views.some(usr => usr.equals(userAuth._id));

        if (!isPrivateProfile) {
            if (!isLogged) {
                await addUserAnonymus(foundPost);
                return next();
            } else if (isUserAuth) {
                return next();
            } else {
                if (keepAddView()) return next();
                await addUserVerifed(foundPost, userAuth);
                return next();
            }
        } else {
            if (keepAddView()) return next()
            await addUserVerifed(foundPost, userAuth);
            return next();
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware addViewInPost.js. Error: ', error);
        next(error);
    }
}

// @params foundPost = [Object]
// @params userAuth = Object
const addUserVerifed = async (foundPost, userAuth) => {
    foundPost[0].views.unshift(userAuth._id);
    foundPost[0].counterViews = foundPost[0].views.length + foundPost[0].anonymViews;
    await foundPost[0].save();
}


// @params foundPost = [Object]
const addUserAnonymus = async (foundPost) => {
    foundPost[0].anonymViews = foundPost[0].anonymViews + 1;
    foundPost[0].counterViews = foundPost[0].counterViews + 1;

    await foundPost[0].save();
}