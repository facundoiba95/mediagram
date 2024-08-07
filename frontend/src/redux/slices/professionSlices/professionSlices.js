import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getProfessionByIDBuilders from "./professionBuilders/getProfessionByIDBuilders";
import getProfessionsBuilders from "./professionBuilders/getProfessionsBuilders";
import createNewProfessionBuilders from "./professionBuilders/createNewProfessionBuilders";

const initialState = {
    status: null,
    error: null,
    message: null,
    isLoading: false,
    profession: [],
    professions: [],
    professionSelected: []
} 

export const getProfessions = createAsyncThunk(
    "getProfessions/professionSlices",
    async () => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}profession/getProfessions`)
            const res = await req.json();
            return res;
        } catch (error) {
            console.error("Ocurrio un error al obtener las profesiones, en getProfessions. Error: ", error);
            alert("Ocurrio un error al obtener las profesiones, en getProfessions.")
        }
    }
)

export const getProfessionByID = createAsyncThunk(
    "getProfessionByID/professionSlices",
    async (idProfession) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}profession/getProfessionByID?idProfession=${idProfession}`)
            const res = await req.json();
            return res;
        } catch (error) {
            console.error("Ocurrio un error al obtener la profesion, en getProfessionByID. Error: ", error);
            alert("Ocurrio un error al obtener la profesion, en getProfessionByID.")
        }
    }
)

export const createNewProfession = createAsyncThunk(
    "createNewProfession/professionSlices",
    async (name) => {
        try {
            const token = localStorage.getItem("token");
            const req = await fetch(`${import.meta.env.VITE_URL_SERVER}profession/createNewProfession/${name}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                }
            })

            const res = await req.json();
            return res;
        } catch (error) {
            console.error("Ocurrio un error al crear nueva profesion, en createNewProfession. Error: ", error);
            alert("Ocurrio un error al crear nueva profesion, en createNewProfession.")  
        }
    }
)

const professionSlices = createSlice({
    name: "professionSlices",
    initialState,
    reducers: {
        resetStateProfession: (state, action) => {
            return { ... initialState}
        },
        resetProfession: (state, action) => {
            state.profession = []
        },
        resetProfessions: (state,action) => {
            state.professions = []
        },
        setProfession: (state, action) => {
             state.profession = action.payload;
        },
        setProfessionSelected: (state, action) => {
            state.professionSelected = action.payload;
        }
    },
    extraReducers: (builders) => {
        getProfessionByIDBuilders(builders, getProfessionByID);
        getProfessionsBuilders(builders, getProfessions);
        createNewProfessionBuilders(builders, createNewProfession);
    }
})

export const { resetProfession, resetProfessions, resetStateProfession, setProfession, setProfessionSelected } = professionSlices.actions;

export default professionSlices.reducer;