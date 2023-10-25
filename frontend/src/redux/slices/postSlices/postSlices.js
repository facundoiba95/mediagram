import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createPostBuilders from "./Builders/createPostBuilders";
import getPostsBuilders from "./Builders/getPostsBuilders";
import getPostsOfFollowingsBuilders from "./Builders/getPostsOfFollowingsBuilders";

const initialState = {
    error: null,
    message: null,
    isLoading: false,
    isLogged: false,
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
                mode:'cors',
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
    async (username) => {
        try {
            const usernameValue = {username}
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/getPosts`,{
                method: "POST",
                mode:'cors',
                headers: {
                    "Content-Type":"application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(usernameValue)
            })
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en getPosts, postSlices');
            alert('Ocurrio un error en getPosts, postSlices');
        }
    }
);

export const getPostsOfFollowings = createAsyncThunk(
    'getPostsOfFollowings/postSlices',
    async () => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/getPostByFollowings` , {
              method: 'POST',
              mode: 'cors',
              headers: {
                "Content-Type": "application/json",
                "x-access-token": `${token}`
              }
            });
        
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en getPostsOfFollowings, postSlices');
            alert('Ocurrio un error en getPostsOfFollowings, postSlices');
        }
    }
)


const postSlices = createSlice({
    name: 'postSlices',
    initialState,
    reducers: {
        restarStatusPost: ( state,action ) => {
            state.status = null;
        },
        restartPostsList: ( state ) => {
            return initialState;
        }
    },
    extraReducers: ( builders ) => {
        createPostBuilders( builders, createPost );
        getPostsBuilders( builders, getPosts );
        getPostsOfFollowingsBuilders( builders, getPostsOfFollowings );
    }
})

export const { restarStatusPost, restartPostsList } = postSlices.actions;
export default postSlices.reducer;