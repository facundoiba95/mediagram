export default ( builders, getMessages ) => {
    builders.addCase( getMessages.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( getMessages.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.messagesInChat = action.payload.messages;
        state.status = action.payload.status;
    })
    builders.addCase( getMessages.pending, ( state, action ) => {
        state.isLoading = true;
})
}