<<<<<<< HEAD
export default ( builders, getNotifications ) => {
    builders.addCase( getNotifications.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
    })
    builders.addCase( getNotifications.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.notifications = action.payload;
    })
    builders.addCase( getNotifications.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, getNotifications ) => {
    builders.addCase( getNotifications.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
    })
    builders.addCase( getNotifications.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.notifications = action.payload;
    })
    builders.addCase( getNotifications.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}