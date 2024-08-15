export default ( builders, getVisiblePosts ) => {
    builders.addCase(  getVisiblePosts.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase(  getVisiblePosts.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.post = action.payload.post;
    })
    builders.addCase(  getVisiblePosts.pending, ( state, action ) => {
        state.isLoading = true;
})
}