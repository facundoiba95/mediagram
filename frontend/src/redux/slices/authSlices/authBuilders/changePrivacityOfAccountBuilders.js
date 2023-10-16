export default ( builders, changePrivacityOfAccount ) => {
    builders.addCase( changePrivacityOfAccount.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( changePrivacityOfAccount.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
    })
    builders.addCase( changePrivacityOfAccount.pending, ( state, action ) => {
        state.isLoading = true;
})
}