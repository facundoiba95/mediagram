<<<<<<< HEAD
import React from 'react'
import { BtnCreatePostFeedStyles } from './ButtonCreatePostFeedStyles'

//@params active = Boolean
//@params handleFunction = Function()
const ButtonCreatePostFeed = ({active, handleFunction}) => {
  return (
    <BtnCreatePostFeedStyles active={active} disabled={!active} onClick={(e) => handleFunction(e)}>Publicar</BtnCreatePostFeedStyles>
  )
}

=======
import React from 'react'
import { BtnCreatePostFeedStyles } from './ButtonCreatePostFeedStyles'

//@params active = Boolean
//@params handleFunction = Function()
const ButtonCreatePostFeed = ({active, handleFunction}) => {
  return (
    <BtnCreatePostFeedStyles active={active} disabled={!active} onClick={(e) => handleFunction(e)}>Publicar</BtnCreatePostFeedStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ButtonCreatePostFeed