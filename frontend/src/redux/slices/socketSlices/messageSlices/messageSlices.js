import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import socket from "../../../../../socket";
import getMessagesBuilders from "./messageBuilders/getMessagesBuilders";
import handleImportantMessageBuilders from "./messageBuilders/handleImportantMessageBuilders";
import deleteMessageBuilders from "./messageBuilders/deleteMessageBuilders";
import sendMessageBuilders from "./messageBuilders/sendMessageBuilders";

const initialState = {
    error: null,
    status: null,
    message: [],
    messagesInChat: [],
    isLoading: false
}

const socket_chat = socket.socket_chat;

export const getMessages = createAsyncThunk(
    'getMessages/messageSlices',
    async (idChat, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                socket_chat.emit("getMessages", { idChat })

                socket_chat.on("getMessages", (data) => {
                    resolve(data)
                })
            })

            return response;
        } catch (error) {
            console.error("Ocurrio un error al obtener los mensajes del chat. Error", error);
            return rejectWithValue({ error })
        }
    }
)

export const sendMessage = createAsyncThunk(
    'newMessage/messageSlices',
    async ({idChat, message}, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                socket_chat.emit("sendMessage", { idChat, message })

                socket_chat.on("newMessage", (data) => {
                    resolve(data)
                })
            })

            return response;
        } catch (error) {
            console.error("Ocurrio un error al enviar el mensaje. Error", error);
            return rejectWithValue({ error })
        }
    }
)

export const deleteMessage = createAsyncThunk(
    'deleteMessage/messageSlices',
    async (idMessage, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                socket_chat.emit("deleteMessage", { idMessage })

                socket_chat.on("deleteMessage", (data) => {
                    resolve(data)
                })
            })

            return response;
        } catch (error) {
            console.error("Ocurrio un error al eliminar el mensaje. Error", error);
            return rejectWithValue({ error })
        }
    }
)

export const handleImportantMessage = createAsyncThunk(
    'handleImportantMessage/messageSlices',
    async (important, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                socket_chat.emit("importantMessage", { important })

                socket_chat.on("importantMessage", (data) => {
                    resolve(data)
                })
            })

            return response;
        } catch (error) {
            console.error("Ocurrio un error al cambiar el estado de 'important' en message. Error", error);
            return rejectWithValue({ error })
        }
    }
)

const messageSlices = createSlice({
    name: "messageSlice",
    initialState,
    reducers: {
        setInitialState_messages: (state, action) => {
            return { ...initialState };
        },
        resetMessageState: (state, action) => {
            state.message = [];
        },
        resetMessagesInChatState: (state, action) => {
            state.messagesInChat = [];
        },
        setMessages: (state,action) => {
            state.messagesInChat.push(state.message);
        },
        addMessage: (state, action) => {
            state.message = action.payload;
            state.messagesInChat = [ ... state.messagesInChat, action.payload]
        },
        setMessagesInChat: (state, action) => {
            state.messagesInChat = [ ... state.messagesInChat, action.payload ]
        }
    },
    extraReducers: (builders) => {
        sendMessageBuilders(builders, sendMessage);
        getMessagesBuilders(builders, getMessages);
        handleImportantMessageBuilders(builders, handleImportantMessage);
        deleteMessageBuilders(builders, deleteMessage);
    }
})

export const { resetMessageState, setInitialState_messages, resetMessagesInChatState, setMessages, setMessagesInChat } = messageSlices.actions;
export default messageSlices.reducer;