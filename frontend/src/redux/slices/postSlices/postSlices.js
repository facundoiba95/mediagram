import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createPostBuilders from "./Builders/createPostBuilders";
import getPostsBuilders from "./Builders/getPostsBuilders";
import getPostsOfFollowingsBuilders from "./Builders/getPostsOfFollowingsBuilders";
import getPostByIDBuilders from "./Builders/getPostByIDBuilders";
import addCommentBuilders from "./Builders/addCommentBuilders";
import handleLikeToPostBuilders from "./Builders/handleLikeToPostBuilders";

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

export const getPostByID = createAsyncThunk(
    'getPostByID/postSlices',
    async (idPost) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/getPostByID/${idPost}`,{
                method: "GET",
                mode:'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en getPostsByID, postSlices', error);
            alert('Ocurrio un error en getPostsByID, postSlices');
        }
    }
);

export const addComment = createAsyncThunk(
    'addComment/postSlices',
    async (comment) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/addComment`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(comment)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en addComment, postSlices', error);
            alert('Ocurrio un error en addComment, postSlices');
        }
    }
)

export const handleLikeToPost = createAsyncThunk(
    'handleLikeToPost/postSlices',
    async (post) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/handleLikeToPost`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(post)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en addLikeToPost, postSlices', error);
            alert('Ocurrio un error en addLikeToPost, postSlices');
        }
    }
)

export const deletePost = createAsyncThunk(
    'deletePost/postSlices',
    async (idPost) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/deletePost/${idPost}`, {
                method: "DELETE",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en deletePost, postSlices', error);
            alert('Ocurrio un error en deletePost, postSlices');
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
            return { ... initialState};
        }
    },
    extraReducers: ( builders ) => {
        createPostBuilders( builders, createPost );
        getPostsBuilders( builders, getPosts );
        getPostsOfFollowingsBuilders( builders, getPostsOfFollowings );
        getPostByIDBuilders( builders, getPostByID );
        addCommentBuilders( builders, addComment );
        handleLikeToPostBuilders( builders, handleLikeToPost );
    }
})

export const { restarStatusPost, restartPostsList } = postSlices.actions;
export default postSlices.reducer;