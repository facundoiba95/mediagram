import { configureStore } from '@reduxjs/toolkit';
import authSlices from '../slices/authSlices/authSlices';
import userSlices from '../slices/userSlices/userSlices';
import locationSlices from '../slices/locationSlices/locationSlices';
import postSlices from '../slices/postSlices/postSlices';
import notificationSlices from '../slices/socketSlices/notificationSlices/notificationSlices';

const store = configureStore({
    reducer:{
        authSlices: authSlices,
        userSlices: userSlices,
        locationSlices: locationSlices,
        postSlices: postSlices,
        notificationSlices: notificationSlices
    }
});

export default store;