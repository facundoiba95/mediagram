import Jwt from 'jsonwebtoken';
import User from "../models/User.js";
import { config } from 'dotenv';
import mongoose from 'mongoose';
import changeShareInExplore from '../libs/Posts/changeShareInExplore.js';
config();

export const handleLogin = async ( req,res ) => {
    try {
        const { username, password } = req.body;
       
        const foundUser = await User.findOne({ username: username.trim() });

        if(!foundUser) return res.status(404).json({ message: 'This user is not exist!', status: 404, isLogged: false });

        const matchPassword = await User.comparePassword(password.trim(), foundUser.password);
        
        if(!matchPassword) return res.status(401).json({ isLogged: false, token: null, status:401, message: 'Invalid Password'});
         
        const token = Jwt.sign({id: foundUser._id}, process.env.JWT_SECRET,{
            expiresIn: 3000
        });
        
        return res.status(200).json({ isLogged: true, token, status:200, user: foundUser});
    } catch (error) {
        console.error('Ocurrio un error en handleLogin. Error: ', error);
        res.status(500).json({error});
    }
}

export const handleRegister = async ( req,res ) => {
    try {
        const { username, password, email } = req.body;
        const isExistUser = await User.findOne({ $or: [{ username }, { email }] });
    
        if(isExistUser) return res.status(409).json({ message: 'El usuario o el email ya estan registrados!', status: 409 });

            const newUser = new User({
                username: username.trim(), 
                password: password.trim(),
                email: email.trim()
            });
    
            newUser.isPrivate = false;
            newUser.imgProfile = '';
            
            await newUser.save();
            return res.status(200).json({ message: 'User created successfully!', status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en handleRegister. Error: ', error);
        return res.status(500).json({message: error, status: 500 });
    }
}

export const handleRefreshUserAuth = async ( req,res ) => {
    try {
        const foundUserAuth = req.userAuth;
        if(!foundUserAuth) return res.status(404).json({ error: 'User not found', status: 404 });

        return res.status(200).json({ message: 'User auth refresh!', user: foundUserAuth, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en handleRefreshUserAuth(). auth.controllers.js', error.message);
        res.status(error.status).json({ error: error.message, status: error.status })
    }
} 

export const changePrivacityOfAccount = async ( req,res ) => {
    try {
        const { condition } = req.body;
        const userAuth = req.userAuth;
        userAuth.isPrivate = condition;
        
        if(userAuth.isPrivate) {
            await changeShareInExplore(userAuth._id)
        }

        await userAuth.save();
        return res.status(200).json({ message: `Privacity is changed. isPrivate: "${userAuth.isPrivate}"`, status: 200, user: userAuth});
    } catch (error) {
        console.error('Ocurrio un error en changePrivacityOfAccount(). auth.controllers.js', error.message);
        res.status(error.status).json({ error: error.message, status: error.status })
    }
}

export const changePassword = async ( req,res ) => {
    try {
        const { password } = req.body;
        const userAuth = req.userAuth;

        userAuth.password = password;
        await userAuth.save();

        return res.status(200).json({ message: 'Is password changed successfully!', status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en changePassword(). auth.controllers.js', error.message);
        res.status(error.status).json({error: error.message, status: error.status })
    }
}

export const validateSession = async ( req,res ) => {
    try {
        const userAuth = req.userAuth;

        return res.status(req.isLogged.status).json({ 
            isLogged: req.isLogged.isLogged, 
            status: req.isLogged.status,
            user: userAuth 
        });
    } catch (error) {
        console.error('Ocurrio un error en validateSession(). auth.controllers.js. Error: ', error.error);
        return res.status(error.status).json({ error: error.error, status: error.status, isLogged: error.isLogged});
    }
}

export const updateCloseList = async (req,res) => {
    try {
        const userAuth = req.userAuth;
        const listRecived = req.body;
        const parseToObjectId = listRecived.map(ids => {
            ids = new mongoose.Types.ObjectId(ids);
            return ids;
        })

        userAuth.closeList = parseToObjectId;
        await userAuth.save();
        res.status(200).json({user: userAuth, status: 200, message: 'Se actualizo la lista de amigos.'})
    } catch (error) {
        console.error('Ocurrio un error en updateCloseList(). auth.controllers.js. Error: ', error.error);
        return res.status(error.status).json({ error: error.error, status: error.status });
    }
}