export default ( builders, searchUser ) => {
    builders.addCase( searchUser.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( searchUser.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.user = action.payload.user;
    })
    builders.addCase( searchUser.pending, ( state, action ) => {
        state.isLoading = true;
})
}