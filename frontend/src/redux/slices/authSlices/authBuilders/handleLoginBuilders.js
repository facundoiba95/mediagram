<<<<<<< HEAD
import { connectionSocket, socket } from "../../../../../socket";

export default (builders, handleLogin) => {
    builders.addCase(handleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase(handleLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
        state.token = action.payload.token;
        state.user = action.payload.user;

        if (action.payload.status === 200) {
            localStorage.setItem('token', action.payload.token);
        }
    })
    builders.addCase(handleLogin.pending, (state, action) => {
        state.isLoading = true;
    })
=======
import { connectionSocket, socket } from "../../../../../socket";

export default (builders, handleLogin) => {
    builders.addCase(handleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase(handleLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
        state.token = action.payload.token;
        state.user = action.payload.user;

        if (action.payload.status === 200) {
            localStorage.setItem('token', action.payload.token);
        }
    })
    builders.addCase(handleLogin.pending, (state, action) => {
        state.isLoading = true;
    })
>>>>>>> b3173dc1 (first commit in Ubuntu)
}