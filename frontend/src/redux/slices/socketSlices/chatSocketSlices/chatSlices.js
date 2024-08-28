import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getChatsBuilders from "./chatSocketBuilders/getChatsBuilders";
import newChatBuilders from "./chatSocketBuilders/newChatBuilders";
import deleteChatBuilders from "./chatSocketBuilders/deleteChatBuilders";
import getChatByIDBuilders from "./chatSocketBuilders/getChatByIDBuilders";
import socket from "../../../../../socket";

const initialState = {
    error: null,
    isLoading: false,
    status: null,
    message: null,
    chats: [],
    chatSelected: []
}

const socket_chat = socket.socket_chat;

export const getChats = createAsyncThunk(
    'getChats/chatSlices',
    async (_, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                socket_chat.emit("getChats");

                socket_chat.on("getChats", (data) => {
                    resolve(data)
                })
            })

            return response;
        } catch (error) {
            console.error("Ocurrio un error al obtener los chats. Error", error);
            return rejectWithValue({ error })
        }
    }
)

export const newChat = createAsyncThunk(
    'newChat/chatSlices',
    async ({ type, idUser }, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                socket_chat.emit("newChat", { type, idUser });

                socket_chat.on("newChat", (data) => {
                    resolve(data)
                })
            })

            return response;
        } catch (error) {
            console.error("Ocurrio un error al crear el nuevo chat. Error", error);
            return rejectWithValue({ error })
        }
    }
)

export const getChatByID = createAsyncThunk(
    'getChatByID/chatSlices',
    async ({ idChat }, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                socket_chat.emit("getChatByID", { idChat });

                socket_chat.on("getChatByID", (data) => {
                    resolve(data)
                })
            })

            return response;
        } catch (error) {
            console.error("Ocurrio un error al obtener el chat. Error", error);
            return rejectWithValue({ error })
        }
    }
)

export const deleteChat = createAsyncThunk(
    'deleteChat/chatSlices',
    async (idChat, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                socket_chat.emit("deleteChat", { idChat });

                socket_chat.on("deleteChat", (data) => {
                    resolve(data)
                })
            })

            return response;
        } catch (error) {
            console.error("Ocurrio un error al eliminar el chat. Error", error);
            return rejectWithValue({ error });
        }
    }
)

const chatSlices = createSlice({
    name: "chatSlice",
    initialState,
    reducers: {
        setInitialState_chat: (state, action) => {
            return { ...initialState };
        },
        resetChatsState: (state, action) => {
            state.chats = []
        },
        resetChatSelectedState: (state, action) => {
            state.chatSelected = []
        },
        setChat: (state, action) => {
            state.chatSelected = action.payload;
        }
    },
    extraReducers: (builders) => {
        getChatsBuilders(builders, getChats);
        newChatBuilders(builders, newChat);
        deleteChatBuilders(builders, deleteChat);
        getChatByIDBuilders(builders, getChatByID);
    }
})

export const { setInitialState_chat, resetChatSelectedState, resetChatsState, setChat } = chatSlices.actions;
export default chatSlices.reducer;