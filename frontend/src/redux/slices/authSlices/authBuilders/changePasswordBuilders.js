export default ( builders, changePassword ) => {
    builders.addCase( changePassword.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( changePassword.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
    })
    builders.addCase( changePassword.pending, ( state, action ) => {
        state.isLoading = true;
})
}