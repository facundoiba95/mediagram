<<<<<<< HEAD
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
    async ({entity, entityID}) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}${entity}/getViews/${entityID}`)
            const res = await req.json();
            return res;            
        } catch (error) {
            console.error('Ocurrio un error en getViews, viewSlices', error);
            alert('Ocurrio un error en getViews, viewSlices');
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
=======
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
    async ({entity, entityID}) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}${entity}/getViews/${entityID}`)
            const res = await req.json();
            return res;            
        } catch (error) {
            console.error('Ocurrio un error en getViews, viewSlices', error);
            alert('Ocurrio un error en getViews, viewSlices');
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
>>>>>>> b3173dc1 (first commit in Ubuntu)
export default viewSlices.reducer;