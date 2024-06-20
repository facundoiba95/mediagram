import React from 'react'
import { ContainerSwipeHistoryStyles } from '../../organisms/ViewerHistory/ViewerHistoryStyles'
import { MdOutlineSwipeLeft, MdOutlineSwipeRight } from "react-icons/md";

const SwipeHistory = ({isHidden}) => {
  return (
    <ContainerSwipeHistoryStyles isHidden={isHidden}>
        <MdOutlineSwipeLeft className='iconSwipe'/>
        <b>Deslizá para cambiar de historia.</b>
        <MdOutlineSwipeRight className='iconSwipe'/>
    </ContainerSwipeHistoryStyles>
  )
}

export default SwipeHistory