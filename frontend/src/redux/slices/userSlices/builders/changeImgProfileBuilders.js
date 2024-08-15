export default ( builders, changeImgProfile ) => {
    builders.addCase( changeImgProfile.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.payload.error[0].message;
        state.status = action.payload.status;
    })
    builders.addCase( changeImgProfile.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.error = action.payload.error;
            state.message = action.payload.message;
            state.status = action.payload.status;
    })
    builders.addCase( changeImgProfile.pending, ( state, action ) => {
        state.isLoading = true;
})
}