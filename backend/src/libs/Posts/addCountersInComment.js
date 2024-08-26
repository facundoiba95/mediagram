export default async (comment) => {
    comment.counterLikes = comment.likes.length;
}