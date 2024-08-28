import React from 'react'
import { TyperChatContainerStyles } from './TyperChatStyles'
import { BsFillSendFill } from "react-icons/bs";
import { BiSolidImageAdd } from "react-icons/bi";

const TyperChat = () => {
  return (
    <TyperChatContainerStyles>
      <form action="">
        <BiSolidImageAdd className='sendMessage'/>
        <textarea name="" id=""></textarea>
        <BsFillSendFill className='sendMessage'/>
      </form>
    </TyperChatContainerStyles>
  )
}

export default TyperChat