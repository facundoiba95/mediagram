export default ( builders, addComment ) => {
    builders.addCase( addComment.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( addComment.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
    })
    builders.addCase( addComment.pending, ( state, action ) => {
        state.isLoading = true;
})
}