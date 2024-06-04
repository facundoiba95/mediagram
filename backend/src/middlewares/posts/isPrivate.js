import isFollowing from "../../libs/isFollowing.js";

export default async (req,res,next) => {
    try {
        const isLogged = req.isLogged;
        const postedBy = req.associatePostAndUser[0].postBy;
        const isPrivate = req.isPrivateProfile;
        const userAuth = req.userAuth;

        if(!isPrivate) return next();

        if(isPrivate){
            if(!isLogged) return await Promise.reject({ error: 'El post pertenece a una cuenta privada.', status: 401 });

            if( await isFollowing(postedBy.username, userAuth._id ) ){
                console.log('si se siguen');
                next();
            } else {
                console.log('No se siguen');
                return await Promise.reject({ error: `You don't follow a "${postedBy.username}"`, status: 401 })
            }
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware isPrivate(). Error: ', error);
        next(error);
    }
}

/*
        if(!isLogged) return await Promise.reject({ error: error, status: error.status });


 3) se comprueba si el usuario que hizo el post tiene cuenta privada:         *** isPrivate ***
        - CUENTA PRIVADA:
             a) req.isLogged === false
                   NO DEVOLVER EL POST, SOLAMENTE EL STATUS CODE Y MENSAJE
             
            b) req.isLogged === true
                   - isFollowing(username, idUser): 
                       "username" valor del usuario recibido
                       "idUser" valor del usuario dueño del post

                       - isFollowing === true: DEVOLVER POST
                       
                       - isFollowing === false: NO DEVOLVER POST
                       
        

        - CUENTA PUBLICA:
             - DEVOLVER POST


*/