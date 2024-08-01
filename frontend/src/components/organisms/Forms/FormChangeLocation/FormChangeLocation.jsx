import React, { useContext } from 'react'
import { ButtonSearchLocationStyles, FormChangeLocationContainerStyles } from './FormChangeLocationStyles'
import SearchBarLocation from '../../../molecules/SearchBars/SearchBarLocation/SearchBarLocation'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { useDispatch, useSelector,  } from 'react-redux'
import SearchLocationResult from '../../../molecules/SearchLocationResult/SearchLocationResult'
import { getLocationByCity } from '../../../../redux/slices/locationSlices/locationSlices'
import { addNewLocation } from '../../../../redux/slices/userSlices/userSlices'
import { refreshUserAuth } from '../../../../redux/slices/authSlices/authSlices'

const FormChangeLocation = ({ location }) => {
    const { locationSelected } = useContext(GlobalContext);
    const placeholder_value = location ? "Cambiar localidad" : "Buscar localidad"
    const locationState = useSelector(state => state.locationSlices.location);
    const dispatch = useDispatch();

    const currentLocation = () => {
        if (location) {
            return (<b>{location}</b>)
        } else {
            return (<b>Aun no hay una localidad agregada.</b>)
        }
    }

    const renderChangeLocation = () => (
        <span>
            <b>Tu localidad actual es "{location.toUpperCase()}"</b>
        </span>
    )

    
    const handleSearchLocation = () => {
        dispatch(getLocationByCity(locationSelected))
    }

    const handleSelectLocation = async () => {
        await dispatch(addNewLocation({location: locationState[0].direccion}))
        await dispatch(refreshUserAuth());
    }

    return (
        <FormChangeLocationContainerStyles onSubmit={(e) => e.preventDefault()}>
            {
                location
                    ? renderChangeLocation()
                    : currentLocation()
            }
            <SearchBarLocation placeholder={placeholder_value}/>
            <SearchLocationResult handleSelectLocation={handleSelectLocation}/>
            <ButtonSearchLocationStyles onClick={handleSearchLocation}>Buscar localidad</ButtonSearchLocationStyles>
        </FormChangeLocationContainerStyles>
    )
}

export default FormChangeLocation