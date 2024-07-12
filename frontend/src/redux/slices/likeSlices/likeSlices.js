import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getLikesBuilders from "./likeBuilders/getLikesBuilders";

const initialState = {
    message: null,
    likes: [],
    isLoading: false,
    status: null,
    error: null
}

//@params entity = String "post", "user", "tags", "comments", "user"
//@params entityID = ObjectID
export const getLikes = createAsyncThunk(
    "getLikes/likeSlices",
    async ({entity, entityID}) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}${entity}/getLikes/${entityID}`)
            const res = await req.json();
            return res;            
        } catch (error) {
            console.error('Ocurrio un error en getLikes, likeSlices', error);
            alert('Ocurrio un error en getLikes, likeSlices');
        }
    }
)

const likeSlices = createSlice({
    name: 'likeSlices',
    initialState,
    reducers: {
        resetState_likes: (state,action) => {
            state.likes = [];
            state.message = null;
            state.status = null;
        }
    },
    extraReducers: (builders) => {
        getLikesBuilders(builders, getLikes)
    }
})

export const { resetState_likes } = likeSlices.actions;
export default likeSlices.reducer;