import Jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import User from '../../models/User.js';
config();

export default async ( req,res,next ) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token || token == 'null'){
            req.isLogged = false;
            req.error = { error: 'Debes iniciar sesión para continuar.', status: 404 }
            next();
        } 
        
        try {
            const verifyToken = Jwt.verify(token, process.env.JWT_SECRET);
            const foundUser = await User.findOne({_id: verifyToken.id});
            if(!foundUser){
                req.isLogged = false;
                req.error = { error: 'Debes iniciar sesión para continuar.', status: 404 }
                next();
            }
            req.isLogged = true;
            req.userAuth = foundUser;
            next();
        } catch (error) {
            req.isLogged = false;
            req.error = { error: 'Debes iniciar sesión para continuar.', status: 404 }
            next();
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware validateAuthInPost.js. Error: ', error);
        next(error);
    }
}