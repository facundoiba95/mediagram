<<<<<<< HEAD
export default ( builders, selectUser ) => {
    builders.addCase( selectUser.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( selectUser.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.userSelected = action.payload.userSelected;
    })
    builders.addCase( selectUser.pending, ( state, action ) => {
        state.isLoading = true;
})
=======
export default ( builders, selectUser ) => {
    builders.addCase( selectUser.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.status = action.payload.status;
    })
    builders.addCase( selectUser.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.message;
            state.status = action.payload.status;
            state.userSelected = action.payload.userSelected;
    })
    builders.addCase( selectUser.pending, ( state, action ) => {
        state.isLoading = true;
})
>>>>>>> b3173dc1 (first commit in Ubuntu)
}