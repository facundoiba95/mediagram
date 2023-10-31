export default async ( req, res, next ) => {
    try {
        const { content, _idPost, postedBy } = req.body;
        const { username, _id } = req.userAuth;

        if(!username || !_id){
            return await Promise.reject({ error: 'Debes iniciar sesión para continuar.', status: 401 });
        }

        if(validateLength({content,_idPost,postedBy})){
            next()
        } else {
            return await Promise.reject({ error: 'Missing fields to complete!', status: 404 });
        }
        
    } catch (error) {
        console.error('Ocurrio un error en middleware validateComment.js. Error: ', error);
        next(error);
    }
}

const validateLength = ({ content, _idPost, postedBy}) => {
    console.log(content, _idPost, postedBy);
    if(content || _idPost || postedBy){
        return true;
    } else {
        return false;
    }
};