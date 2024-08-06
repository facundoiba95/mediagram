<<<<<<< HEAD
import React from 'react'
import { ResultLocationContainerStyles } from '../../organisms/Forms/FormCreateContent/FormCreateContentStyles'
import MoonLoaderResponsive from '../Loaders/MoonLoaderResponsive/MoonLoaderResponsive'
import { ResultLocationItemStyles } from '../../organisms/Forms/FormChangeLocation/FormChangeLocationStyles'
import { useSelector } from 'react-redux'
import { MdLocationOn } from 'react-icons/md'

const SearchLocationResult = ({ handleSelectLocation }) => {
    const errorLocation = useSelector(state => state.locationSlices.location.error);
    const locationFounded = useSelector(state => state.locationSlices.location);
    const isLoadingLocation = useSelector(state => state.locationSlices.isLoading);

    const renderLocation = () => {
        if (errorLocation == null) {
            return locationFounded.map(item => (
                <ResultLocationItemStyles onClick={() => handleSelectLocation()}>
                    <MdLocationOn className='iconLocation' />
                    <p>{item.direccion}</p>
                </ResultLocationItemStyles>
            ))
        } else {
            return (
                <ResultLocationItemStyles>
                    <MdWrongLocation className='iconLocation' />{errorLocation}
                </ResultLocationItemStyles>
            )
        }
    }

    return (
        <ResultLocationContainerStyles isLocation={locationFounded.length}>
            {
                isLoadingLocation
                    ? <MoonLoaderResponsive size={30} />
                    : renderLocation()
            }
        </ResultLocationContainerStyles>
    )
}

=======
import React from 'react'
import { ResultLocationContainerStyles } from '../../organisms/Forms/FormCreateContent/FormCreateContentStyles'
import MoonLoaderResponsive from '../Loaders/MoonLoaderResponsive/MoonLoaderResponsive'
import { ResultLocationItemStyles } from '../../organisms/Forms/FormChangeLocation/FormChangeLocationStyles'
import { useSelector } from 'react-redux'
import { MdLocationOn } from 'react-icons/md'

const SearchLocationResult = ({ handleSelectLocation }) => {
    const errorLocation = useSelector(state => state.locationSlices.location.error);
    const locationFounded = useSelector(state => state.locationSlices.location);
    const isLoadingLocation = useSelector(state => state.locationSlices.isLoading);

    const renderLocation = () => {
        if (errorLocation == null) {
            return locationFounded.map(item => (
                <ResultLocationItemStyles onClick={() => handleSelectLocation()}>
                    <MdLocationOn className='iconLocation' />
                    <p>{item.direccion}</p>
                </ResultLocationItemStyles>
            ))
        } else {
            return (
                <ResultLocationItemStyles>
                    <MdWrongLocation className='iconLocation' />{errorLocation}
                </ResultLocationItemStyles>
            )
        }
    }

    return (
        <ResultLocationContainerStyles isLocation={locationFounded.length}>
            {
                isLoadingLocation
                    ? <MoonLoaderResponsive size={30} />
                    : renderLocation()
            }
        </ResultLocationContainerStyles>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default SearchLocationResult