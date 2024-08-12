import { updateAuthState } from "../slices/authSlices/authSlices";

const updateAuthMiddleware = store => next => action => {
    if (action.payload && action.payload.status === 401) {
        if (action.type !== updateAuthState.type) {
            localStorage.removeItem("token");
            store.dispatch(updateAuthState({
                isLogged: false,
                error: action.payload.error,
                status: 401
            }));
        }
    }
    return next(action);
};

export default updateAuthMiddleware;