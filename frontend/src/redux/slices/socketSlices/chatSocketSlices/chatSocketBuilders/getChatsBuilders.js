export default ( builders, getChats ) => {
    builders.addCase( getChats.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( getChats.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.chats = action.payload.chats;
        state.status = action.payload.status;
    })
    builders.addCase( getChats.pending, ( state, action ) => {
        state.isLoading = true;
})
}