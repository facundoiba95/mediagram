export default async (req, res, next) => {
    try {
        const isPrivateProfile = req.isPrivateProfile; // Boolean
        const foundPost = req.associatePostAndUser; // [ Object ]
        const { isUserAuth, userAuth, isLogged } = req.validation;

        const keepAddView = () => foundPost[0].views.some(usr => usr._id.equals(userAuth._id));

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
    const newViewer = {
        username: userAuth.username,
        thumbnail: userAuth.thumbnail,
        _id: userAuth._id
    };

    foundPost[0].views.unshift(newViewer);
    foundPost[0].counterViews = foundPost[0].views.length;
    await foundPost[0].save();
}


// @params foundPost = [Object]
const addUserAnonymus = async (foundPost) => {
    foundPost[0].anonymViews = foundPost[0].anonymViews + 1;
    await foundPost[0].save();
}