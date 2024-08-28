export default ( builders, deleteChat ) => {
    builders.addCase( deleteChat.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( deleteChat.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( deleteChat.pending, ( state, action ) => {
        state.isLoading = true;
})
}