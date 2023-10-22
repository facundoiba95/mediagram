export default ( builders, handleRegister ) => {
    builders.addCase( handleRegister.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase( handleRegister.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message || action.payload.error[0].message;
    })
    builders.addCase( handleRegister.pending, ( state, action ) => {
        state.isLoading = true;
})
}