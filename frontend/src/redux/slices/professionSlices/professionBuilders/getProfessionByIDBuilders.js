export default ( builders, getProfessionByID ) => {
    builders.addCase( getProfessionByID.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( getProfessionByID.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.profession = action.payload.profession;
    })
    builders.addCase( getProfessionByID.pending, ( state, action ) => {
        state.isLoading = true;
})
}