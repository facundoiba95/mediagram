export default ( builders, joinRoom ) => {
    builders.addCase( joinRoom.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
    })
    builders.addCase( joinRoom.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.notifications = action.payload;
    })
    builders.addCase( joinRoom.pending, ( state, action ) => {
        state.isLoading = true;
})
}