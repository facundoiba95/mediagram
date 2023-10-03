export const validateInputs = (password, username, email) => {
    if( !username.trim().length || !password.trim().length || !email.trim().length){
        console.error('Debes completar los campos vacios');
        return false;
    }
    return true;
}