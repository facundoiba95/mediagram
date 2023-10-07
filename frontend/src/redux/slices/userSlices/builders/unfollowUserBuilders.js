export default ( builders, unfollowUser ) => {
    builders.addCase( unfollowUser.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( unfollowUser.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.error;
            state.message = action.payload.message;
            state.status = action.payload.status;
    })
    builders.addCase( unfollowUser.pending, ( state, action ) => {
        state.isLoading = true;
})
}