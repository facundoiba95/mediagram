import User from "../models/User.js";

export const searchUser = async ( req,res ) => {
    try {
        const { valueUser } = req.params;

        if(valueUser.trim().length < 3) return;

        const foundUser = await User.find({
            $or: [
                {username: {$eq: valueUser.trim()}},{username: {$regex: valueUser.trim()}}
            ]
        },{
            password: 0,
            email: 0
        })
        
        if(!foundUser.length) return res.status(404).json({message: 'No se encontraron usuarios!', status: 404, userFound:[]})
        return res.status(200).json({message:'users searched!', status:200, userFound: foundUser});
    } catch (error) {
        console.error('Ocurrio un error en searchUser(). user.controllers.js', error.message);
        res.status(500).json({error: error.message, status:500});
    }
}


export const verifyUser = async ( req,res ) => {
    try {
        const { username } = req.body;
        const foundUser = await User.find({username}, {password: 0});
        res.status(200).json({ message: 'refresh user!', user: foundUser, status: 200}); 
    } catch (error) {
        console.error('Ocurrio un error en verifyUser(). user.controllers.js', error.message);
        res.status(error.status).json({error: error.message, status: error.status})
    }
}