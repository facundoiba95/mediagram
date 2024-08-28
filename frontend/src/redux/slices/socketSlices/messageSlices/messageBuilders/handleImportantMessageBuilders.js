export default ( builders, handleImportantMessage ) => {
    builders.addCase( handleImportantMessage.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( handleImportantMessage.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( handleImportantMessage.pending, ( state, action ) => {
        state.isLoading = true;
})
}