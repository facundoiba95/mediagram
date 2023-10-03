import React, { useContext } from 'react'
import { SearchSectionContainerStyles } from './SearchSectionStyles'
import SearchBar from '../../molecules/SearchBar/SearchBar'
import { GlobalContext } from '../../../Context/GlobalContext'
import ResultToSearch from '../../molecules/ResultToSearch/ResultToSearch'

const SearchSection = () => {
    const { isOpenSearchBar } = useContext(GlobalContext); 
  return (
    <SearchSectionContainerStyles isOpenSearchBar={isOpenSearchBar}>
        <SearchBar/>
        <ResultToSearch/>
    </SearchSectionContainerStyles>
    )
}

export default SearchSection