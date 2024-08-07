import Jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import mongoose from 'mongoose';

export default async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token || token == 'null'){
            req.isLogged = { isLogged: false, status: 404 };
            return await Promise.reject({ error: 'No token provided', status: 404, isLogged: false });
        } 

        let verifyTokenProvided;
        try {
            verifyTokenProvided = Jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            req.isLogged = { isLogged: false, status: 401 };
            return await Promise.reject({ error: 'Invalid token!', status: 401, isLogged: false });
        }

        if (!verifyTokenProvided){
            req.isLogged = { isLogged: false, status: 401 };
            return await Promise.reject({ error: 'Invalid token!', status: 401, isLogged: false });
        }

        req.idUser = new mongoose.Types.ObjectId(verifyTokenProvided.id)

        const foundUser = await User.findOne({ _id: req.idUser }, { password: 0 });

        if (!foundUser){
            req.isLogged = { isLogged: false, status: 404 };
            return await Promise.reject({ error: 'User not found', status: 404, isLogged: false });
        }
    
        req.isLogged = { isLogged: true, status: 200 };
        req.userAuth = foundUser;
        next();
    } catch (error) {
        next(error);
        console.error('Ocurrio un error en middleware verifyToken.js().Error: ', error);

    }
}