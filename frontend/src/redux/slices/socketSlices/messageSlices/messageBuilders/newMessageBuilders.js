export default ( builders, newMessage ) => {
    builders.addCase( newMessage.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
    })
    builders.addCase( newMessage.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.message = action.payload.message;
    })
    builders.addCase( newMessage.pending, ( state, action ) => {
        state.isLoading = true;
})
}