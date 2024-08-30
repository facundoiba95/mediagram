export default ( builders, newChat ) => {
    builders.addCase( newChat.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( newChat.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.idChat = action.payload.idChat;
        state.status = action.payload.status;
    })
    builders.addCase( newChat.pending, ( state, action ) => {
        state.isLoading = true;
})
}