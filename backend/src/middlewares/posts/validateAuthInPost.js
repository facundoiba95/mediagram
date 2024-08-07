import Jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import { config } from 'dotenv';
config();

export default async ( req,res,next ) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token || token == 'null'){
            return await Promise.reject({ error: 'Debes iniciar sesión para continuar.', status: 404 });
        } 
        
        try {
            const verifyToken = Jwt.verify(token, process.env.JWT_SECRET);
            const foundUser = await User.findOne({_id: verifyToken.id});
            if(!foundUser) return await Promise.reject({ error: 'Debes iniciar sesión para continuar.', status: 404 });
            req.userAuth = foundUser;
            next();
        } catch (error) {
            return await Promise.reject({ error:'Invalid token', status: 401 })
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware validateAuthInPost.js. Error: ', error);
        next(error);
    }
}