<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { ContainerSearchBarStyles, InputSearchBarStyles } from './SearchBarFollowerStyles'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { setUserFound } from '../../../../redux/slices/userSlices/userSlices';

const SearchBarFollowers = ({ data, placeholder }) => {
  const [inputSearch, setInputSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserFound(data.filter(usr => usr.username.includes(inputSearch))))
  }, [inputSearch])

  return (
    <ContainerSearchBarStyles>
      <InputSearchBarStyles
        placeholder={placeholder}
        onChange={(e) => setInputSearch(e.target.value)} />
      <BiSearch className='iconSearch' />
    </ContainerSearchBarStyles>
  )
}

=======
import React, { useEffect, useState } from 'react'
import { ContainerSearchBarStyles, InputSearchBarStyles } from './SearchBarFollowerStyles'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { setUserFound } from '../../../../redux/slices/userSlices/userSlices';

const SearchBarFollowers = ({ data, placeholder }) => {
  const [inputSearch, setInputSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserFound(data.filter(usr => usr.username.includes(inputSearch))))
  }, [inputSearch])

  return (
    <ContainerSearchBarStyles>
      <InputSearchBarStyles
        placeholder={placeholder}
        onChange={(e) => setInputSearch(e.target.value)} />
      <BiSearch className='iconSearch' />
    </ContainerSearchBarStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default SearchBarFollowers