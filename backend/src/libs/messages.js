export const acceptFollow_message = (newFollower) => `${newFollower.username} ha comenzado a seguirte!`;
export const pendingFollow_message = (newFollower) => `${newFollower.username} ha solicitado seguirte!`
export const newComment_message = (userAuth) => `${ userAuth.username } ha comentado tu post!`
export const referTo_message = (userAuth) => `${userAuth.username} te ha mencionado en una publicación.!`
export const likeComment_message = (userAuth) => `A ${ userAuth.username } le gusta tu comentario!`