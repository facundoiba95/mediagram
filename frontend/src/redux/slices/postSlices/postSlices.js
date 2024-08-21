import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createPostBuilders from "./Builders/createPostBuilders";
import getPostsBuilders from "./Builders/getPostsBuilders";
import getPostsOfFollowingsBuilders from "./Builders/getPostsOfFollowingsBuilders";
import getPostByIDBuilders from "./Builders/getPostByIDBuilders";
import addCommentBuilders from "./Builders/addCommentBuilders";
import handleLikeToPostBuilders from "./Builders/handleLikeToPostBuilders";
import addReferToBuilders from "./Builders/addReferToBuilders";
import getVisiblePostsBuilders from "./Builders/getVisiblePostsBuilders";
import updateTagsInPostBuilders from "./Builders/updateTagsInPostBuilders";
import getTrendPostsBuilders from "./Builders/getTrendPostsBuilders";
import handleLikeCommentBuilders from "./Builders/handleLikeCommentBuilders";

const initialState = {
    error: null,
    message: null,
    isLoading: false,
    isLogged: false,
    status: null,
    trendPosts: [],
    post: [],
    relatedPosts: []
}

export const createPost = createAsyncThunk(
    'createPost/postSlices',
    async (form, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/createPost`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "x-access-token": `${token}`
                },
                body: new FormData(form)
            })

            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en createPost, postSlices');
            alert('Ocurrio un error en createPost, postSlices');
            return rejectWithValue({error})
        }
    }
);

export const getPosts = createAsyncThunk(
    'getPosts/postSlices',
    async (username, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/getPosts/${username}`, {
                method: "GET",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            })

            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en getPosts, postSlices');
            alert('Ocurrio un error en getPosts, postSlices');
            return rejectWithValue({error})
        }
    }
);

export const getPostsOfFollowings = createAsyncThunk(
    'getPostsOfFollowings/postSlices',
    async (_, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/getPostByFollowings`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en getPostsOfFollowings, postSlices');
            alert('Ocurrio un error en getPostsOfFollowings, postSlices');
            return rejectWithValue({error})
        }
    }
)

export const getPostByID = createAsyncThunk(
    'getPostByID/postSlices',
    async (idPost,{rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/getPostByID/${idPost}`, {
                method: "GET",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en getPostsByID, postSlices', error);
            alert('Ocurrio un error en getPostsByID, postSlices');
            return rejectWithValue({error})
        }
    }
);

export const addComment = createAsyncThunk(
    'addComment/postSlices',
    async (comment,{rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}comment/addComment`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(comment)
            });

            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en addComment, postSlices', error);
            alert('Ocurrio un error en addComment, postSlices');
            return rejectWithValue({error})
        }
    }
)

export const handleLikeComment = createAsyncThunk(
    'handleLikeComment/postSlices',
    async (idComment, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}comment/handleLikeComment/${idComment}`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en handleLikeComment, postSlices', error);
            alert('Ocurrio un error en handleLikeComment, postSlices');
            return rejectWithValue({error})
        }
    }
)

export const addReferTo = createAsyncThunk(
    'addReferTo/postSlices',
    async (listReferTo,{rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/addComment`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(listReferTo)
            })

            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en addReferTo, postSlices. Error: ', error);
            alert('Ocurrio un error en addReferTo, postSlices');
            return rejectWithValue({error})
        }
    }
)
export const handleLikeToPost = createAsyncThunk(
    'handleLikeToPost/postSlices',
    async (idPost,{rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/handleLikeToPost/${idPost}`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en addLikeToPost, postSlices', error);
            alert('Ocurrio un error en addLikeToPost, postSlices');
            return rejectWithValue({error})
        }
    }
)

export const deletePost = createAsyncThunk(
    'deletePost/postSlices',
    async (idPost, {rejectWithValue}) => {
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

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en deletePost, postSlices', error);
            alert('Ocurrio un error en deletePost, postSlices');
            return rejectWithValue({error})
        }
    }
)

export const getVisiblePosts = createAsyncThunk(
    'getVisiblePosts/postSlices',
    async (nameTag,{rejectWithValue}) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/visiblePosts?nameTag=${nameTag}`);
            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en getVisiblePgetVisiblePosts, postSlices. Error: ', error);
            alert('Ocurrio un error en getVisiblePgetVisiblePosts, postSlices');
            return rejectWithValue({error})
        }
    }
)

export const updateTagsInPost = createAsyncThunk(
    'updateTags/postSlices',
    async (tags,{rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/updateTags/${tags.idPost}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(tags)
            });
            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrió un error en updateTags, postSlices. Error: ', error);
            alert('Ocurrió un error en updateTags, postSlices.');
            return rejectWithValue({error})
        }
    }
)

export const getTrendPosts = createAsyncThunk(
    'getTrendPosts/postSlices',
    async (_,{rejectWithValue}) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/getTrendPosts`)
            const res = await req.json();

            if(!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrió un error en getTrendPosts, postSlices. Error: ', error);
            alert('Ocurrió un error en getTrendPosts, postSlices.');
            return rejectWithValue({error})
        }
    }
)

const postSlices = createSlice({
    name: 'postSlices',
    initialState,
    reducers: {
        restarStatusPost: (state, action) => {
            state.status = null;
        },
        restartPostsList: (state) => {
            return { ...initialState };
        },
        restartPostState: (state) => {
            state.post = [];
            state.status = null;
        }
    },
    extraReducers: (builders) => {
        createPostBuilders(builders, createPost);
        getPostsBuilders(builders, getPosts);
        getPostsOfFollowingsBuilders(builders, getPostsOfFollowings);
        getPostByIDBuilders(builders, getPostByID);
        addCommentBuilders(builders, addComment);
        handleLikeToPostBuilders(builders, handleLikeToPost);
        addReferToBuilders(builders, addReferTo);
        getVisiblePostsBuilders(builders, getVisiblePosts);
        updateTagsInPostBuilders(builders, updateTagsInPost);
        getTrendPostsBuilders(builders, getTrendPosts);
        handleLikeCommentBuilders(builders, handleLikeComment);
    }
})

export const { restarStatusPost, restartPostsList, restartPostState } = postSlices.actions;
export default postSlices.reducer;