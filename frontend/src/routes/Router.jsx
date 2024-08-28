import React, { useContext, useEffect } from 'react'
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
import { validateSession } from '../redux/slices/authSlices/authSlices';
import ProtectedRoutes from '../components/Containers/ProtectRoutes/ProtectRoutes';
import GlobalLoader from '../components/molecules/Loaders/GlobalLoader/GlobalLoader';
import Explore from '../Views/Explore/Explore';
import ViewerHistory from '../components/organisms/ViewerHistory/ViewerHistory';
import useTitleDocument from '../Hooks/useTitleDocument';
import { restartUserFound } from '../redux/slices/userSlices/userSlices';
import { setStatusConnection } from '../redux/slices/socketSlices/authSocketSlices/authSocketSlices';
import ChangeLocation from '../components/molecules/ChangeLocation/ChangeLocation';
import ChangeProfession from '../components/molecules/ChangeProfession/ChangeProfession';
import socket from '../../socket';
import Messages from '../Views/Messages/Messages';
import { GlobalContext } from '../Context/GlobalContext';
import ViewerChat from '../components/organisms/ViewerChat/ViewerChat';
import ChatIsEmpty from '../components/molecules/Modals/ChatIsEmpty/ChatIsEmpty';
import Chat from '../components/organisms/Chat/Chat';

const Router = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { setIsOpen, setIsOpenMenu } = useContext(GlobalContext);
  const userFound = useSelector(state => state.userSlices.userFound);
  const userAuth = useSelector(state => state.authSlices.user);
  const { isLogged } = useSelector(state => state.authSlices);
  const { status_connection } = useSelector(state => state.authSocketSlices);
  const setTitleDocument = useTitleDocument();
  const socket_notifications = socket.socket_notifications;

  const connectSocketAsync = async (retries = 5) => {
    socket.connectSocket_chat();
    socket.connectSocket_notifications();
    return new Promise((resolve, reject) => {
      const checkConnection = () => {
        if (socket_notifications.connected) {
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
          socket_notifications.emit("subscribeNotifications", {
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
        <Notifications />
        <Routes>
          <Route path='/' element={
            <ProtectedRoutes redirectTo={'/defaultPage'} >
              <Feed />
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
          <Route path='/messages' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Messages> <ViewerChat><ChatIsEmpty /></ViewerChat></Messages>
            </ProtectedRoutes>
          } />
          <Route path='/messages/:idChat' element={
            <ProtectedRoutes redirectTo={'/unauthorized'}>
              <Messages><ViewerChat><Chat /></ViewerChat></Messages>
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

