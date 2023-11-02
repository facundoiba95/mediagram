import React from 'react'
import { FollowContentContainerStyles } from './FollowContentStyles'
import BarFollowContent from '../../molecules/BarFollowContent/BarFollowContent'
import ResultFollowContent from '../../molecules/ResultFollowContent/ResultFollowContent'

const FollowContent = () => {

  // MODAL DE BUSQUEDA DE FOLLOWERS Y FOLLOWINGS
  return (
    <FollowContentContainerStyles>
        <BarFollowContent />
        <ResultFollowContent />
    </FollowContentContainerStyles>
    )
}

export default FollowContent