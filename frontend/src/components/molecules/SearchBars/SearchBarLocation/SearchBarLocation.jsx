import React, { useContext, useState } from 'react'
import { InputSearchBarStyles } from '../SearchBarFollowers/SearchBarFollowerStyles'
import { GlobalContext } from '../../../../Context/GlobalContext';

const SearchBarLocation = ({placeholder}) => {
    const { setLocationSelected, locationSelected } = useContext(GlobalContext);

    return (
        <InputSearchBarStyles
            type="text"
            value={locationSelected}
            onChange={(e) => setLocationSelected(e.target.value)}
            placeholder={placeholder}
        />
    )
}

export default SearchBarLocation