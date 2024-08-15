export default ( builders, getFollowings ) => {
    builders.addCase( getFollowings.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( getFollowings.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.followings = action.payload.followings;
    })
    builders.addCase( getFollowings.pending, ( state, action ) => {
        state.isLoading = true;
})
}