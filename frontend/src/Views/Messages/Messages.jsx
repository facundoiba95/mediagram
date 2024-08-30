import React, { useContext, useEffect } from 'react'
import ContainerMessagesView from '../../components/Containers/ContainerMessagesVIew/ContainerMessagesView'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ModalSearchUsers from '../../components/molecules/Modals/ModalSearchUsers/ModalSearchUsers'
import { useDispatch, useSelector } from 'react-redux'
import { restartUserFound } from '../../redux/slices/userSlices/userSlices'
import { getChatByID, getChats, joinChat, newChat, setInitialState_chat } from '../../redux/slices/socketSlices/chatSocketSlices/chatSlices'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'
import { getMessages, setInitialState_messages } from '../../redux/slices/socketSlices/messageSlices/messageSlices'

const Messages = ({ children }) => {
  const { followings } = useSelector(state => state.userSlices);
  const { idChat } = useSelector(state => state.chatSlices);
  const { setIsOpen } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const params = useParams();

  const handleSelectChat = async (e) => {
    const username = e.currentTarget.dataset.username;
    const idUser = e.currentTarget.dataset.id;

    dispatch(newChat({ type: "PRIVATE", username, idUser }));
  }

  useEffect(() => {
    if (idChat) {
      async function createNewChat() {
        params.idChat = idChat;
        setIsOpen(false);
        await dispatch(getChatByID(idChat));
        await dispatch(joinChat(idChat));
        await dispatch(getMessages(idChat));
        await dispatch(getChats())
        navigator(`/messages/${params.idChat}`);
      }

      createNewChat()
    }
  }, [idChat]);



  useEffect(() => {
    async function loadChats (){
      await dispatch(setInitialState_chat());
      await dispatch(setInitialState_messages())
      await dispatch(getChats())
    }

    loadChats()
  }, [])

  return (
    <TransitionContainer>
      <ModalSearchUsers
        data={followings}
        title={"Enviar mensaje"}
        placeholderValue={"Buscar en mis seguidos"}
        resetData={restartUserFound}
        handleFunction={handleSelectChat}
      />
      <ContainerMessagesView>
        {children}
      </ContainerMessagesView>
    </TransitionContainer>
  )
}

export default Messages