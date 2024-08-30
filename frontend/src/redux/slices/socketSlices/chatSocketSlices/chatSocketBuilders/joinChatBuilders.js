export default ( builders, joinChat ) => {
    builders.addCase( joinChat.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( joinChat.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.message = action.payload.message;
    })
    builders.addCase( joinChat.pending, ( state, action ) => {
        state.isLoading = true;
})
}