export default ( builders, handleIsFollowing ) => {
    builders.addCase( handleIsFollowing.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
        state.isFollowing = action.payload.isFollowing;
    })
    builders.addCase( handleIsFollowing.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.isFollowing = action.payload.isFollowing;
    })
    builders.addCase( handleIsFollowing.pending, ( state, action ) => {
        state.isLoading = true;
})
}