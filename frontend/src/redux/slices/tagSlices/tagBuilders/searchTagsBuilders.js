<<<<<<< HEAD
export default ( builders,searchTags ) => {
    builders.addCase( searchTags.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( searchTags.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.tags = action.payload.tags;
    })
    builders.addCase( searchTags.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders,searchTags ) => {
    builders.addCase( searchTags.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( searchTags.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.tags = action.payload.tags;
    })
    builders.addCase( searchTags.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}