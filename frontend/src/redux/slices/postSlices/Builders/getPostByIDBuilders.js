export default ( builders, getPostByID ) => {
    builders.addCase( getPostByID.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( getPostByID.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.post = action.payload.post;
    })
    builders.addCase( getPostByID.pending, ( state, action ) => {
        state.isLoading = true;
})
}