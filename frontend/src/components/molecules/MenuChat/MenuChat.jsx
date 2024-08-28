import React, { useContext } from 'react'
import { ItemMenuChatStyles, MenuChatContainerStyles } from './MenuChatStyles'
import { BiSearch } from 'react-icons/bi'
import { BiSolidMessageAdd } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { GlobalContext } from '../../../Context/GlobalContext';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowings } from '../../../redux/slices/userSlices/userSlices';

const MenuChat = () => {
  const { isOpen, setIsOpen } = useContext(GlobalContext);
  const { user } = useSelector(state => state.authSlices);

  const dispatch = useDispatch();

  const handleGetFollowings = () => {
    setIsOpen(!isOpen)
    dispatch(getFollowings(user.username))
  }

  return (
    <MenuChatContainerStyles>
        <ItemMenuChatStyles onClick={handleGetFollowings}><BiSearch className='iconMenuChat'/></ItemMenuChatStyles>
        <ItemMenuChatStyles><BiSolidMessageAdd className='iconMenuChat'/></ItemMenuChatStyles>
        <ItemMenuChatStyles><HiUserGroup className='iconMenuChat'/></ItemMenuChatStyles>
    </MenuChatContainerStyles>
  )
}

export default MenuChat