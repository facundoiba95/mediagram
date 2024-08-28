import React from 'react'
import { ListMessagesContainerStyles } from './ListMessagesStyles'
import { useSelector } from 'react-redux'
import MessageInChat from '../MessageInChat/MessageInChat';

const ListMessages = () => {
    const { messagesInChat } = useSelector(state => state.messageSlices);

    const renderMessages = () => {
        return messagesInChat.map((msg, index) => {
            const { _id, sender, mediaUrl, important, text, createdAt } = msg;

            return (
                <MessageInChat
                    _id={_id}
                    sender={sender}
                    mediaUrl={mediaUrl}
                    important={important}
                    text={text}
                    createdAt={createdAt}
                    key={index}
                />
            )
        })
    }

    return (
        <ListMessagesContainerStyles>
            {renderMessages()}
        </ListMessagesContainerStyles>
    )
}

export default ListMessages