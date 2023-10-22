// RegEx
export const lowerCase = /(?=.*[a-z])/;
export const upperCase = /(?=.*[A-Z])/;
export const symbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
export const number = /(?=.*\d)/;
export const whiteSpace = /\s/;
export const email =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;