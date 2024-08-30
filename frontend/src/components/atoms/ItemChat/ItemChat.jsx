import React from 'react'
import { ItemChatContainerStyles } from './ItemChatSyles'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getChatByID, joinChat, newChat, setChat, setIdChat } from '../../../redux/slices/socketSlices/chatSocketSlices/chatSlices';
import { getMessages, setInitialState_messages, setMessages, setMessagesInChat } from '../../../redux/slices/socketSlices/messageSlices/messageSlices';

const ItemChat = ({
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
    const userAuth = useSelector(state => state.authSlices.user);
    const userReceptor = members.find(usr => usr._id !== userAuth._id);
    const nameChat = type === "PRIVATE" ? userReceptor.username : name;
    const imgChat = type === "PRIVATE" ? userReceptor.thumbnail : imgUrl;

    const handleSetChat = async () => {
        await dispatch(setInitialState_messages())
        await dispatch(getChatByID(_id));
        await dispatch(setIdChat(_id))
        await dispatch(joinChat(_id));
        await dispatch(getMessages(_id))

        params.idChat = _id;
        navigator(`/messages/${params.idChat}`);
    }

    const renderLastMessage = () => {
        if(!lastMessage) return (<></>)
            
        const { idChat, sender, important, createdAt, text } = lastMessage;
        const hour = `${new Date(createdAt).getHours()}:${new Date(createdAt).getMinutes()}hs`;
        
        return (
            <>
                <p>{text}</p>
                <small>{hour}</small>
            </>
        )
    }


    return (
        <ItemChatContainerStyles onClick={handleSetChat}>
            <img src={imgChat} alt="chat image" />
            <span>
                <b>{nameChat}</b>
                {renderLastMessage()}
            </span>
        </ItemChatContainerStyles>
    )
}

export default ItemChat