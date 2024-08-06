<<<<<<< HEAD
export default ( builders, getFollowers ) => {
    builders.addCase( getFollowers.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( getFollowers.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.followers = action.payload.followers;
    })
    builders.addCase( getFollowers.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, getFollowers ) => {
    builders.addCase( getFollowers.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( getFollowers.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.followers = action.payload.followers;
    })
    builders.addCase( getFollowers.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}