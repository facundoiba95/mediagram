import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import GlobalContainer from '../components/Containers/GlobalContainer/GlobalContainer';
import Profile from '../Views/Profile/Profile';
import CreateContent from '../Views/CreateContent/CreateContent';
import Notifications from '../components/organisms/Notifications/Notifications';
import ChangeImageUser from '../components/molecules/ChangeImageUser/ChangeImageUser';
import ChangePassword from '../components/molecules/ChangePassword/ChangePassword';
import Feed from '../Views/Feed/Feed';
import ViewPost from '../components/organisms/ViewPost/ViewPost';
import ModalUnauthenticated from '../components/molecules/Modals/ModalUnauthenticated/ModalUnauthenticated';
import ModalSearchUsers from '../components/molecules/Modals/ModalSearchUsers/ModalSearchUsers';
import { useDispatch, useSelector } from 'react-redux';
import ListFriendProfile from '../components/organisms/ListFriendProfile/ListFriendProfile';
import FormCreateContent from '../components/molecules/Forms/FormCreateContent/FormCreateContent';
import DefaultPage from '../Views/DefaultPage/DefaultPage';
import { validateSession } from '../redux/slices/authSlices/authSlices';
import ProtectedRoutes from '../components/Containers/ProtectRoutes/ProtectRoutes';
import GlobalLoader from '../components/molecules/Loaders/GlobalLoader/GlobalLoader';
import Explore from '../Views/Explore/Explore';

const Router = () => {
  const params = useParams();
  const userFound = useSelector(state => state.userSlices.userFound);
  const { isLogged } = useSelector(state => state.authSlices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateSession());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <GlobalLoader />
      <GlobalContainer>
        <ModalSearchUsers data={userFound} type={'searchUserDB'} />
        <Notifications />
        <Routes>
          <Route path='/' element={
            <ProtectedRoutes redirectTo={'/feed'} isLogged={!isLogged}>
              <DefaultPage />
            </ProtectedRoutes>
          } />
          <Route path='/feed' element={
            <ProtectedRoutes redirectTo={'/'} isLogged={isLogged}>
              <Feed />
            </ProtectedRoutes>
          } />
          <Route path='/explore' element={
            <ProtectedRoutes redirectTo={'/'} isLogged={isLogged}>
              <Explore/>
            </ProtectedRoutes>
          } />
          <Route path='/register' element={<DefaultPage />} />
          <Route path='/getPostByID/:idPost' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
          <Route path='/getPostByID/:idPost/:typeInteraction' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/profile/:username/:typeFollow' element={<Profile />} />
          <Route path='/profile/:username/changeImageUser' element={
            <ProtectedRoutes redirectTo={'/unauthorized'} isLogged={isLogged}>
              <Profile><ChangeImageUser /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changePassword' element={
            <ProtectedRoutes redirectTo={'/unauthorized'} isLogged={isLogged}>
              <Profile><ChangePassword /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/closeList' element={
            <ProtectedRoutes redirectTo={'/unauthorized'} isLogged={isLogged}>
              <Profile><ListFriendProfile /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/createContent' element={
            <ProtectedRoutes redirectTo={'/unauthorized'} isLogged={isLogged}>
              <CreateContent />
            </ProtectedRoutes>
          } />
          <Route path='/createContent/:typeContent' element={<CreateContent><FormCreateContent title={params.typeContent} /></CreateContent>} />
          <Route path='/unauthorized' element={<ModalUnauthenticated />} />
        </Routes>
      </GlobalContainer>
    </BrowserRouter>
  )
}

export default Router