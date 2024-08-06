<<<<<<< HEAD
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
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
import FormCreateContent from '../components/organisms/Forms/FormCreateContent/FormCreateContent';
import DefaultPage from '../Views/DefaultPage/DefaultPage';
import { restartStatusAuthSlice, validateSession } from '../redux/slices/authSlices/authSlices';
import ProtectedRoutes from '../components/Containers/ProtectRoutes/ProtectRoutes';
import GlobalLoader from '../components/molecules/Loaders/GlobalLoader/GlobalLoader';
import Explore from '../Views/Explore/Explore';
import ViewerHistory from '../components/organisms/ViewerHistory/ViewerHistory';
import useTitleDocument from '../Hooks/useTitleDocument';
import { restartUserFound } from '../redux/slices/userSlices/userSlices';
import { connectionSocket, socket } from '../../socket';
import { setStatusConnection } from '../redux/slices/socketSlices/authSocketSlices/authSocketSlices';
import ChangeLocation from '../components/molecules/ChangeLocation/ChangeLocation';
import { restartPostState } from '../redux/slices/postSlices/postSlices';
import ChangeProfession from '../components/molecules/ChangeProfession/ChangeProfession';

const Router = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userFound = useSelector(state => state.userSlices.userFound);
  const userAuth = useSelector(state => state.authSlices.user);
  const { isLogged } = useSelector(state => state.authSlices);
  const { status_connection } = useSelector(state => state.authSocketSlices);
  const setTitleDocument = useTitleDocument();

  const connectSocketAsync = async (retries = 5) => {
    connectionSocket();
    return new Promise((resolve, reject) => {
      const checkConnection = () => {
        if (socket.connected) {
          resolve();
        } else if (retries === 0) {
          reject(new Error("No se pudo conectar"));
        } else {
          setTimeout(() => {
            retries -= 1;
            console.log(`"Reconectado socket. Quedan ${retries} intentos`);
            checkConnection();
          }, 1000);
        }
      };
      checkConnection();
    });
  };

  useEffect(() => {
    const connectAndEmit = async () => {
      try {
        dispatch(validateSession());
        if (isLogged) {
          await connectSocketAsync();
          dispatch(setStatusConnection(true));
          socket.emit("subscribeNotifications", {
            _id: userAuth._id,
            username: userAuth.username
          });
        }
      } catch (error) {
        console.error(error);
      }
      setTitleDocument;
    };

    connectAndEmit();
  }, [isLogged, dispatch, status_connection]);

  return (
    <BrowserRouter>
      <GlobalLoader />
      <GlobalContainer>
        <ModalSearchUsers data={userFound} type={'searchUserDB'} resetData={restartUserFound} />
        <Notifications />
        <Routes>
          <Route path='/' element={
            <ProtectedRoutes redirectTo={'/defaultPage'} children={<Feed />}>

            </ProtectedRoutes>
          } />
          <Route path='/explore' element={
            <ProtectedRoutes redirectTo={'/defaultPage'}>
              <Explore />
            </ProtectedRoutes>
          } />
          <Route path='/register' element={<DefaultPage />} />
          <Route path='/getPostByID/:idPost' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
          <Route path='/getPostByID/:idPost/:typeInteraction' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
          <Route path='/profile/:username' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile />
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/:typeFollow' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile />
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changeImageUser' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ChangeImageUser /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changePassword' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ChangePassword /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/closeList' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ListFriendProfile /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changeLocation' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ChangeLocation /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changeProfession' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ChangeProfession /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/createContent' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <CreateContent />
            </ProtectedRoutes>
          } />
          <Route path='/createContent/:typeContent' element={
            <ProtectedRoutes redirectTo={"/defaultPage"}>
              <CreateContent><FormCreateContent title={params.typeContent} /></CreateContent>
            </ProtectedRoutes>
          } />
          <Route path='/history' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <ViewerHistory />
            </ProtectedRoutes>
          } />
          <Route path='/unauthorized' element={<ModalUnauthenticated />} />
          <Route path='/defaultPage' element={<DefaultPage />} />
        </Routes>
      </GlobalContainer>
    </BrowserRouter>
  )
}

export default Router




