import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createPostBuilders from "./Builders/createPostBuilders";
import getPostsBuilders from "./Builders/getPostsBuilders";

const initialState = {
    error: null,
    message: null,
    isLoading: false,
    status: null,
    post:[],
}

export const createPost = createAsyncThunk(
    'createPost/postSlices',
    async (post) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/createPost`, {
                method: "POST",
                mode: "cors",
                headers:{
                    "x-access-token": `${token}`
                },
                body: new FormData(post)
            })

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en createPost, postSlices');
            alert('Ocurrio un error en createPost, postSlices');
        }
    }
);

export const getPosts = createAsyncThunk(
    'getPosts/postSlices',
    async (posts) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/getPosts`,{
                method: "POST",
                mode:'cors',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(posts)
            })
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en getPosts, postSlices');
            alert('Ocurrio un error en getPosts, postSlices');
        }
    }
)

const postSlices = createSlice({
    name: 'postSlices',
    initialState,
    reducers: {
        restarStatusPost: ( state,action ) => {
            state.status = null;
        }
    },
    extraReducers: ( builders ) => {
        createPostBuilders( builders, createPost );
        getPostsBuilders( builders, getPosts );
    }
})

export const { restarStatusPost } = postSlices.actions;
export default postSlices.reducer;