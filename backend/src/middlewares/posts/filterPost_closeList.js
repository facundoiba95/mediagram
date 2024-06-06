import handleRestrictPosts from "../../libs/Posts/handleRestrictPosts.js";

export default async (req, res, next) => {
    try {
        const idAuth = req.idUser;
        const userSelected = req.userSelected;
        const privateAccount = req.privateAccount;

        if (privateAccount) return next();

        const isExclusiveUser = userSelected[0].closeList.some(usr => usr.equals(idAuth));
        const exclude_ExclusivePosts = await handleRestrictPosts(userSelected, idAuth);

        if (!isExclusiveUser) {
            userSelected[0].posts = exclude_ExclusivePosts;
            userSelected[0].countPosts = userSelected[0].posts.length
        }

        next()
    } catch (error) {
        console.error('Ocurrio un eror en filterPost_closeList middleware. Error: ', error)
        next(error)
    }
}