// <BrowserRouter>
// <GlobalLoader />
// <GlobalContainer>
//   <ModalSearchUsers data={userFound} type={'searchUserDB'} resetData={restartUserFound} />
//   <Notifications />
//   <Routes>
//     <Route path='/' element={
//       <ProtectedRoutes redirectTo={'/defaultPage'}>
//         <Feed />
//       </ProtectedRoutes>
//     } />
//     <Route path='/explore' element={
//       <ProtectedRoutes redirectTo={'/defaultPage'}>
//         <Explore />
//       </ProtectedRoutes>
//     } />
//     <Route path='/register' element={<DefaultPage />} />
//     <Route path='/getPostByID/:idPost' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
//     <Route path='/getPostByID/:idPost/:typeInteraction' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
//     <Route path='/profile/:username' element={<Profile />} />
//     <Route path='/profile/:username/:typeFollow' element={<Profile />} />
//     <Route path='/profile/:username/changeImageUser' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <Profile><ChangeImageUser /></Profile>
//       </ProtectedRoutes>
//     } />
//     <Route path='/profile/:username/changePassword' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <Profile><ChangePassword /></Profile>
//       </ProtectedRoutes>
//     } />
//     <Route path='/profile/:username/closeList' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <Profile><ListFriendProfile /></Profile>
//       </ProtectedRoutes>
//     } />
//     <Route path='/profile/:username/changeLocation' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <Profile><ChangeLocation /></Profile>
//       </ProtectedRoutes>
//     } />
//     <Route path='/createContent' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <CreateContent />
//       </ProtectedRoutes>
//     } />
//     <Route path='/createContent/:typeContent' element={<CreateContent><FormCreateContent title={params.typeContent} /></CreateContent>} />
//     <Route path='/history' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <ViewerHistory />
//       </ProtectedRoutes>
//     } />
//     <Route path='/unauthorized' element={<ModalUnauthenticated />} />
//     <Route path='/defaultPage' element={<DefaultPage />} />
//   </Routes>
// </GlobalContainer>
=======
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
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
import FormCreateContent from '../components/organisms/Forms/FormCreateContent/FormCreateContent';
import DefaultPage from '../Views/DefaultPage/DefaultPage';
import { restartStatusAuthSlice, validateSession } from '../redux/slices/authSlices/authSlices';
import ProtectedRoutes from '../components/Containers/ProtectRoutes/ProtectRoutes';
import GlobalLoader from '../components/molecules/Loaders/GlobalLoader/GlobalLoader';
import Explore from '../Views/Explore/Explore';
import ViewerHistory from '../components/organisms/ViewerHistory/ViewerHistory';
import useTitleDocument from '../Hooks/useTitleDocument';
import { restartUserFound } from '../redux/slices/userSlices/userSlices';
import { connectionSocket, socket } from '../../socket';
import { setStatusConnection } from '../redux/slices/socketSlices/authSocketSlices/authSocketSlices';
import ChangeLocation from '../components/molecules/ChangeLocation/ChangeLocation';
import { restartPostState } from '../redux/slices/postSlices/postSlices';
import ChangeProfession from '../components/molecules/ChangeProfession/ChangeProfession';

