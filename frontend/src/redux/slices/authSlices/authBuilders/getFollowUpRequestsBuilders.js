export default ( builders, getFollowUpRequests ) => {
    builders.addCase( getFollowUpRequests.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( getFollowUpRequests.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.user.followUpRequest = action.payload.followUpRequests;
    })
    builders.addCase( getFollowUpRequests.pending, ( state, action ) => {
        state.isLoading = true;
})
}