export default ( builders, createNewProfession ) => {
    builders.addCase( createNewProfession.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( createNewProfession.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.profession = action.payload.profession;
    })
    builders.addCase( createNewProfession.pending, ( state, action ) => {
        state.isLoading = true;
})
}