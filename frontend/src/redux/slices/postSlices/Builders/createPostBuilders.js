export default ( builders,createPost ) => {
    builders.addCase( createPost.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( createPost.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
    })
    builders.addCase( createPost.pending, ( state, action ) => {
        state.isLoading = true;
})
}