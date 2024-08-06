<<<<<<< HEAD
export default ( builders, getLikes ) => {
    builders.addCase(  getLikes.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase(  getLikes.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.likes = action.payload.likes;
    })
    builders.addCase(  getLikes.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, getLikes ) => {
    builders.addCase(  getLikes.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase(  getLikes.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.likes = action.payload.likes;
    })
    builders.addCase(  getLikes.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}