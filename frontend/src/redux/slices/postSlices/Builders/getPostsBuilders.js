export default ( builders,getPosts ) => {
    builders.addCase( getPosts.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
        state.post = [];
    })
    builders.addCase( getPosts.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.error = action.payload.error;
            state.post = action.payload.post;
    })
    builders.addCase( getPosts.pending, ( state, action ) => {
        state.isLoading = true;
})
}