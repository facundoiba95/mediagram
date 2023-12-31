export default async (req,res,next) => {
    try {
        if(req.file.size > 10485760) return await Promise.reject({ error: 'El archivo excede el tamaño maximo permitido de 10.4Mb', status: 413 })
        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware verifySizeFile.js().Error: ',error.message)
        next(error);
    }
}