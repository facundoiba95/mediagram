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
        
        if(!foundUser.length) return res.status(404).json({message: 'No se encontraron usuarios!', status: 404, user:[]})
        return res.status(200).json({message:'users searched!', status:200, user: foundUser});
    } catch (error) {
        console.error('Ocurrio un error en searchUser(). user.controllers.js', error.message);
        res.status(500).json({error: error.message, status:500});
    }
}