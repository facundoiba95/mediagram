import Jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import { config } from 'dotenv';
config();


export const verifyTokenSocket = async (data, successCallback, errorCallback) => {
    const { token } = data.handshake.auth;

    if(!token) return errorCallback('Token not provided.');

    try {
        const decodedToken = Jwt.verify(token, process.env.JWT_SECRET);
        const userAuth = await User.findById(decodedToken.id);
        
        data.decodedToken = decodedToken;
        data.userAuth = userAuth;

        successCallback();
    } catch (error) {
        console.error('Error en authJwt: ', error)
        errorCallback('Token de autenticación inválido.');
    }

}