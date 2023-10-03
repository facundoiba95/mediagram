export default ( builders, handleLogin ) => {
    builders.addCase( handleLogin.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase( handleLogin.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.isLogged = action.payload.isLogged;
            state.status = action.payload.status;
            state.token = action.payload.token;
            state.user = action.payload.user;
    })
    builders.addCase( handleLogin.pending, ( state, action ) => {
        state.isLoading = true;
})
}