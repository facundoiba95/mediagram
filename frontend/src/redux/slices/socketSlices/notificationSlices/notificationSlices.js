import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getNotificationsBuilders from "./notificationBuilders/getNotificationsBuilders";
import socket from "../../../../../socket";
import { useSelector } from "react-redux";

const initialState = {
    error: null,
    status: null,
    notifications: [],
    isLoading: false
}

export const getNotifications = createAsyncThunk(
    'getNotifications/notificationSlices',
    async (_idUser) => {
        try {
            const result = await new Promise((resolve) => {
                socket.emit('getNotifications',{ 
                         _id: _idUser             
                })
                socket.on('getNotifications', (data) => {
                    resolve(data);
                })
            });

            return result;
        } catch (error) {
            console.error('Ocurrio un error en getNotifications() slice. Error: ', error);
            alert('Ocurrio un error en getNotifications() slice. Error: ', error);
        }
    }
);

const notificationSlice = createSlice({
    name: 'notificationSlices',
    initialState,
    reducers:{
        restartNotifications: ( state, action ) => {
            return initialState;
        }
    },
    extraReducers: ( builders ) => {
        getNotificationsBuilders( builders, getNotifications );
    }
})

export const { restartNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;