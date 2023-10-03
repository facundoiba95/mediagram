export default async (req,res,next) => {
    try {
        const { typePost, postBy } = req.body;
        if( !typePost.length || !postBy.length) return await Promise.reject({ error: 'Faltan datos para completar la operacion!', status: 400});
        next();
    } catch (error) {
     next(error);   
    }
}