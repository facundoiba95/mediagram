import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchTagsBuilders from "./tagBuilders/searchTagsBuilders";
import createTagBuilders from "./tagBuilders/createTagBuilders";
import getTrendTagsBuilders from "./tagBuilders/getTrendTagsBuilders";

const initialState = {
    tags: [],
    nameTag: '',
    status: null,
    isLoading: false,
    error: null,
    message: null,
    trendTags: [],
    listTags: []
}

export const searchTags = createAsyncThunk(
    'searchTags/tagSlices',
    async (nameTag) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}tags/searchTags?nameTag=${encodeURIComponent(nameTag)}`);
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrió un error en searchTags, tagSlices. Error: ', error);
            alert('Ocurrió un error en searchTags, tagSlices.');
        }
    }
);

export const createTag = createAsyncThunk(
    'createTag/tagSlices',
    async (tag) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}tags/createTag`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(tag)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrió un error en createTag, tagSlices. Error: ', error);
            alert('Ocurrió un error en createTag, tagSlices.');
        }
    }
);

export const getTrendTags = createAsyncThunk(
    'getTrendTags/tagSlices',
    async () => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}tags/getTrendTags`);
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrió un error en getTrendTags, tagSlices. Error: ', error);
            alert('Ocurrió un error en getTrendTags, tagSlices.');
        }
    }
)

const tagSlices = createSlice({
    name: 'tagSlices',
    initialState,
    reducers: {
        setNameTag: (state, action) => {
            state.nameTag = action.payload;
        },
        resetTagState: (state, action) => {
            return { ...initialState };
        },
        setListTags: (state, action) => {
            state.listTags = action.payload;
        },
        resetTags: (state, action) => {
            state.tags = [];
        },
        resetListTags: (state, action) => {
            state.listTags = [];
        },
        resetNameTag: (state, action) => {
            state.nameTag = "";
        },
        addTagToList: (state, action) => {
            if (!action.payload) return;
            const existTagInList = state.listTags.some(tag => tag._id === action.payload._id);
            if (existTagInList) return;
            state.listTags = [...state.listTags, action.payload]
            state.nameTag = '';
        },
        removeTagToList: (state, action) => {
            state.listTags = state.listTags.filter(tag => tag._id !== action.payload);
        }
    },
    extraReducers: (builders) => {
        searchTagsBuilders(builders, searchTags);
        createTagBuilders(builders, createTag);
        getTrendTagsBuilders(builders, getTrendTags);
    }
})

export const { setNameTag, resetTagState, addTagToList, setListTags, removeTagToList, resetListTags,resetNameTag, resetTags } = tagSlices.actions;
export default tagSlices.reducer;