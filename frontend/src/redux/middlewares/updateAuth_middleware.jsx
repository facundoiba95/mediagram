<<<<<<< HEAD
// src/middlewares/updateAuthMiddleware.js

import { updateAuthState } from "../slices/authSlices/authSlices";

const updateAuthMiddleware = store => next => action => {
    // Verifica que la acción tenga un payload y un estado 401
    if (action.payload && action.payload.status === 401) {
        // Solo despacha la acción updateAuthState si no es la misma acción que causó el problema
        if (action.type !== updateAuthState.type) {
            store.dispatch(updateAuthState({
                isLogged: false,
                error: action.payload.error,
                status: 401
            }));
        }
    }
    return next(action);
};

=======
// src/middlewares/updateAuthMiddleware.js

import { updateAuthState } from "../slices/authSlices/authSlices";

const updateAuthMiddleware = store => next => action => {
    // Verifica que la acción tenga un payload y un estado 401
    if (action.payload && action.payload.status === 401) {
        // Solo despacha la acción updateAuthState si no es la misma acción que causó el problema
        if (action.type !== updateAuthState.type) {
            store.dispatch(updateAuthState({
                isLogged: false,
                error: action.payload.error,
                status: 401
            }));
        }
    }
    return next(action);
};

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default updateAuthMiddleware;