<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import { InputSearchBarStyles } from '../SearchBarFollowers/SearchBarFollowerStyles'
import { GlobalContext } from '../../../../Context/GlobalContext';

const SearchBarLocation = ({placeholder}) => {
    const { setLocationSelected, locationSelected, search, setSearch} = useContext(GlobalContext);


    return (
        <InputSearchBarStyles
            type="text"
            value={locationSelected}
            onChange={(e) => setLocationSelected(e.target.value)}
            placeholder={placeholder}
        />
    )
}

=======
import React, { useContext, useState } from 'react'
import { InputSearchBarStyles } from '../SearchBarFollowers/SearchBarFollowerStyles'
import { GlobalContext } from '../../../../Context/GlobalContext';

const SearchBarLocation = ({placeholder}) => {
    const { setLocationSelected, locationSelected, search, setSearch} = useContext(GlobalContext);


    return (
        <InputSearchBarStyles
            type="text"
            value={locationSelected}
            onChange={(e) => setLocationSelected(e.target.value)}
            placeholder={placeholder}
        />
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default SearchBarLocation