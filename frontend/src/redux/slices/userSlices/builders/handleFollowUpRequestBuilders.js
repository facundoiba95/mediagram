export default ( builders, handleFollowUpRequest ) => {
    builders.addCase( handleFollowUpRequest.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
    })
    builders.addCase( handleFollowUpRequest.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
    })
    builders.addCase( handleFollowUpRequest.pending, ( state, action ) => {
        state.isLoading = true;
})
}