export default () => {
    return {
        $map: {
            input: "$comments",
            as: "comment",
            in: {
                _id: "$$comment._id",
                comment: "$$comment.comment",
                commentBy: {
                    _id: "$$comment.commentBy._id",
                    username: "$$comment.commentBy.username",
                    thumbnail: "$$comment.commentBy.thumbnail"
                },
                referenceId: "$$comment.referenceId",
                likes: "$$comment.likes",
                counterLikes: "$$comment.counterLikes",
                replies: "$$comment.replies",
                createdAt: "$$comment.createdAt",
                updatedAt: "$$comment.updatedAt"
            }
        }
    }
}