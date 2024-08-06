<<<<<<< HEAD
export default ( builders, addNewLocation ) => {
    builders.addCase( addNewLocation.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
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
=======
export default ( builders, addNewLocation ) => {
    builders.addCase( addNewLocation.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
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
>>>>>>> b3173dc1 (first commit in Ubuntu)
}