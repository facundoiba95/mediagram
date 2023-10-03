import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getLocationByCityBuilders from "./locationBuilders/getLocationByCityBuilders";

const initialState = {
    error: null,
    message: null,
    status: null,
    isLoading: false,
    location: []
}

export const getLocationByCity = createAsyncThunk(
    'getLocationByCity/locationSlices',
    async (city) => {
        try {
            const apiKey = `${import.meta.env.VITE_APIKEY_GOOGLEMAPS}`;
            const req = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`);
            const res = await req.json();
            const results = res.results;

            if(results && results.length > 0){
                const ubicacion = results[0].geometry.location;
                const dataLocation = [{
                    latitud: ubicacion.lat,
                    longitud: ubicacion.lng,
                    direccion: results[0].formatted_address
                }]

                return dataLocation;
            } else {
                return {
                    error: `No se encontraron resultados para "${city}"`,
                    status: 404
                }
            }
        } catch (error) {
            console.error('Ocurrio un error en getLocationByCity, locationSlices.');
        }
    }
);

const locationSlices = createSlice({
    name: 'locationSlices',
    initialState,
    reducers: {
        resetLocation: ( state, action ) => {
            state.location = [];
        }
    },
    extraReducers: ( builders ) => {
        getLocationByCityBuilders( builders, getLocationByCity );
    }
})
export const { resetLocation } = locationSlices.actions;
export default locationSlices.reducer;

