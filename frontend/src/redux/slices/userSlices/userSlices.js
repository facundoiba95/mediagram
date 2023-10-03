import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import searchUserBuilders from './builders/searchUserBuilders';
import followUserBuilders from './builders/followUserBuilders';

const initialState = {
    error: null,
    message: null,
    status: null,
    user: [],
    isLoading: false
}

export const searchUser = createAsyncThunk(
    'searchUser/userSlices',
    async (valueUser) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/searchUser/${valueUser}`,{
                method: "GET",
                mode: 'cors',
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en searchUser. userSlices');
            alert('Ocurrio un error en searchUser, userSlices');
        }
    }
)

export const followUser = createAsyncThunk(
    'followUser/userSlices',
    async (user) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/followUser`, {
                method: "POST",
                mode:'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en followUser. userSlices');
            alert('Ocurrio un error en followUser, userSlices');
        }
    }
)

const userSlices = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: ( state, action ) => {
            state.user = action.payload;
        },
        restartUser: ( state,action ) => {
            state.user = [];
            state.error = null;
        }
    },
    extraReducers: ( builders ) => {
        searchUserBuilders( builders, searchUser );
        followUserBuilders( builders, followUser );
    }
});

export const { setUser, restartUser } = userSlices.actions;
export default userSlices.reducer;