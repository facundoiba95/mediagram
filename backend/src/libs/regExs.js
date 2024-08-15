// RegEx
export const lowerCase = /(?=.*[a-z])/;
export const upperCase = /(?=.*[A-Z])/;
export const symbol = /[._]+/;
export const number = /(?=.*\d)/;
export const whiteSpace = /\s/;
export const email =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
export const regex_text = /^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ._]+$/;
export const regex_text_whitespaces = /^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ#!._ ,]+$/;
export const regex_password =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[._\-])[A-Za-z\d._\-]$/;