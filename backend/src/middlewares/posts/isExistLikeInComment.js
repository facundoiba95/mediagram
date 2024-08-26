import deleteNotification from "../../libs/Notifications/deleteNotification.js";
import Comment from "../../models/Comment.js";

export default async (req,res,next) => {
    try {
        const { idComment } = req.params;
        const idAuth = req.idUser;
        const userAuth = req.userAuth;
        const foundComment = await Comment.findOne({ _id: idComment });
        
        const foundLike = foundComment.likes.filter(usr => usr.idUser.equals(idAuth));
        
        if(foundLike.length) {
            foundComment.likes = foundComment.likes.filter(usr => !usr.idUser.equals(idAuth));
            foundComment.counterLikes = foundComment.likes.length;
    
            const foundNotification = foundLike[0].idNotification;
            await foundComment.save();
    
            await deleteNotification({idAuth: userAuth._id, userID: foundComment.commentBy, idNotification: foundNotification});

            return res.status(200).json({message: "Unlike comment!", status: 200})
        }

        req.foundComment = foundComment;
        next();
    } catch (error) {
        console.error("Ocurrio un error en middleware isExistLikeInCOmment.js. Error: ", error);
        next(error)
    }
}