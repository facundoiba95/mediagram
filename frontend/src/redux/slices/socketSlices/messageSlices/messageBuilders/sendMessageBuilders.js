export default ( builders, newMessage ) => {
    builders.addCase( newMessage.rejected, ( state, action ) => {
        state.error = action.payload.error;
    })
    builders.addCase( newMessage.fulfilled, ( state, action ) => {
        state.message = action.payload;
    })
    
}