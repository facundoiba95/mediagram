import React, { useEffect, useRef, useState } from 'react'
import { ListChatsContainerStyles } from './ListChatsStyles'
import ItemChat from '../../atoms/ItemChat/ItemChat'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../../../../socket'
import { setMessagesInChat, getMessages, setMessages } from '../../../redux/slices/socketSlices/messageSlices/messageSlices'

const ListChats = () => {
  const dispatch = useDispatch();
  const { chats, chatSelected } = useSelector(state => state.chatSlices);

  const renderChats = () => {
    return chats.map((chat, index) => {
      const { _id, members, updatedAt, type, name, imgUrl, lastMessage } = chat;
      return (
        <ItemChat
          _id={_id}
          members={members}
          updatedAt={updatedAt}
          type={type}
          name={name}
          imgUrl={imgUrl}
          lastMessage={lastMessage}
          chat={chat}
          key={index}
        />
      )
    })
  }

  return (
    <ListChatsContainerStyles>
      {
        chats.length
          ? renderChats()
          : <h2 style={{ color: "white", textAlign: "center" }}>No hay chats</h2>
      }
    </ListChatsContainerStyles>
  )
}

export default ListChats