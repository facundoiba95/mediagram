import Jwt from 'jsonwebtoken';
import User from '../../models/User.js';

export default async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token || token == 'null') return await Promise.reject({ error: 'No token provided', status: 404 });

        let verifyTokenProvided;
        try {
            verifyTokenProvided = Jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return await Promise.reject({ error: 'Invalid token!', status: 401 });
        }

        if (!verifyTokenProvided) return await Promise.reject({ error: 'Invalid token!', status: 401 });

        req.idUser = verifyTokenProvided.id;

        const foundUser = await User.findOne({ _id: req.idUser }, { password: 0 });

        if (!foundUser) return await Promise.reject({ error: 'User not found', status: 404 });
        
        next();
    } catch (error) {
        next(error);
        console.log(error);
    }
}