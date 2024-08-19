export default () => {
    return {
        _id: "$_id",
        createdAt: { $first: "$createdAt" },
        updatedAt: { $first: "$updatedAt" },
        comments: { $push: "$comments" },
        referTo: { $first: "$referTo" },
        description: { $first: "$description" },
        shareInExplore: { $first: "$shareInExplore" },
        location: { $first: "$location" },
        counterLikes: { $first: "$counterLikes" },
        counterViews: { $first: "$counterViews" },
        counterComments: { $first: "$counterComments" },
        anonymViews: { $first: "$anonymViews" },
        textContent: { $first: "$textContent" },
        views: { $first: "$views" },
        likes: { $first: "$likes" },
        thumbnail: { $first: "$thumbnail" },
        media_url: { $first: "$media_url" },
        tags: { $first: "$tags" },
        postBy: { $first: "$postBy" },
        typePost: { $first: "$typePost" },
        postByUser: { $first: "$postByUser" }
    }
}