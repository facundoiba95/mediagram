import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import searchUserBuilders from './builders/searchUserBuilders';
import followUserBuilders from './builders/followUserBuilders';
import refreshUserBuilders from './builders/refreshUserBuilders';
import unfollowUserBuilders from './builders/unfollowUserBuilders';
import selectUserBuilders from './builders/selectUserBuilders';

const initialState = {
    error: null,
    message: null,
    status: null,
    user: [],
    userFound: [],
    userFiltered: [],
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

export const selectUser = createAsyncThunk(
    'selectUser/userSlices',
    async (username) => {
        try {
            const token = localStorage.getItem('token');
            const usernameValue = { username }
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/selectUser`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(usernameValue)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en selectUser. userSlices');
            alert('Ocurrio un error en selectUser, userSlices');
        }
    }
)

export const followUser = createAsyncThunk(
    'followUser/userSlices',
    async (user) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/followUser`, {
                method: "POST",
                mode:'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
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

export const unfollowUser = createAsyncThunk(
    'unfollowUser/userSlices',
    async (username) => {
        try {
            const token = localStorage.getItem('token');
            const usernameValue = { username };
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/unfollowUser`,{
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(usernameValue)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en unfollowUser. userSlices');
            alert('Ocurrio un error en unfollowUser, userSlices');
        }
    }
)

export const refreshUser = createAsyncThunk(
    'refreshUser/userSlices',
    async (username) => {
        try {
            const token = localStorage.getItem('token');
            const usernameSelected = {username}
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}post/verifyUser` , {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type" : "application/json",
                  "x-access-token": `${token}`
                },
                body: JSON.stringify(usernameSelected)
              })
              const res = await req.json();
              return res;
        } catch (error) {
            console.error('Ocurrio un error en refreshUser, authSlices. Error: ', error);
            alert('Ocurrio un error en refreshUser, authSlices. Error: ', error);
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
        setUserFound: ( state, action ) => {
            state.userFound = action.payload
        },
        restartUserFound: ( state,action ) => {
            state.userFound = [];
            state.error = null;
            state.message = null;
        },
        restartUser: ( state, action ) => {
            state.user = [];
            state.error = null;
            state.message = null;
        },
        restartUserFiltered: ( state,action )=> {
            state.userFiltered = [];
            state.error = null;
            state.message = null;
        },
        listSearchFollow: ( state,action ) => {
            state.userFound = action.payload;
            state.message = 'Search user follows list'
        },
        setIsLoadingUser: ( state,action ) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: ( builders ) => {
        searchUserBuilders( builders, searchUser );
        followUserBuilders( builders, followUser );
        refreshUserBuilders( builders, refreshUser );
        unfollowUserBuilders( builders, unfollowUser );
        selectUserBuilders( builders, selectUser );
    }
});

export const { setUser, setUserFound, restartUserFound, restartUser, listSearchFollow, setIsLoadingUser } = userSlices.actions;
export default userSlices.reducer;