const Router = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userFound = useSelector(state => state.userSlices.userFound);
  const userAuth = useSelector(state => state.authSlices.user);
  const { isLogged } = useSelector(state => state.authSlices);
  const { status_connection } = useSelector(state => state.authSocketSlices);
  const setTitleDocument = useTitleDocument();

  const connectSocketAsync = async (retries = 5) => {
    connectionSocket();
    return new Promise((resolve, reject) => {
      const checkConnection = () => {
        if (socket.connected) {
          resolve();
        } else if (retries === 0) {
          reject(new Error("No se pudo conectar"));
        } else {
          setTimeout(() => {
            retries -= 1;
            console.log(`"Reconectado socket. Quedan ${retries} intentos`);
            checkConnection();
          }, 1000);
        }
      };
      checkConnection();
    });
  };

  useEffect(() => {
    const connectAndEmit = async () => {
      try {
        dispatch(validateSession());
        if (isLogged) {
          await connectSocketAsync();
          dispatch(setStatusConnection(true));
          socket.emit("subscribeNotifications", {
            _id: userAuth._id,
            username: userAuth.username
          });
        }
      } catch (error) {
        console.error(error);
      }
      setTitleDocument;
    };

    connectAndEmit();
  }, [isLogged, dispatch, status_connection]);

  return (
    <BrowserRouter>
      <GlobalLoader />
      <GlobalContainer>
        <ModalSearchUsers data={userFound} type={'searchUserDB'} resetData={restartUserFound} />
        <Notifications />
        <Routes>
          <Route path='/' element={
            <ProtectedRoutes redirectTo={'/defaultPage'} children={<Feed />}>

            </ProtectedRoutes>
          } />
          <Route path='/explore' element={
            <ProtectedRoutes redirectTo={'/defaultPage'}>
              <Explore />
            </ProtectedRoutes>
          } />
          <Route path='/register' element={<DefaultPage />} />
          <Route path='/getPostByID/:idPost' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
          <Route path='/getPostByID/:idPost/:typeInteraction' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
          <Route path='/profile/:username' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile />
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/:typeFollow' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile />
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changeImageUser' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ChangeImageUser /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changePassword' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ChangePassword /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/closeList' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ListFriendProfile /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changeLocation' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ChangeLocation /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/profile/:username/changeProfession' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Profile><ChangeProfession /></Profile>
            </ProtectedRoutes>
          } />
          <Route path='/createContent' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <CreateContent />
            </ProtectedRoutes>
          } />
          <Route path='/createContent/:typeContent' element={
            <ProtectedRoutes redirectTo={"/defaultPage"}>
              <CreateContent><FormCreateContent title={params.typeContent} /></CreateContent>
            </ProtectedRoutes>
          } />
          <Route path='/history' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <ViewerHistory />
            </ProtectedRoutes>
          } />
          <Route path='/unauthorized' element={<ModalUnauthenticated />} />
          <Route path='/defaultPage' element={<DefaultPage />} />
        </Routes>
      </GlobalContainer>
    </BrowserRouter>
  )
}

export default Router




// <BrowserRouter>
// <GlobalLoader />
// <GlobalContainer>
//   <ModalSearchUsers data={userFound} type={'searchUserDB'} resetData={restartUserFound} />
//   <Notifications />
//   <Routes>
//     <Route path='/' element={
//       <ProtectedRoutes redirectTo={'/defaultPage'}>
//         <Feed />
//       </ProtectedRoutes>
//     } />
//     <Route path='/explore' element={
//       <ProtectedRoutes redirectTo={'/defaultPage'}>
//         <Explore />
//       </ProtectedRoutes>
//     } />
//     <Route path='/register' element={<DefaultPage />} />
//     <Route path='/getPostByID/:idPost' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
//     <Route path='/getPostByID/:idPost/:typeInteraction' element={<ViewPost><ModalUnauthenticated /></ViewPost>} />
//     <Route path='/profile/:username' element={<Profile />} />
//     <Route path='/profile/:username/:typeFollow' element={<Profile />} />
//     <Route path='/profile/:username/changeImageUser' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <Profile><ChangeImageUser /></Profile>
//       </ProtectedRoutes>
//     } />
//     <Route path='/profile/:username/changePassword' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <Profile><ChangePassword /></Profile>
//       </ProtectedRoutes>
//     } />
//     <Route path='/profile/:username/closeList' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <Profile><ListFriendProfile /></Profile>
//       </ProtectedRoutes>
//     } />
//     <Route path='/profile/:username/changeLocation' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <Profile><ChangeLocation /></Profile>
//       </ProtectedRoutes>
//     } />
//     <Route path='/createContent' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <CreateContent />
//       </ProtectedRoutes>
//     } />
//     <Route path='/createContent/:typeContent' element={<CreateContent><FormCreateContent title={params.typeContent} /></CreateContent>} />
//     <Route path='/history' element={
//       <ProtectedRoutes redirectTo={'/unauthorized'}>
//         <ViewerHistory />
//       </ProtectedRoutes>
//     } />
//     <Route path='/unauthorized' element={<ModalUnauthenticated />} />
//     <Route path='/defaultPage' element={<DefaultPage />} />
//   </Routes>
// </GlobalContainer>
>>>>>>> b3173dc1 (first commit in Ubuntu)
// </BrowserRouter>