export default ( builders, getViews ) => {
    builders.addCase(  getViews.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
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
}