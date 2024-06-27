export default (builders, getTrendTags) => {
    builders.addCase(getTrendTags.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase(getTrendTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.status;
        state.message = action.payload.message;
        state.error = action.payload.error;
        state.trendTags = action.payload.trendTags;
    })
    builders.addCase(getTrendTags.pending, (state, action) => {
        state.isLoading = true;
    })
}