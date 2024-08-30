import React, { useState } from 'react'
import { TyperChatContainerStyles } from './TyperChatStyles'
import { BsFillSendFill } from "react-icons/bs";
import { BiSolidImageAdd } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../redux/slices/socketSlices/messageSlices/messageSlices';
import { getChats } from '../../../redux/slices/socketSlices/chatSocketSlices/chatSlices';

const TyperChat = () => {
  const dispatch = useDispatch();
  const [inputMessage, setInputMessage] = useState("");
  const { _id } = useSelector(state => state.chatSlices.chatSelected[0]);

  const handleSendMessage = async () => {
    await dispatch(sendMessage({
      message: inputMessage,
      idChat: _id
    }))

    setInputMessage("");
  }

  
  return (
    <TyperChatContainerStyles>
      <form action="">
        <BiSolidImageAdd className='sendMessage'/>
        <textarea name="" id="" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}></textarea>
        <BsFillSendFill className='sendMessage' onClick={handleSendMessage}/>
      </form>
    </TyperChatContainerStyles>
  )
}

export default TyperChat