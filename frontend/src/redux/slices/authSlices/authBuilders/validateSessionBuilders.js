<<<<<<< HEAD
export default ( builders, validateSession ) => {
    builders.addCase( validateSession.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase( validateSession.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.isLogged = action.payload.isLogged;
            state.status = action.payload.status;
            state.user = action.payload.user;
    })
    builders.addCase( validateSession.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, validateSession ) => {
    builders.addCase( validateSession.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase( validateSession.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.isLogged = action.payload.isLogged;
            state.status = action.payload.status;
            state.user = action.payload.user;
    })
    builders.addCase( validateSession.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}