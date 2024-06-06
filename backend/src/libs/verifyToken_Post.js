import Jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import User from '../models/User.js';
config();

// @params token = String
// @params idPostBy = ObjectId
export default async (token, idPostBy) => {
    try {
        if (!token || token == 'null') return { error: 'No token provided', status: 404, isLogged: false };

        try {
            const verifyToken = Jwt.verify(token, process.env.JWT_SECRET);
            const foundUser = await User.findOne({ _id: verifyToken.id });

            if (!foundUser) return { error: 'Authenticated user not found.', status: 404, isLogged: false };

            return {
                isLogged: true,
                userAuth: foundUser,
                isUserAuth: foundUser._id.equals(idPostBy)
            }
        } catch (error) {
            return { error: 'Invalid token', status: 401, isLogged: false };
        }
    } catch (error) {
        console.error('Ocurrio un error en validToken. ERROR: ', error)
        return {error: 'Invalid token', status: 500, isLogged: false};
    }
}