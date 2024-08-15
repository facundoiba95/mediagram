export default ( builders,createTag ) => {
    builders.addCase( createTag.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( createTag.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.tags = action.payload.tags;
    })
    builders.addCase( createTag.pending, ( state, action ) => {
        state.isLoading = true;
})
}