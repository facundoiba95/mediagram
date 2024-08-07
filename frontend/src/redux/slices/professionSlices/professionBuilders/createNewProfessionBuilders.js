<<<<<<< HEAD
export default ( builders, createNewProfession ) => {
    builders.addCase( createNewProfession.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
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
=======
export default ( builders, createNewProfession ) => {
    builders.addCase( createNewProfession.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
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
>>>>>>> b3173dc1 (first commit in Ubuntu)
}