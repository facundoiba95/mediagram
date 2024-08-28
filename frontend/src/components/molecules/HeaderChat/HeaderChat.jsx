import React from 'react'
import { HeaderChatContainerStyles } from './HeaderChatStyles';
import { useSelector } from 'react-redux';

const HeaderChat = () => {
    const { members, name, imgUrl } = useSelector(state => state.chatSlices.chatSelected);

    const renderMembers = () => {
        return members.map(usr => (
            <li><p>{usr.username} </p></li>
        ))
    }

    return (
        <HeaderChatContainerStyles>
            <img src={imgUrl} alt="img header chat" />
            <span>
                <b>{name}</b>
                <ul>
                    {renderMembers()}
                </ul>
            </span>
        </HeaderChatContainerStyles>
    )
}

export default HeaderChat