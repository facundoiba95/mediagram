export default ( builders, updateProfession ) => {
    builders.addCase( updateProfession.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( updateProfession.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.error;
            state.message = action.payload.message;
            state.status = action.payload.status;
    })
    builders.addCase( updateProfession.pending, ( state, action ) => {
        state.isLoading = true;
})
}