<<<<<<< HEAD
export default ( builders, viewNotifications ) => {
    builders.addCase( viewNotifications.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
    })
    builders.addCase( viewNotifications.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.notifications = action.payload;
    })
    builders.addCase( viewNotifications.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, viewNotifications ) => {
    builders.addCase( viewNotifications.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
    })
    builders.addCase( viewNotifications.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.notifications = action.payload;
    })
    builders.addCase( viewNotifications.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}