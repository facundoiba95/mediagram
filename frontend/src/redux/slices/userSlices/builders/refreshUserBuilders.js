export default ( builders, refreshUser ) => {
    builders.addCase( refreshUser.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase( refreshUser.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.userFound = action.payload.user;
            state.userSelected = action.payload.user;
    })
    builders.addCase( refreshUser.pending, ( state, action ) => {
        state.isLoading = true;
})
}