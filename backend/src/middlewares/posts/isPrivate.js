<<<<<<< HEAD
import isFollowing from "../../libs/Users/isFollowing.js";

export default async (req, res, next) => {
    try {
        const postedBy = req.associatePostAndUser[0].postBy;
        const isPrivate = req.isPrivateProfile;
        const { isLogged, userAuth, isUserAuth } = req.validation;

        if (!isPrivate) return next();
        if (isUserAuth) return next();

        if (isPrivate) {
            if (!isLogged) return await Promise.reject({ error: 'El post pertenece a una cuenta privada.', status: 403 });

            if (await isFollowing(postedBy.username, userAuth._id)) {
                return next();
            } else {
                return await Promise.reject({ error: `No sigues a "${postedBy.username}"`, status: 403 })
            }
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware isPrivate(). Error: ', error);
        next(error);
    }
=======
import isFollowing from "../../libs/Users/isFollowing.js";

export default async (req, res, next) => {
    try {
        const postedBy = req.associatePostAndUser[0].postBy;
        const isPrivate = req.isPrivateProfile;
        const { isLogged, userAuth, isUserAuth } = req.validation;

        if (!isPrivate) return next();
        if (isUserAuth) return next();

        if (isPrivate) {
            if (!isLogged) return await Promise.reject({ error: 'El post pertenece a una cuenta privada.', status: 403 });

            if (await isFollowing(postedBy.username, userAuth._id)) {
                return next();
            } else {
                return await Promise.reject({ error: `No sigues a "${postedBy.username}"`, status: 403 })
            }
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware isPrivate(). Error: ', error);
        next(error);
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
}