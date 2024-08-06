<<<<<<< HEAD
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: null,
    status: false,
    userAuth_socket: [],
    status_connection: null,
    isLoading: false
}

const authSocketSlices = createSlice({
    name: "authSocketSlices",
    initialState,
    reducers: {
        setStatusConnection: (state,action) => {
            state.status_connection = action.payload
        }
    }
})

export const { setStatusConnection } = authSocketSlices.actions;
=======
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: null,
    status: false,
    userAuth_socket: [],
    status_connection: null,
    isLoading: false
}

const authSocketSlices = createSlice({
    name: "authSocketSlices",
    initialState,
    reducers: {
        setStatusConnection: (state,action) => {
            state.status_connection = action.payload
        }
    }
})

export const { setStatusConnection } = authSocketSlices.actions;
>>>>>>> b3173dc1 (first commit in Ubuntu)
export default authSocketSlices.reducer;