export default ( builders, followUser ) => {
    builders.addCase( followUser.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( followUser.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.message = action.payload.message;
            state.status = action.payload.status;
            state.user = action.payload.user;
    })
    builders.addCase( followUser.pending, ( state, action ) => {
        state.isLoading = true;
})
}