import React, { useContext, useEffect, useState } from 'react'
import { SearchBarContainerStyles } from './SearchBarStyles'
import { BiSearch } from 'react-icons/bi';
import { GlobalContext } from '../../../Context/GlobalContext';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { restartUser, searchUser } from '../../../redux/slices/userSlices/userSlices';

const SearchBar = () => {
    const dispatch = useDispatch();
    const { isOpenSearchBar, setIsOpenSearchBar } = useContext(GlobalContext);
    const [ inputSearchUser, setInputSearchUser ] = useState('');

    useEffect(() => {
        if(inputSearchUser.length > 3){
            dispatch(searchUser(inputSearchUser))
        } else {
            setInputSearchUser(inputSearchUser);
            dispatch(restartUser())
            return;
        }
    }, [ inputSearchUser ])

  return (
    <SearchBarContainerStyles isOpenSearchBar={isOpenSearchBar} onSubmit={e => e.preventDefault()}>
        <AiOutlineCloseCircle className='iconCloseSearchBar' onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}/>
        <input type="text" value={inputSearchUser} placeholder='Ingresa el nombre a buscar ...' onChange={(e) => setInputSearchUser(e.target.value)}/>
        <BiSearch className='iconSearch'/>
    </SearchBarContainerStyles>
    )
}

export default SearchBar