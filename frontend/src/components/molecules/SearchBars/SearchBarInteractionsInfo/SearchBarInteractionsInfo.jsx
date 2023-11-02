import React, { useContext, useEffect, useState } from 'react'
import { BarFollowContentContainerStyles } from '../../BarFollowContent/BarFollowContentStyles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { GlobalContext } from '../../../../Context/GlobalContext'
import { useDispatch } from 'react-redux'
import { setUserFound } from '../../../../redux/slices/userSlices/userSlices'
import { useNavigate } from 'react-router-dom'

const SearchBarInteractionsInfo = ({data}) => {
    const [ inputSearchBar, setInputSearchBar ] = useState('');
    const { isOpen, setIsOpen, setIsLoadingSearch } = useContext(GlobalContext);
    const navigator = useNavigate();

    const dispatch = useDispatch();

    const handleCloseSearchBar = () => {
      dispatch(setUserFound([]))
      setInputSearchBar('');
      setIsOpen(false);
      navigator(-1);
    }

    const filterData = () => {
      setIsLoadingSearch(true);
      const dataFiltered = data.filter(item => item.username.includes(inputSearchBar));
      setIsLoadingSearch(false);
      return dataFiltered;
    }

    useEffect(() => {
      const handleSearch = async () => {
        if(!inputSearchBar.length){
          await dispatch(setUserFound([]));
          await dispatch(setUserFound(data));
        } else {
          await dispatch(setUserFound([]));
          await dispatch(setUserFound(filterData()))
      }
      }

      handleSearch()
    }, [ inputSearchBar ]);

    

  return (
    <BarFollowContentContainerStyles isOpen={isOpen}>
        <AiOutlineCloseCircle className='iconCloseSearchBar' onClick={() => handleCloseSearchBar()}/>
        <input type="text" placeholder={'Buscar cuenta ...'} value={inputSearchBar} onChange={(e) => setInputSearchBar(e.target.value)}/>
        <BiSearch className='iconSearch'/>
    </BarFollowContentContainerStyles>
    )
}

export default SearchBarInteractionsInfo





// if(params.typeInteraction === 'likes'){
//   setIsLoadingSearch(true)
//   const likes = post[0].likes.filter(item => item.username.includes(inputSearchBar))
//   setIsLoadingSearch(false)
//   return likes;
// } else if(params.typeInteraction === 'views'){
//   setIsLoadingSearch(true);
//   const views = post[0].views.filter(item => item.username.includes(inputSearchBar))
//   setIsLoadingSearch(false);
//   return views;
// }