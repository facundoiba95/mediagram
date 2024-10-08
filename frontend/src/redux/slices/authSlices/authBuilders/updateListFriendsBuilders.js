export default ( builders, updateCloseList ) => {
    builders.addCase( updateCloseList.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( updateCloseList.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.error;
            state.message = action.payload.message;
            state.status = action.payload.status;
    })
    builders.addCase( updateCloseList.pending, ( state, action ) => {
        state.isLoading = true;
})
}