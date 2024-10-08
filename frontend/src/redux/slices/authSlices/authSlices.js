import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import handleLoginBuilders from "./authBuilders/handleLoginBuilders";
import handleRegisterBuilders from "./authBuilders/handleRegisterBuilders";
import refreshUserAuthBuilders from "./authBuilders/refreshUserAuthBuilders";
import changePrivacityOfAccountBuilders from "./authBuilders/changePrivacityOfAccountBuilders";
import changePasswordBuilders from "./authBuilders/changePasswordBuilders";
import validateSessionBuilders from "./authBuilders/validateSessionBuilders";
import updateListFriendsBuilders from "./authBuilders/updateListFriendsBuilders";
import getFollowUpRequestsBuilders from "./authBuilders/getFollowUpRequestsBuilders";
import socket from "../../../../socket";

const initialState = {
    error: null,
    message: null,
    user: [],
    token: null,
    isLogged: false,
    isLoading: false,
    status: null
};

export const handleLogin = createAsyncThunk(
    'handleLogin/authSlices',
    async (user, { rejectWithValue }) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}auth/login`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en handleLogin, authSlices. Error: ', error);
            alert('Ocurrio un error en handleLogin, authSlices. Error: ', error);
            return rejectWithValue({ error: error })
        }
    }
);

export const handleRegister = createAsyncThunk(
    'handleRegister/authSlices',
    async (user, { rejectWithValue }) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}auth/register`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en handleRegister, authSlices. Error: ', error);
            alert('Ocurrio un error en handleRegister, authSlices. Error: ', error);
            return rejectWithValue({ error })
        }
    }
);

export const refreshUserAuth = createAsyncThunk(
    'refreshUserAuth/authSlices',
    async (_, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}auth/refreshUserAuth`, {
                method: "GET",
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
            console.error('Ocurrio un error en refreshUserAuth, authSlices. Error: ', error);
            alert('Ocurrio un error en refreshUserAuth, authSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
)

export const changePrivacityOfAccount = createAsyncThunk(
    'changePrivacityOfAccount/authSlices',
    async (condition, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}auth/changePrivacityOfAccount`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify({ condition })
            })
            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en changePrivacityOfAccount, authSlices. Error: ', error);
            alert('Ocurrio un error en changePrivacityOfAccount, authSlices. Error: ', error);
            return rejectWithValue({ error })
        }
    }
)

export const changePassword = createAsyncThunk(
    'changePassword/authSlices',
    async (password, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}auth/changePassword`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify({ password })
            });

            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en changePassword(), authSlices. Error: ', error);
            alert('Ocurrio un error en changePassword(), authSlices. Error: ', error);
            return rejectWithValue({ error })
        }
    }
)

export const validateSession = createAsyncThunk(
    'validateSession/authSlices',
    async (_, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}auth/validateSession`, {
                method: 'POST',
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
            console.error('Ocurrio un error en validateSession(), authSlices. Error: ', error);
            alert('Ocurrio un error en validateSession(), authSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
)


export const updateCloseList = createAsyncThunk(
    'updateCloseList/authSlices',
    async (listFriends, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}auth/updateCloseList`, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify({ closeList: listFriends })
            })

            const res = await req.json();

            if (!req.ok) return rejectWithValue(res);

            return res;
        } catch (error) {
            console.error('Ocurrio un error en updateCloseList, userSlices. Error: ', error);
            alert('Ocurrio un error en updateCloseList, userSlices. Error: ', error);
            return rejectWithValue({ error })
        }
    }
)

export const getFollowUpRequests = createAsyncThunk(
    'getFollowUpRequests/authSlices',
    async (_, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}auth/getFollowUpRequests`, {
                method: "GET",
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
            console.error('Ocurrio un error en getFollowUpRequests, authSlices. Error: ', error);
            alert('Ocurrio un error en getFollowUpRequests, authSlices. Error: ', error);
            return rejectWithValue({error})
        }
    }
)

const authSlices = createSlice({
    name: 'authSlices',
    initialState,
    reducers: {
        restartStatusAuthSlice: (state, action) => {
            state.status = null;
        },
        logout: (state) => {
            localStorage.removeItem('token');
            socket.disconnectSocket_notifications();
            socket.disconnectSocket_chat();
            return { ...initialState };
        },
        resetStateAuth: (state) => {
            return { ...initialState };
        },
        updateAuthState: (state, action) => {
            state.isLogged = action.payload.isLogged;
            state.error = action.payload.error;
            state.status = action.payload.status;
        }
    },
    extraReducers: (builders) => {
        handleLoginBuilders(builders, handleLogin);
        handleRegisterBuilders(builders, handleRegister);
        refreshUserAuthBuilders(builders, refreshUserAuth);
        changePrivacityOfAccountBuilders(builders, changePrivacityOfAccount);
        changePasswordBuilders(builders, changePassword);
        validateSessionBuilders(builders, validateSession);
        updateListFriendsBuilders(builders, updateCloseList);
        getFollowUpRequestsBuilders(builders, getFollowUpRequests);
    }
});

export const { restartStatusAuthSlice, logout, resetStateAuth, updateAuthState } = authSlices.actions;

export default authSlices.reducer;