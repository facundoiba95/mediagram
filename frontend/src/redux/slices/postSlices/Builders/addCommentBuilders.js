export default ( builders, addComment ) => {
    builders.addCase( addComment.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( addComment.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
    })
    builders.addCase( addComment.pending, ( state, action ) => {
        state.isLoading = true;
})
}