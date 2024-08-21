export default ( builders, searchUser ) => {
    builders.addCase( searchUser.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
        state.userFound = [];
    })
    builders.addCase( searchUser.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.userFound = action.payload.userFound;
    })
    builders.addCase( searchUser.pending, ( state, action ) => {
        state.isLoading = true;
})
}