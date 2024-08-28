export default ( builders, getChatByID ) => {
    builders.addCase( getChatByID.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( getChatByID.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.chatSelected = action.payload.chat;
        state.status = action.payload.status;
    })
    builders.addCase( getChatByID.pending, ( state, action ) => {
        state.isLoading = true;
})
}