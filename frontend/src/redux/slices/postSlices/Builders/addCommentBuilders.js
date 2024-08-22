export default (builders, addComment) => {
    builders.addCase(addComment.rejected, (state, action) => {
        state.error = action.payload.error;
        state.status = action.payload.status;
    })
    builders.addCase(addComment.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.message = action.payload.message;
        state.post = state.post.map(item => {
            if (item._id === action.payload.idPost) {
                item.comments.push(action.payload.comment);
            }

            return { ...item }
        })
    })

}