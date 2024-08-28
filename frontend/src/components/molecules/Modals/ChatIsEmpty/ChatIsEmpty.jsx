import React from 'react'
import { ChatIsEmptyContainerStyles } from './ChatIsEmptyStyles'
import { IoMdChatboxes } from "react-icons/io";

const ChatIsEmpty = () => {
  return (
    <ChatIsEmptyContainerStyles>
      <IoMdChatboxes className='iconMessage'/>
      <h1>Mensajes!</h1>
      <b>Puedes envíar y recibir mensajes en esta sección.</b>
    </ChatIsEmptyContainerStyles>
  )
}

export default ChatIsEmpty