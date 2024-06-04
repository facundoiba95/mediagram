import Jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import User from '../../models/User.js';
config();

export default async ( req,res,next ) => {
    try {
        const isPrivate = req.isPrivateProfile;
        
        if(!isPrivate) return next();
        
        const token = req.headers["x-access-token"];
        if (!token || token == 'null'){
            req.isLogged = false;
            return await Promise.reject({ error: 'No token provided', status: 404, isLogged: false});
        } 
        
        try {
            const verifyToken = Jwt.verify(token, process.env.JWT_SECRET);
            const foundUser = await User.findOne({_id: verifyToken.id});
            if(!foundUser){
                req.isLogged = false;
                return await Promise.reject({ error: 'Authenticated user not found.', status: 404, isLogged: false});
            }
            req.isLogged = true;
            req.userAuth = foundUser;
            next();
        } catch (error) {
            req.isLogged = false;
            return await Promise.reject({ error: 'Invalid token', status: 401, isLogged: false});
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware validateAuthInPost.js. Error: ', error);
        next(error);
    }
}