export default ( builders, addReferTo ) => {
    builders.addCase( addReferTo.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( addReferTo.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
    })
    builders.addCase( addReferTo.pending, ( state, action ) => {
        state.isLoading = true;
})
}