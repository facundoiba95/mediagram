export default async ( req,res,next ) => {
    try {
      if(!req.file) return await Promise.reject({ error: 'Imagen inexistente', status:400 });
        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware verifyExistImage.js().Error: ',error.message)
        next(error)
    }
};