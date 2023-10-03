import { configureStore } from '@reduxjs/toolkit';
import authSlices from '../slices/authSlices/authSlices';
import userSlices from '../slices/userSlices/userSlices';
import locationSlices from '../slices/locationSlices/locationSlices';
import postSlices from '../slices/postSlices/postSlices';

const store = configureStore({
    reducer:{
        authSlices: authSlices,
        userSlices: userSlices,
        locationSlices: locationSlices,
        postSlices: postSlices
    }
});

export default store;