import { configureStore } from '@reduxjs/toolkit';
import authSlices from '../slices/authSlices/authSlices';
import userSlices from '../slices/userSlices/userSlices';
import locationSlices from '../slices/locationSlices/locationSlices';
import postSlices from '../slices/postSlices/postSlices';
import notificationSlices from '../slices/socketSlices/notificationSlices/notificationSlices';
import tagSlices from '../slices/tagSlices/tagSlices';
import likeSlices from '../slices/likeSlices/likeSlices';
import viewSlices from '../slices/viewSlices/viewSlices';
import authSocketSlices from '../slices/socketSlices/authSocketSlices/authSocketSlices';
import updateAuth_middleware from '../middlewares/updateAuth_middleware';
import { thunk } from 'redux-thunk';
import professionSlices from '../slices/professionSlices/professionSlices';

const store = configureStore({
    reducer:{
        authSlices: authSlices,
        userSlices: userSlices,
        locationSlices: locationSlices,
        postSlices: postSlices,
        notificationSlices: notificationSlices,
        tagSlices: tagSlices,
        likeSlices: likeSlices,
        viewSlices: viewSlices,
        authSocketSlices: authSocketSlices,
        professionSlices: professionSlices
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk,updateAuth_middleware)
});

export default store;