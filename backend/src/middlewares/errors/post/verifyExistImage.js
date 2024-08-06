<<<<<<< HEAD
export default async (req, res, next) => {
    try {
        const isTextContent = req.body.textContent;

        if (isTextContent) return next();

        if (!req.file) return await Promise.reject({ error: 'Imagen inexistente', status: 400 });
        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware verifyExistImage.js().Error: ', error.message)
        next(error)
    }
=======
export default async (req, res, next) => {
    try {
        const isTextContent = req.body.textContent;

        if (isTextContent) return next();

        if (!req.file) return await Promise.reject({ error: 'Imagen inexistente', status: 400 });
        next();
    } catch (error) {
        console.error('Ocurrio un error en middleware verifyExistImage.js().Error: ', error.message)
        next(error)
    }
>>>>>>> b3173dc1 (first commit in Ubuntu)
};