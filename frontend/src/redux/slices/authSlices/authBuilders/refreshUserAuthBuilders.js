<<<<<<< HEAD
export default ( builders, refreshUserAuth ) => {
    builders.addCase( refreshUserAuth.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase( refreshUserAuth.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.user = action.payload.user;
            state.error = action.payload.error;
    })
    builders.addCase( refreshUserAuth.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, refreshUserAuth ) => {
    builders.addCase( refreshUserAuth.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase( refreshUserAuth.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.user = action.payload.user;
            state.error = action.payload.error;
    })
    builders.addCase( refreshUserAuth.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}