import { upperCase, number, lowerCase, symbol, whiteSpace, email } from "../../libs/regExs.js";

export const validatePassword = ( inputPassword ) => {
    let errors = [];
    if(!lowerCase.test(inputPassword)){
        errors.push({ message: 'Debes incluir una minúscula.', fail: 'lowerCase' });
    } else if(!upperCase.test(inputPassword)){
        errors.push({ message: 'Debes incluir una mayúscula', fail: 'upperCase' });
    } else if(!symbol.test(inputPassword)) {
        errors.push({ message: 'Debes incluir un caracter especial.', fail: 'symbol' });
    } else if(!number.test(inputPassword)) {
        errors.push({ message: 'Debes incluir un número.', fail: 'number' });
    } else if(whiteSpace.test(inputPassword)) {
        errors.push({ message: 'No puedes incluir espacios.', fail:'whiteSpace' });
    } else if(inputPassword.length < 6) {
        errors.push({ message: 'La contraseña debe tener al menos 6 caracteres.', fail: 'length' });
    }
    
    return {
        error: errors,
        validate: errors.length === 0,
        type: 'password'
    }
}

const validateEmail = ( inputEmail ) => {
    let errors = [];

    if(!inputEmail.length){
        errors.push({ message: 'Debes ingresar un email', fail: 'length' });
    } else if(!email.test(inputEmail)){
        errors.push({ message: 'Debes ingresar un email válido.', fail: 'email' });
    }

    return {
        error: errors,
        validate: errors.length === 0,
        type: 'email'
    }
}

const validateUsername = ( inputUsername ) => {
    let errors = [];

    if(whiteSpace.test(inputUsername)) {
        errors.push({ message: 'No puedes incluir espacios.', fail: 'whiteSpace'});
      } else if(inputUsername.length < 4) {
        errors.push({ message: 'El nombre de usuario debe tener al menos 4 caracteres', fail: 'length' });
     } 

     return {
        error: errors,
        validate: errors.length === 0,
        type: 'username'
     }
}

const validateLengthInputs = ( inputUsername, inputPassword, inputEmail ) => {
    let errors = [];
    if( !inputUsername.length || !inputPassword.length || !inputEmail.length ){
        errors.push({ message: 'Faltan ingresar datos. Por favor, verifícalos!', fail: 'length' });
    }

    return {
        error: errors,
        validate: errors.length === 0,
        type: ''
    }
}


export default async ( req,res,next ) => {
    try {
        const { username, password, email } = req.body;
        const resultValidationPassword = validatePassword(password);
        const resultValidationUsername = validateUsername(username);
        const resultValidationEmail = validateEmail(email);
        const resultValidationLength = validateLengthInputs(username, password, email);

        if(resultValidationLength.validate == false) {
            return await Promise.reject({ error: resultValidationLength.error, status: 400 })
        } else if( resultValidationUsername.validate == false ){
            return await Promise.reject({ error: resultValidationUsername.error, status: 400 })
        } else if( resultValidationPassword.validate == false ){
            return await Promise.reject({ error: resultValidationPassword.error, status: 400 })
        } else if( resultValidationEmail.validate == false ){
            return await Promise.reject({ error: resultValidationEmail.error, status: 400 })
        } else {
            next();
        }
    } catch (error) {
        console.error('Ocurrio un error en middleware validateInputs.js. Error: ', error.error );
        next(error);
    }
}

