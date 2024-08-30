import React from 'react'
import { HeaderChatContainerStyles } from './HeaderChatStyles';
import { useSelector } from 'react-redux';

const HeaderChat = () => {
    const { chatSelected } = useSelector(state => state.chatSlices);
    const userAuth = useSelector(state => state.authSlices.user);

    const { members, name, imgUrl, type} = chatSelected[0];

    const userReceptor = members.find(usr => usr._id !== userAuth._id);
    const nameChat = type === "PRIVATE" ? userReceptor.username : name;
    const imgChat = type === "PRIVATE" ? userReceptor.thumbnail : imgUrl;

    const renderMembers = () => {
        if(type === "PRIVATE") return (<></>)
        return members.map((usr,index) => (
            <li key={index}><p>{usr.username} </p></li>
        ))
    }

    return (
        <HeaderChatContainerStyles>
            <img src={imgChat} alt="img header chat" />
            <span>
                <b>{nameChat}</b>
                <ul>
                    {renderMembers()}
                </ul>
            </span>
        </HeaderChatContainerStyles>
    )
}

export default HeaderChat