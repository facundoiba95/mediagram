<<<<<<< HEAD
export default ( builders, handleIsFollowing ) => {
    builders.addCase( handleIsFollowing.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
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
=======
export default ( builders, handleIsFollowing ) => {
    builders.addCase( handleIsFollowing.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.isLogged = action.payload.isLogged;
        state.status = action.payload.status;
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
>>>>>>> b3173dc1 (first commit in Ubuntu)
}