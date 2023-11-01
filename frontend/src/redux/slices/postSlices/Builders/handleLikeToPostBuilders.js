export default ( builders, handleLikeToPost ) => {
    builders.addCase( handleLikeToPost.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( handleLikeToPost.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.post = action.payload.post;
    })
    builders.addCase( handleLikeToPost.pending, ( state, action ) => {
        state.isLoading = true;
})
}