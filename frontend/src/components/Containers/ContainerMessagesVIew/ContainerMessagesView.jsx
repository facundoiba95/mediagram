import React from 'react'
import { MessagesViewStyles } from './ContainerMessagesViewStyles'
import NavChat from '../../organisms/NavChat/NavChat'

const ContainerMessagesView = ({ children }) => {
    return (
        <MessagesViewStyles>
            <NavChat />
            {children}
        </MessagesViewStyles>
    )
}

export default ContainerMessagesView