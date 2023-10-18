import { validateInputs } from "../libs/validateInputUser.js";
import Jwt from 'jsonwebtoken';
import User from "../models/User.js";
import { config } from 'dotenv';
config();

export const handleLogin = async ( req,res ) => {
    try {
        const { username, password } = req.body;
       
        const foundUser = await User.findOne({ username: username.trim() });

        if(!foundUser) return res.status(404).json({ message: 'This user is not exist!', status: 404, isLogged: false});

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
    
        if(isExistUser) return res.status(409).json({ message: 'This user or email is already exist!', status: 409 });

        if(validateInputs(username, password, email)){
            const newUser = new User({
                username: username.trim(), 
                password: password.trim(),
                email: email.trim()
            });
    
            newUser.isPrivate = false;
            newUser.imgProfile = '';
            
            await newUser.save();
            return res.status(200).json({ message: 'User created successfully!', status: 200 });
        } else {
            return res.status(409).json({ message: 'Ocurrio un error en los campos ingresados. Por favor verifiquelos!.', status: 409 });
        }

    } catch (error) {
        console.error('Ocurrio un error en handleRegister. Error: ', error);
        return res.status(500).json({message: error, status: 500 });
    }
}

export const handleRefreshUserAuth = async ( req,res ) => {
    try {
        const foundUserAuth = await User.findOne({ _id: req.idUser });
        if(!foundUserAuth) return res.status(404).json({ error: 'User not found', status: 404 });

        return res.status(200).json({ message: 'User auth refresh!', user: foundUserAuth, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en handleRefreshUserAuth(). auth.controllers.js', error.message);
        res.status(error.status).json({error: error.message, status: error.status})
    }
} 

export const changePrivacityOfAccount = async ( req,res ) => {
    try {
        const { condition } = req.body;
        const userAuth = req.userAuth;
        userAuth.isPrivate = condition;
        await userAuth.save();
        return res.status(200).json({ message: `Privacity is changed. isPrivate: "${userAuth.isPrivate}"`, status: 200 });
    } catch (error) {
        console.error('Ocurrio un error en changePrivacityOfAccount(). auth.controllers.js', error.message);
        res.status(error.status).json({error: error.message, status: error.status})
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
        res.status(error.status).json({error: error.message, status: error.status})
    }
}