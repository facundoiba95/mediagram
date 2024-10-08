import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { useDispatch } from 'react-redux'
import { restartUserFound, searchUser, setUserFound } from '../../../../redux/slices/userSlices/userSlices'
import { useNavigate } from 'react-router-dom'
import { SearchBarUserContainerStyles } from './SearchBarUsersStyles'

const SearchBarUsers = ({ data, placeholderValue, type, resetData }) => {
  const [inputSearchBar, setInputSearchBar] = useState('');
  const { isOpen, setIsOpen, setIsOpenMenu, setIsLoadingSearch } = useContext(GlobalContext);
  const navigator = useNavigate();

  const dispatch = useDispatch();

  const handleCloseSearchBar = () => {
    dispatch(setUserFound([]));
    dispatch(restartUserFound());
    setInputSearchBar('');
    dispatch(resetData());

    if (type === 'searchUserDB') {
      setIsOpen(false);
    } else {
      setIsOpen(false);
      navigator(-1);
    }
  }

  const filterData = () => {
    setIsLoadingSearch(true);
    const dataFiltered = data.filter(item => item.username.includes(inputSearchBar.trim()));
    if (type === 'searchUserDB') {
      dispatch(searchUser(inputSearchBar.trim()))
    }
    setIsLoadingSearch(false);
    return dataFiltered;
  }

  useEffect(() => {
    const handleSearch = async () => {
      if (!inputSearchBar.trim().length) {
        await dispatch(setUserFound([]));
        await dispatch(setUserFound(data));
      } else {
        await dispatch(setUserFound([]));
        await dispatch(setUserFound(filterData()))
      }
    }

    handleSearch()
  }, [inputSearchBar]);

 


  return (
    <SearchBarUserContainerStyles isOpen={isOpen}>
      <AiOutlineCloseCircle className='iconCloseSearchBar' onClick={() => handleCloseSearchBar()} />
      <input type="text" placeholder={placeholderValue} value={inputSearchBar} onChange={(e) => setInputSearchBar(e.target.value)} />
      <BiSearch className='iconSearch' />
    </SearchBarUserContainerStyles>
  )
}

export default SearchBarUsers;