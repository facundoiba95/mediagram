import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '../Views/Home/Home';
import GlobalContainer from '../components/Containers/GlobalContainer/GlobalContainer';
import Profile from '../Views/Profile/Profile';
import CreateContent from '../Views/CreateContent/CreateContent';
import FormCreateContent from '../components/molecules/FormCreateContent/FormCreateContent';
import Notifications from '../components/organisms/Notifications/Notifications';
import ChangeImageUser from '../components/molecules/ChangeImageUser/ChangeImageUser';
import ChangePassword from '../components/molecules/ChangePassword/ChangePassword';
import Feed from '../Views/Feed/Feed';
import ViewPost from '../components/organisms/ViewPost/ViewPost';
import ModalUnauthenticated from '../components/molecules/Modals/ModalUnauthenticated/ModalUnauthenticated';
import ModalSearchUsers from '../components/molecules/Modals/ModalSearchUsers/ModalSearchUsers';
import { useSelector } from 'react-redux';
import ListFriendProfile from '../components/organisms/ListFriendProfile/ListFriendProfile';

const Router = () => {
  const params = useParams();
  const userFound = useSelector( state => state.userSlices.userFound );

  
  return (
    <BrowserRouter>
     <GlobalContainer>
      <ModalSearchUsers data={userFound} type={'searchUserDB'}/>
      <Notifications/>
        <Routes>
          <Route path='/' element={<Home><Feed/></Home>}/>
          <Route path='/register' element={<Home/>}/>
          <Route path='/getPostByID/:idPost' element={<ViewPost><ModalUnauthenticated/></ViewPost>}/>
          <Route path='/getPostByID/:idPost/:typeInteraction' element={<ViewPost><ModalUnauthenticated/></ViewPost>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/profile/:username/:typeFollow' element={<Profile/>}/>
          <Route path='/profile/:username/changeImageUser' element={<Profile><ChangeImageUser/></Profile>}/>
          <Route path='/profile/:username/changePassword' element={<Profile><ChangePassword/></Profile>}/>
          <Route path='/profile/:username/listFriend' element={<Profile><ListFriendProfile/></Profile>}/>
          <Route path='/createContent' element={<CreateContent/>}/>
          <Route path='/createContent/:typeContent' element={<CreateContent><FormCreateContent title={params.typeContent}/></CreateContent>}/>
          <Route path='/unauthorized' element={<ModalUnauthenticated/>}/>
        </Routes>
     </GlobalContainer>
    </BrowserRouter>
  )
}

export default Router