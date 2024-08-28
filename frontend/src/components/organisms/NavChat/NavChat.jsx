import React from 'react'
import { NavChatContainerStyles } from './NavChatStyles'
import ListChats from '../ListChats/ListChats'
import MenuChat from '../../molecules/MenuChat/MenuChat'


const NavChat = () => {
  return (
    <NavChatContainerStyles>
      <MenuChat />
      <ListChats />
    </NavChatContainerStyles>
  )
}

export default NavChat