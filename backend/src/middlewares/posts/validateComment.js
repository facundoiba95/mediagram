export default async ( req, res, next ) => {
    try {
        const { content, idPost, postBy } = req.body;
        const { username, _id } = req.userAuth;

        if(!username || !_id){
            return await Promise.reject({ error: 'Debes iniciar sesión para continuar.', status: 404 });
        }

        if(validateLength({content,idPost,postBy})){
            next()
        } else {
            return await Promise.reject({ error: 'Missing fields to complete!', status: 404 });
        }
        
    } catch (error) {
        console.error('Ocurrio un error en middleware validateComment.js. Error: ', error);
        next(error);
    }
}

const validateLength = ({ content, idPost, postBy}) => {
    if(content || idPost || postBy){
        return true;
    } else {
        return false;
    }
};