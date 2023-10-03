import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '../Views/Home/Home';
import GlobalContainer from '../components/Containers/GlobalContainer/GlobalContainer';
import Profile from '../Views/Profile/Profile';
import CreateContent from '../Views/CreateContent/CreateContent';
import FormCreateContent from '../components/molecules/FormCreateContent/FormCreateContent';
import { Backdrop, Modal } from '@mui/material';
import { GlobalContext } from '../Context/GlobalContext';
import SearchSection from '../components/organisms/SearchSection/SearchSection';


const Router = () => {
  const params = useParams();
  const { isOpenSearchBar, setIsOpenSearchBar } = useContext(GlobalContext);
  return (
    <BrowserRouter>
     <GlobalContainer>
      <SearchSection/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Home/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/createContent' element={<CreateContent/>}/>
          <Route path='/createContent/:typeContent' element={<CreateContent><FormCreateContent title={params.typeContent}/></CreateContent>}/>
        </Routes>
     </GlobalContainer>
    </BrowserRouter>
  )
}

export default Router