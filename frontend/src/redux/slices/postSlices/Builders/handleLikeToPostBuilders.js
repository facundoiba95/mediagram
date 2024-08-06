<<<<<<< HEAD
export default ( builders, handleLikeToPost ) => {
    builders.addCase( handleLikeToPost.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( handleLikeToPost.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
    })
    
=======
export default ( builders, handleLikeToPost ) => {
    builders.addCase( handleLikeToPost.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( handleLikeToPost.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
    })
    
>>>>>>> b3173dc1 (first commit in Ubuntu)
}