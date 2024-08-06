<<<<<<< HEAD
export default ( builders, getViews ) => {
    builders.addCase(  getViews.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase(  getViews.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.views = action.payload.views;
    })
    builders.addCase(  getViews.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, getViews ) => {
    builders.addCase(  getViews.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase(  getViews.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.views = action.payload.views;
    })
    builders.addCase(  getViews.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}