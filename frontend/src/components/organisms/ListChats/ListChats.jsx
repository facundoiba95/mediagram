import React from 'react'
import { ListChatsContainerStyles } from './ListChatsStyles'
import ItemChat from '../../atoms/ItemChat/ItemChat'
import chats from '../../dataTestChats'

const ListChats = () => {

  const renderChats = () => {
    return chats.map((chat, index) => {
      const {_id, members, updatedAt, type, name, imgUrl, lastMessage} = chat;
      return (
        <ItemChat
          index={index}
          _id={_id}
          members={members}
          updatedAt={updatedAt}
          type={type}
          name={name}
          imgUrl={imgUrl}
          lastMessage={lastMessage}
          chat={chat}
        />
      )
    })
  }
  return (
    <ListChatsContainerStyles>
      {renderChats()}
    </ListChatsContainerStyles>
  )
}

export default ListChats