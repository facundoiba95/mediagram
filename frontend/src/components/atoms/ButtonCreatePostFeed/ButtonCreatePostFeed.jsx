import React from 'react'
import { BtnCreatePostFeedStyles } from './ButtonCreatePostFeedStyles'

//@params active = Boolean
//@params handleFunction = Function()
const ButtonCreatePostFeed = ({active, handleFunction}) => {
  return (
    <BtnCreatePostFeedStyles active={active} disabled={!active} onClick={(e) => handleFunction(e)}>Publicar</BtnCreatePostFeedStyles>
  )
}

export default ButtonCreatePostFeed