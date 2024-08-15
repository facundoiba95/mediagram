export default ( builders, addNewLocation ) => {
    builders.addCase( addNewLocation.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( addNewLocation.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.user = action.payload.user;
    })
    builders.addCase( addNewLocation.pending, ( state, action ) => {
        state.isLoading = true;
})
}