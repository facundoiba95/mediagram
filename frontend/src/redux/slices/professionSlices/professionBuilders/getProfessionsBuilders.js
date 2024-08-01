export default ( builders, getProfessions ) => {
    builders.addCase( getProfessions.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase( getProfessions.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.professions = action.payload.professions;
    })
    builders.addCase( getProfessions.pending, ( state, action ) => {
        state.isLoading = true;
})
}