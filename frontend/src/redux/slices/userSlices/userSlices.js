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
import getTrendUsersBuilders from './builders/getTrendUsersBuilders';
import getFollowersBuilders from './builders/getFollowersBuilders';
import getFollowingsBuilders from './builders/getFollowingsBuilders';
import addNewLocationBuilders from './builders/addNewLocationBuilders';
import updateProfessionBuilders from './builders/updateProfessionBuilders';

const initialState = {
    error: null,
    message: null,
    status: null,
    user: [],
    userFound: [],
    userSelected: [],
    closeList: [],
    trendUsers: [],
    followers: [],
    followings: [],
    isLoading: false
}

export const searchUser = createAsyncThunk(
    'searchUser/userSlices',
    async (username, { rejectWithValue }) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/searchUser/${username}`, {
                method: "GET",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en searchUser. userSlices', error);
            alert('Ocurrio un error en searchUser, userSlices');
            return rejectWithValue({ error })
        }
    }
)

export const getFollowers = createAsyncThunk(
    "getFollowers/userSlices",
    async (username, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');

            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/getFollowers/${username}`, {
                method: "GET",
                mode: 'cors',
                headers: {
                    "x-access-token": `${token}`
                }
            })

            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en getFollowers. userSlices', error);
            alert('Ocurrio un error en getFollowers, userSlices');
            return rejectWithValue({ error })
        }
    }
)

export const getFollowings = createAsyncThunk(
    "getFollowings/userSlices",
    async (username,{rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');

            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/getFollowings/${username}`, {
                method: "GET",
                mode: 'cors',
                headers: {
                    "x-access-token": `${token}`
                }
            })

            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en getFollowings. userSlices', error);
            alert('Ocurrio un error en getFollowings, userSlices');
            return rejectWithValue({error})
        }
    }
)

export const selectUser = createAsyncThunk(
    'selectUser/userSlices',
    async (username, {rejectWithValue}) => {
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

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en selectUser. userSlices', error);
            alert('Ocurrio un error en selectUser, userSlices');
            return rejectWithValue({error})
        }
    }
)

export const followUser = createAsyncThunk(
    'followUser/userSlices',
    async (user, {rejectWithValue}) => {
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

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en followUser. userSlices', error);
            alert('Ocurrio un error en followUser, userSlices');
            return rejectWithValue({error})
        }
    }
)

export const unfollowUser = createAsyncThunk(
    'unfollowUser/userSlices',
    async (dataUnfollow,{rejectWithValue}) => {
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

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en unfollowUser. userSlices', error);
            alert('Ocurrio un error en unfollowUser, userSlices');
            return rejectWithValue({error})
        }
    }
)

export const refreshUser = createAsyncThunk(
    'refreshUser/userSlices',
    async (username, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const usernameSelected = { username }

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

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en refreshUser, userSlices. Error: ', error);
            alert('Ocurrio un error en refreshUser, userSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
);

export const handleIsFollowing = createAsyncThunk(
    'handleIsFollowing/userSlices',
    async (_id, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/handleIsFollowing/${_id}`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en handleIsFollowing, userSlices. Error: ', error);
            alert('Ocurrio un error en handleIsFollowing, userSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
)

export const handleFollowUpRequest = createAsyncThunk(
    'handleFollowUpRequest/userSlices',
    async (dataFollowUpRequest, {rejectWithValue}) => {
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

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en handleFollowUpRequest, userSlices. Error: ', error);
            alert('Ocurrio un error en handleFollowUpRequest, userSlices. Error: ', error);
            return rejectWithValue({error});
        }
    }
)

export const changeImgProfile = createAsyncThunk(
    'changeImgProfile/userSlices',
    async (form, {rejectWithValue}) => {
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

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en changeImgProfile, userSlices. Error: ', error);
            alert('Ocurrio un error en changeImgProfile, userSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
)

export const getCloseList = createAsyncThunk(
    'getCloseList/userSlices',
    async (_,{rejectWithValue}) => {
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

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en getCloseList, userSlices. Error: ', error);
            alert('Ocurrio un error en getCloseList, userSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
)

export const getTrendUsers = createAsyncThunk(
    'getTrendUsers/userSlices',
    async (_,{rejectWithValue}) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/getTrendUsers`);
            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en getTrendUsers, userSlices. Error: ', error);
            alert('Ocurrio un error en getTrendUsers, userSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
)

export const addNewLocation = createAsyncThunk(
    "addNewLocation/userSlices",
    async (location, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/addNewLocation`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(location)
            });
            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en addNewLocation, userSlices. Error: ', error);
            alert('Ocurrio un error en addNewLocation, userSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
)

export const updateProfession = createAsyncThunk(
    "updateProfession/userSlices",
    async (idProfession, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}user/updateProfession/${idProfession}`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            });

            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en updateProfession, userSlices. Error: ', error);
            alert('Ocurrio un error en updateProfession, userSlices. Error: ', error);
            return rejectWithValue({error})
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
            return { ...initialState };
        },
        resetState_followers: (state, action) => {
            state.followers = [];
            state.message = null;
            state.status = null;
        },
        resetState_followings: (state, action) => {
            state.followings = [];
            state.message = null;
            state.status = null;
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
        getCloseListBuilders(builders, getCloseList)
        getTrendUsersBuilders(builders, getTrendUsers);
        getFollowersBuilders(builders, getFollowers);
        getFollowingsBuilders(builders, getFollowings);
        addNewLocationBuilders(builders, addNewLocation);
        updateProfessionBuilders(builders, updateProfession);
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
    restartUserSlice,
    resetState_followers,
    resetState_followings
} = userSlices.actions;

export default userSlices.reducer;