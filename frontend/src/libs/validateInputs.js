// RegEx
const lowerCase = /(?=.*[a-z])/;
const upperCase = /(?=.*[A-Z])/;
const symbol = /[._]/;
const number = /(?=.*\d)/;
const whiteSpace = /\s/;
const email =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

export const validatePassword = ( inputPassword, repeatPassword ) => {
    let errors = [];
    if(!lowerCase.test(inputPassword)){
        errors.push({ message: 'Debes incluir una minúscula.', fail: 'lowerCase' });
    } else if(!upperCase.test(inputPassword)){
        errors.push({ message: 'Debes incluir una mayúscula', fail: 'upperCase' });
    } else if(!symbol.test(inputPassword)) {
        errors.push({ message: 'Debes incluir un punto o guión bajo.', fail: 'symbol' });
    } else if(!number.test(inputPassword)) {
        errors.push({ message: 'Debes incluir un número.', fail: 'number' });
    } else if(whiteSpace.test(inputPassword)) {
        errors.push({ message: 'No puedes incluir espacios.', fail:'whiteSpace' });
    } else if(inputPassword.length < 6) {
        errors.push({ message: 'La contraseña debe tener al menos 6 caracteres.', fail: 'length' });
    } else if(inputPassword !== repeatPassword) {
        errors.push({ message: 'Las contraseñas no coinciden', fail: 'length' });
    }
    
    return {
        error: errors,
        validate: errors.length === 0,
        type: 'password'
    }
}

export const validateEmail = ( inputEmail ) => {
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

export const validateUsername = ( inputUsername ) => {
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

export const validateLengthInputs = ({ inputUsername, inputPassword, repeatPassword, inputEmail }) => {
    let errors = [];
    if( !inputUsername.length || !inputPassword.length || !repeatPassword.length || !inputEmail.length ){
        errors.push({ message: 'Faltan ingresar datos. Por favor, verifícalos!', fail: 'length' });
    }

    return {
        error: errors,
        validate: errors.length === 0,
        type: ''
    }
}