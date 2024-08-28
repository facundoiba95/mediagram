export default ( builders, deleteMessage ) => {
    builders.addCase( deleteMessage.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( deleteMessage.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.status = action.payload.status;
    })
    builders.addCase( deleteMessage.pending, ( state, action ) => {
        state.isLoading = true;
})
}