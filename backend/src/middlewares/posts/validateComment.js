<<<<<<< HEAD
export default async ( req, res, next ) => {
    try {
        const { content, _idPost, postBy } = req.body;
        const { username, _id } = req.userAuth;

        if(!username || !_id){
            return await Promise.reject({ error: 'Debes iniciar sesión para continuar.', status: 404 });
        }

        if(validateLength({content,_idPost,postBy})){
            next()
        } else {
            return await Promise.reject({ error: 'Missing fields to complete!', status: 404 });
        }
        
    } catch (error) {
        console.error('Ocurrio un error en middleware validateComment.js. Error: ', error);
        next(error);
    }
}

const validateLength = ({ content, _idPost, postBy}) => {
    if(content || _idPost || postBy){
        return true;
    } else {
        return false;
    }
=======
export default async ( req, res, next ) => {
    try {
        const { content, _idPost, postBy } = req.body;
        const { username, _id } = req.userAuth;

        if(!username || !_id){
            return await Promise.reject({ error: 'Debes iniciar sesión para continuar.', status: 404 });
        }

        if(validateLength({content,_idPost,postBy})){
            next()
        } else {
            return await Promise.reject({ error: 'Missing fields to complete!', status: 404 });
        }
        
    } catch (error) {
        console.error('Ocurrio un error en middleware validateComment.js. Error: ', error);
        next(error);
    }
}

const validateLength = ({ content, _idPost, postBy}) => {
    if(content || _idPost || postBy){
        return true;
    } else {
        return false;
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
};