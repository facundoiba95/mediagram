import React from 'react'
import { MessageInChatContainerStyles } from './MessageInChatStyles'

const MessageInChat = ({
    _id,
    sender,
    mediaUrl,
    important,
    createdAt,
    text
}) => {
    const hour = new Date(createdAt).getHours();
    const minutes = new Date(createdAt).getMinutes();
    const dateToSend = `${hour}:${minutes} hs`;

    const renderMedia = () => {
        if (mediaUrl == "" || !mediaUrl) {
            return (<></>)
        } else {
            return (
                <img src={mediaUrl} alt='media img in chat' className='mediaMessage'/>
            )
        }
    }

    return (
        <MessageInChatContainerStyles>
            <img src={sender.thumbnail} alt="img user sender msg" className='imgUser' />
            <span className='contentMessage'>
                <b>{sender.username}</b>
                {renderMedia()}
                <pre>{text}</pre>
                <small>{dateToSend}</small>
            </span>
        </MessageInChatContainerStyles>
    )
}

export default MessageInChat