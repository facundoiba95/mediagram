import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '../Views/Home/Home';
import GlobalContainer from '../components/Containers/GlobalContainer/GlobalContainer';
import Profile from '../Views/Profile/Profile';
import CreateContent from '../Views/CreateContent/CreateContent';
import FormCreateContent from '../components/molecules/FormCreateContent/FormCreateContent';
import SearchSection from '../components/organisms/SearchSection/SearchSection';
import Notifications from '../components/organisms/Notifications/Notifications';


const Router = () => {
  const params = useParams();
  return (
    <BrowserRouter>
     <GlobalContainer>
      <SearchSection/>
      <Notifications/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Home/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/profile/:username/:typeFollow' element={<Profile/>}/>
          <Route path='/createContent' element={<CreateContent/>}/>
          <Route path='/createContent/:typeContent' element={<CreateContent><FormCreateContent title={params.typeContent}/></CreateContent>}/>
        </Routes>
     </GlobalContainer>
    </BrowserRouter>
  )
}

export default Router