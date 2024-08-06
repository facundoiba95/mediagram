<<<<<<< HEAD
export default ( builders,getPosts ) => {
    builders.addCase( getPosts.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
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
=======
export default ( builders,getPosts ) => {
    builders.addCase( getPosts.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
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
>>>>>>> b3173dc1 (first commit in Ubuntu)
}