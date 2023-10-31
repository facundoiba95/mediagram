import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '../Views/Home/Home';
import GlobalContainer from '../components/Containers/GlobalContainer/GlobalContainer';
import Profile from '../Views/Profile/Profile';
import CreateContent from '../Views/CreateContent/CreateContent';
import FormCreateContent from '../components/molecules/FormCreateContent/FormCreateContent';
import SearchSection from '../components/organisms/SearchSection/SearchSection';
import Notifications from '../components/organisms/Notifications/Notifications';
import ChangeImageUser from '../components/molecules/ChangeImageUser/ChangeImageUser';
import ChangePassword from '../components/molecules/ChangePassword/ChangePassword';
import Feed from '../Views/Feed/Feed';
import ViewPost from '../components/organisms/ViewPost/ViewPost';
import ModalUnauthenticated from '../components/molecules/Modals/ModalUnauthenticated/ModalUnauthenticated';

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
          <Route path='/feed' element={<Home><Feed/></Home>}/>
          <Route path='/getPostByID/:idPost' element={<ViewPost/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/profile/:username/:typeFollow' element={<Profile/>}/>
          <Route path='/profile/:username/changeImageUser' element={<Profile><ChangeImageUser/></Profile>}/>
          <Route path='/profile/:username/changePassword' element={<Profile><ChangePassword/></Profile>}/>
          <Route path='/createContent' element={<CreateContent/>}/>
          <Route path='/createContent/:typeContent' element={<CreateContent><FormCreateContent title={params.typeContent}/></CreateContent>}/>
          <Route path='/unauthorized' element={<ModalUnauthenticated/>}/>
        </Routes>
     </GlobalContainer>
    </BrowserRouter>
  )
}

export default Router