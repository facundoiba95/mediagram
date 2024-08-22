export default ( builders, handleLikeToPost ) => {
    builders.addCase( handleLikeToPost.rejected, ( state, action ) => {
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( handleLikeToPost.fulfilled, ( state, action ) => {
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
    })
    
}