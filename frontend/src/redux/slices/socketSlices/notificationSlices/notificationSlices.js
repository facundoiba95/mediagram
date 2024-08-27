import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getNotificationsBuilders from "./notificationBuilders/getNotificationsBuilders";
import viewNotificationsBuilders from "./notificationBuilders/viewNotificationsBuilders";
import socket from "../../../../../socket";

const initialState = {
    error: null,
    status: false,
    notifications: [],
    userReceptor: null,
    isLoading: false
}

const socket_notifications = socket.socket_notifications;

export const getNotifications = createAsyncThunk(
    'getNotifications/notificationSlices',
    async (_idUser) => {
        try {
            const result = await new Promise((resolve) => {
                socket_notifications.emit('getNotifications',{ 
                         _id: _idUser             
                })
                socket_notifications.on('getNotifications', (data) => {
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

export const viewNotifications = createAsyncThunk(
    'viewNotifications/notificationSlices',
    async (_idUser) => {
        try {
            const result = await new Promise((resolve) => {
                socket_notifications.emit('viewNotifications',{ 
                         _id: _idUser             
                })
                socket_notifications.on('viewNotifications', (data) => {
                    resolve(data);
                })
            });

            return result;
        } catch (error) {
            console.error('Ocurrio un error en viewNotifications() slice. Error: ', error);
            alert('Ocurrio un error en viewNotifications() slice. Error: ', error);
        }
    }
)
const notificationSlice = createSlice({
    name: 'notificationSlices',
    initialState,
    reducers:{
        restartNotifications: ( state, action ) => {
            return initialState;
        },
        alertNotification: ( state, action ) => {
            socket_notifications.emit('newNotification', {
                message: 'new notification from client socket!',
                userReceptor: state.userReceptor
            })
        },
        setUserReceptor: (state, action) => {
            // String username
            state.userReceptor = action.payload;
        },
        setStatusNotification: ( state,action ) => {
            state.status = !state.status;
        }
    },
    extraReducers: ( builders ) => {
        getNotificationsBuilders( builders, getNotifications );
        viewNotificationsBuilders( builders, viewNotifications );
    }
})

export const { restartNotifications, alertNotification, setUserReceptor,  setStatusNotification } = notificationSlice.actions;
export default notificationSlice.reducer;