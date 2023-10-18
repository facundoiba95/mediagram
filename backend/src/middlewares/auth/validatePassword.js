export default async ( req,res,next ) => {

        //              REFACTORIZAR CODIGO, SENTENCIAS IF ANIDADAS 
        try {
            const { password } = req.body;
            const lowerCase = /[a-z]/g;
            const upperCase = /[A-Z]/g;
            const symbol =  /[!@#$%^&*()_+-={};':"|,.<>?~]/g;
            const number = /[0-9]/g;
            const whiteSpace = /\S/g;

            if(!lowerCase.test(password)){
                return await Promise.reject({ error: 'Debes incluir una minúscula.', status: 400 });
            } else if(!upperCase.test(password)){
                return await Promise.reject({ error: 'Debes incluir una mayúscula.', status: 400 });
            } else if(!symbol.test(password)) {
                return await Promise.reject({ error: 'Debes incluir un caracter especial.', status: 400 });
            } else if(!number.test(password)) {
                return await Promise.reject({ error: 'Debes incluir un número.', status: 400 });
            } else if(!whiteSpace.test(password)) {
                return await Promise.reject({ error: 'No puedes incluir espacios.', status: 400 });
            } else if(password.length < 6) {
                return await Promise.reject({ error: 'La contraseña debe tener al menos 6 caracteres.', status: 400 });
            };
    
            next();
        } catch (error) {
            console.error('Ocurrio un error en middleware validatePassword(). Error: ', error.error);
            next(error);
        }
}