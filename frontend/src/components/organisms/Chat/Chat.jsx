import React, { useEffect } from 'react'
import TransitionContainer from '../../Containers/TransitionContainer/TransitionContainer'
import { ChatContainerStyles } from './ChatStyles'
import HeaderChat from '../../molecules/HeaderChat/HeaderChat'
import ListMessages from '../../molecules/ListMessages/ListMessages'
import TyperChat from '../../molecules/TyperChat/TyperChat'

const Chat = () => {
    return (
        <TransitionContainer>
            <ChatContainerStyles>
                <HeaderChat />
                <ListMessages />
                <TyperChat />
            </ChatContainerStyles>
        </TransitionContainer>
    )
}

export default Chat