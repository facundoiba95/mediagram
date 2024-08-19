import projectComments from "./projectComments.js"
import projectPostByUser from "./projectPostByUser.js"

export default () => {
    return {
        _id: 1,
        createdAt: 1,
        updatedAt: 1,
        comments: projectComments(),
        referTo: 1,
        description: 1,
        shareInExplore: 1,
        location: 1,
        counterLikes: 1,
        counterViews: 1,
        counterComments: 1,
        anonymViews: 1,
        textContent: 1,
        views: 1,
        likes: 1,
        thumbnail: 1,
        media_url: 1,
        tags: 1,
        postBy: 1,
        typePost: 1,
        postByUser: projectPostByUser()
    }
}