import React from 'react'
import ContainerMessagesView from '../../components/Containers/ContainerMessagesVIew/ContainerMessagesView'
import ViewerChat from '../../components/organisms/ViewerChat/ViewerChat'
import TransitionContainer from '../../components/Containers/TransitionContainer/TransitionContainer'
import ModalSearchUsers from '../../components/molecules/Modals/ModalSearchUsers/ModalSearchUsers'
import { useDispatch, useSelector } from 'react-redux'
import { restartUserFound } from '../../redux/slices/userSlices/userSlices'

const Messages = ({children}) => {
  const { followings } = useSelector(state => state.userSlices);
  const dispatch = useDispatch();

  const handleSelectChat = (e) => {
    alert(e.currentTarget.dataset.username)
  }


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