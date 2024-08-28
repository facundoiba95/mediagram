import React from 'react'
import { ItemChatContainerStyles } from './ItemChatSyles'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setChat } from '../../../redux/slices/socketSlices/chatSocketSlices/chatSlices';
import { setMessages } from '../../../redux/slices/socketSlices/messageSlices/messageSlices';
import messages from '../../dataTestMessages';

const ItemChat = ({
    index,
    _id,
    members,
    name,
    type,
    updatedAt,
    imgUrl,
    lastMessage,
    chat
}) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();

    const { idChat, sender, important, createdAt, text } = lastMessage[0];
    const hour = `${new Date(createdAt).getHours()}:${new Date(createdAt).getMinutes()}hs`;
    

    const handleSetChat = async () => {
        dispatch(setChat(chat))
        dispatch(setMessages(messages.filter(msg => msg.idChat == _id)));
        params.idChat = _id;
        navigator(`/messages/${params.idChat}`);
    }

    return (
        <ItemChatContainerStyles key={index} onClick={handleSetChat}>
            <img src={imgUrl || members[0].thumbnail} alt="chat image" />
            <span>
                <b>{name || members[0].username}</b>
                <p>{text}</p>
                <small>{hour}</small>
            </span>
        </ItemChatContainerStyles>
    )
}

export default ItemChat