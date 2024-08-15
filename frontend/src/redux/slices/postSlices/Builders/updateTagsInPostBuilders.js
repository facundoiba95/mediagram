export default (builders, updateTagsInPost) => {
    builders.addCase(updateTagsInPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase(updateTagsInPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.status;
        state.message = action.payload.message;
    })
    builders.addCase(updateTagsInPost.pending, (state, action) => {
        state.isLoading = true;
    })
}