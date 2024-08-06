<<<<<<< HEAD
import React, { useContext } from 'react'
import { InputSearchBarStyles } from '../SearchBarFollowers/SearchBarFollowerStyles'
import { GlobalContext } from '../../../../Context/GlobalContext';

const SearchBarProfession = ({ placeholder }) => {
  const { inputProfession, setInputProfession } = useContext(GlobalContext);

  return (
    <InputSearchBarStyles
      type="text"
      value={inputProfession}
      onChange={(e) => setInputProfession(e.target.value.toLowerCase().trim())}
      placeholder={placeholder}
    />
  )
}

=======
import React, { useContext } from 'react'
import { InputSearchBarStyles } from '../SearchBarFollowers/SearchBarFollowerStyles'
import { GlobalContext } from '../../../../Context/GlobalContext';

const SearchBarProfession = ({ placeholder }) => {
  const { inputProfession, setInputProfession } = useContext(GlobalContext);

  return (
    <InputSearchBarStyles
      type="text"
      value={inputProfession}
      onChange={(e) => setInputProfession(e.target.value.toLowerCase().trim())}
      placeholder={placeholder}
    />
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default SearchBarProfession