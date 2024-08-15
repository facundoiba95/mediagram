export default ( builders, getCloseList ) => {
    builders.addCase( getCloseList.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( getCloseList.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.closeList = action.payload.closeList;
    })
    builders.addCase( getCloseList.pending, ( state, action ) => {
        state.isLoading = true;
})
}