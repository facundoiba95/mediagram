<<<<<<< HEAD
export default async (post) => {
    post.counterComments = post.comments.length;
    post.counterLikes = post.likes.length;
    post.counterViews = post.views.length;

    await post.save();
=======
export default async (post) => {
    post.counterComments = post.comments.length;
    post.counterLikes = post.likes.length;
    post.counterViews = post.views.length;

    await post.save();
>>>>>>> b3173dc1 (first commit in Ubuntu)
}