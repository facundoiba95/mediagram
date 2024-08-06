<<<<<<< HEAD
export default ( builders, getLocationByCity ) => {
    builders.addCase( getLocationByCity.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
    })
    builders.addCase( getLocationByCity.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.location = action.payload;
    })
    builders.addCase( getLocationByCity.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, getLocationByCity ) => {
    builders.addCase( getLocationByCity.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
    })
    builders.addCase( getLocationByCity.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.location = action.payload;
    })
    builders.addCase( getLocationByCity.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}