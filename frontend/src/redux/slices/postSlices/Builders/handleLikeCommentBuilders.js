export default ( builders, handleLikeComment ) => {
    builders.addCase( handleLikeComment.rejected, ( state, action ) => {
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( handleLikeComment.fulfilled, ( state, action ) => {
            state.status = action.payload.status;
            state.message = action.payload.message;
    })
    
}