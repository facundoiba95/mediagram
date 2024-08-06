<<<<<<< HEAD
export default ( builders, getTrendPosts ) => {
    builders.addCase(  getTrendPosts.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase(  getTrendPosts.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.trendPosts = action.payload.trendPosts;
    })
    builders.addCase(  getTrendPosts.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, getTrendPosts ) => {
    builders.addCase(  getTrendPosts.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase(  getTrendPosts.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.trendPosts = action.payload.trendPosts;
    })
    builders.addCase(  getTrendPosts.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}