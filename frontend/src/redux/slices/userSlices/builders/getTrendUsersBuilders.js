export default ( builders, getTrendUsers ) => {
    builders.addCase( getTrendUsers.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( getTrendUsers.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.trendUsers = action.payload.trendUsers;
    })
    builders.addCase( getTrendUsers.pending, ( state, action ) => {
        state.isLoading = true;
})
}