<<<<<<< HEAD
export default (builders, updateTagsInPost) => {
    builders.addCase(updateTagsInPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
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
=======
export default (builders, updateTagsInPost) => {
    builders.addCase(updateTagsInPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
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
>>>>>>> b3173dc1 (first commit in Ubuntu)
}