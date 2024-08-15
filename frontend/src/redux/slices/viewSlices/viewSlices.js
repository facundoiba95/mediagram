import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getViewsBuilders from "./viewBuilders/getViewsBuilders";

const initialState = {
    message: null,
    views: [],
    isLoading: false,
    status: null,
    error: null
}

//@params entity = String "post", "user", "tags", "comments", "user"
//@params entityID = ObjectID
export const getViews = createAsyncThunk(
    "getViews/viewSlices",
    async ({entity, entityID}, {rejectWithValue}) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}${entity}/getViews/${entityID}`)
            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;            
        } catch (error) {
            console.error('Ocurrio un error en getViews, viewSlices', error);
            alert('Ocurrio un error en getViews, viewSlices');
            return rejectWithValue({error})
        }
    }
)

const viewSlices = createSlice({
    name: 'viewSlices',
    initialState,
    reducers: {
        resetState_views: (state,action) => {
            state.views = [];
            state.message = null;
            state.status = null;
        }
    },
    extraReducers: (builders) => {
        getViewsBuilders(builders, getViews);
    }
})

export const { resetState_views } = viewSlices.actions;
export default viewSlices.reducer;