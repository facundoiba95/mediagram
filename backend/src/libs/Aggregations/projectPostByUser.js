export default () => {
    return {
        $map: {
            input: "$postByUser",
            as: "postByUser",
            in: {
                _id: "$$postByUser._id",
                username: "$$postByUser.username",
                thumbnail: "$$postByUser.thumbnail",
                isPrivate: "$$postByUser.isPrivate"
            }
        }
    }
}