import React, { useEffect, useRef, useState } from 'react';
import { ListMessagesContainerStyles } from './ListMessagesStyles';
import { useDispatch, useSelector } from 'react-redux';
import MessageInChat from '../MessageInChat/MessageInChat';
import MoonLoaderResponsive from '../Loaders/MoonLoaderResponsive/MoonLoaderResponsive';
import socket from '../../../../socket';
import { useParams } from 'react-router-dom';
import { getChats } from '../../../redux/slices/socketSlices/chatSocketSlices/chatSlices';

const ListMessages = () => {
    const socket_chat = socket.socket_chat;
    const params = useParams();
    const dispatch = useDispatch();
    const { messagesInChat, isLoading } = useSelector(state => state.messageSlices);
    const { idChat } = useSelector(state => state.chatSlices);
    const [listChat, setListChat] = useState(messagesInChat);
    const listEndRef = useRef(null);
    const listChatContainerRef = useRef(null);

    // Scrollear hasta el ultimo mensaje.
    const scrollToBottom = () => {
        listChatContainerRef.current.scrollTo({
            top: listChatContainerRef.current.scrollHeight,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        socket_chat.on("newMessage", (data) => {
            setListChat(prevState => [...prevState, data]);
            dispatch(getChats())
        });
    }, []);

    useEffect(() => {
        if (params.idChat === idChat) {
            setListChat(messagesInChat);
        } else {
            setListChat([]);
        }
    }, [messagesInChat]);

    useEffect(() => {
        scrollToBottom();
    }, [listChat]);

    const renderMessages = () => {
        return listChat.map((msg, index) => {
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
            );
        });
    };

    return (
        <ListMessagesContainerStyles ref={listChatContainerRef}>
            {
                isLoading
                    ? <MoonLoaderResponsive size={30} />
                    : renderMessages()
            }
            <div ref={listEndRef} />
        </ListMessagesContainerStyles>
    );
};

export default ListMessages;