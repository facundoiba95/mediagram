import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import searchUserBuilders from './builders/searchUserBuilders';
import followUserBuilders from './builders/followUserBuilders';
import refreshUserBuilders from './builders/refreshUserBuilders';
import unfollowUserBuilders from './builders/unfollowUserBuilders';
import selectUserBuilders from './builders/selectUserBuilders';
import handleIsFollowingBuilders from './builders/handleIsFollowingBuilders';
import handleFollowUpRequestBuilders from './builders/handleFollowUpRequestBuilders';
import changeImgProfileBuilders from './builders/changeImgProfileBuilders';
import getCloseListBuilders from './builders/getCloseListBuilders';

const initialState = {
    error: null,
    message: null,
    status: null,
    user: [],
    userFound: [],
    userSelected: [],
    closeList: [],
    isLoading: false
}

export const searchUser = createAsyncThunk(
    'searchUser/userSlices',
    async (valueUser) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/searchUser/${valueUser}`, {
                method: "GET",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en searchUser. userSlices', error);
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
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/selectUser/`, {
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
            console.error('Ocurrio un error en selectUser. userSlices', error);
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
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(user)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en followUser. userSlices', error);
            alert('Ocurrio un error en followUser, userSlices');
        }
    }
)

export const unfollowUser = createAsyncThunk(
    'unfollowUser/userSlices',
    async (dataUnfollow) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/unfollowUser`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(dataUnfollow)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en unfollowUser. userSlices', error);
            alert('Ocurrio un error en unfollowUser, userSlices');
        }
    }
)

export const refreshUser = createAsyncThunk(
    'refreshUser/userSlices',
    async (username) => {
        try {
            const token = localStorage.getItem('token');
            const usernameSelected = { username }
            console.log(usernameSelected);

            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/verifyUser`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(usernameSelected)
            })
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en refreshUser, userSlices. Error: ', error);
            alert('Ocurrio un error en refreshUser, userSlices. Error: ', error);
        }
    }
);

export const handleIsFollowing = createAsyncThunk(
    'handleIsFollowing/userSlices',
    async (username) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/handleIsFollowing`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify({ username })
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en handleIsFollowing, userSlices. Error: ', error);
            alert('Ocurrio un error en handleIsFollowing, userSlices. Error: ', error);
        }
    }
)

export const handleFollowUpRequest = createAsyncThunk(
    'handleFollowUpRequest/userSlices',
    async (dataFollowUpRequest) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/handleFollowUpRequest`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(dataFollowUpRequest)
            });
            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en handleFollowUpRequest, userSlices. Error: ', error);
            alert('Ocurrio un error en handleFollowUpRequest, userSlices. Error: ', error);
        }
    }
)

export const changeImgProfile = createAsyncThunk(
    'changeImgProfile/userSlices',
    async (form) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/changeImgProfile`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "x-access-token": `${token}`
                },
                body: new FormData(form)
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en changeImgProfile, userSlices. Error: ', error);
            alert('Ocurrio un error en changeImgProfile, userSlices. Error: ', error);
        }
    }
)

export const getCloseList = createAsyncThunk(
    'getCloseList/userSlices',
    async () => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/getCloseList`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();
            return res;
        } catch (error) {
            console.error('Ocurrio un error en getCloseList, userSlices. Error: ', error);
            alert('Ocurrio un error en getCloseList, userSlices. Error: ', error);
        }
    }
)
const userSlices = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUserFound: (state, action) => {
            state.userFound = action.payload
        },
        restartUserFound: (state, action) => {
            state.userFound = [];
            state.error = null;
            state.message = null;
        },
        restartUser: (state, action) => {
            state.user = [];
            state.error = null;
            state.message = null;
        },
        restartUserSelected: (state, action) => {
            state.userSelected = [];
            state.error = null;
            state.message = null;
        },
        listSearchFollow: (state, action) => {
            state.userFound = action.payload;
            state.message = 'Search user follows list'
        },
        setIsLoadingUser: (state, action) => {
            state.isLoading = action.payload;
        },
        restartStatusUser: (state, action) => {
            state.status = null;
            state.message = null;
        },
        restartUserSlice: (state) => {
            return initialState;
        }
    },
    extraReducers: (builders) => {
        searchUserBuilders(builders, searchUser);
        followUserBuilders(builders, followUser);
        refreshUserBuilders(builders, refreshUser);
        unfollowUserBuilders(builders, unfollowUser);
        selectUserBuilders(builders, selectUser);
        handleIsFollowingBuilders(builders, handleIsFollowing);
        handleFollowUpRequestBuilders(builders, handleFollowUpRequest);
        changeImgProfileBuilders(builders, changeImgProfile);
        getCloseListBuilders( builders, getCloseList )
    }
});

export const {
    setUser,
    setUserFound,
    restartUserFound,
    restartUser,
    listSearchFollow,
    setIsLoadingUser,
    restartUserSelected,
    restartStatusUser,
    restartUserSlice
} = userSlices.actions;

export default userSlices.reducer;