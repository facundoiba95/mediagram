import React, { useContext, useState } from 'react'
import { ResultLocationContainerStyles } from '../Forms/FormCreateContent/FormCreateContentStyles'
import { useDispatch, useSelector } from 'react-redux';
import { getLocationByCity, resetStateLocation } from '../../../redux/slices/locationSlices/locationSlices';
import { MdLocationOn, MdWrongLocation } from 'react-icons/md';
import { FaWindowClose } from 'react-icons/fa';
import { GlobalContext } from '../../../Context/GlobalContext';
import { MoonLoader } from 'react-spinners';

const GeoLocationPost = () => {
    const dispatch = useDispatch();

    // location states
    const { setLocationSelected } = useContext(GlobalContext);
    const [isHiddenInputLocation, setIsHiddenInputLocation] = useState(false);
    const [inputCity, setInputCity] = useState('');

    // location redux states
    const { location, isLoading } = useSelector(state => state.locationSlices);
    const errorLocation = useSelector(state => state.locationSlices.location.error);

    const searchLocation = (e) => {
        e.preventDefault();
        dispatch(getLocationByCity(inputCity))
    }

    const handleSelectLocation = () => {
        setLocationSelected(location[0].direccion)
        setIsHiddenInputLocation(true)
        setInputCity('');
    }

    const handleRestartLocationSelected = () => {
        dispatch(resetStateLocation());
        setIsHiddenInputLocation(false)
    }

    const renderLocation = () => {
        if (errorLocation == null) {
            return location.map(item => {
                return (
                    <>
                        <p onClick={() => handleSelectLocation()}>
                            <MdLocationOn className='iconLocation' />
                            {item.direccion}
                        </p>
                        <FaWindowClose className='iconDeleteLocationSelected' onClick={() => handleRestartLocationSelected()} />
                    </>

                )
            })
        } else {
            return (
                <p><MdWrongLocation className='iconLocation' />{errorLocation}</p>
            )
        }
    }

    return (
        <span>
            <input
                type="text"
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                className='inputText'
                placeholder='Agregar ubicación'
                hidden={isHiddenInputLocation}
            />
            <ResultLocationContainerStyles isLocation={location.length}>
                {
                    isLoading ?
                        <MoonLoader size={10} />
                        : renderLocation()
                }
            </ResultLocationContainerStyles>
            <button onClick={(e) => searchLocation(e)} className='btnSearchLocation' hidden={isHiddenInputLocation}>Buscar ubicación</button>
        </span>
    )
}

export default GeoLocationPost