import React from 'react'
import { TrendMessageContainerStyles } from './TrendMessageStyles'
import { FaFire } from "react-icons/fa6";

const TrendMessage = ({message}) => {
  return (
    <TrendMessageContainerStyles>
        <i>#{message}</i>
        <b>es tendencia</b>
        <FaFire className='iconFire'/>
    </TrendMessageContainerStyles>
  )
}

export default TrendMessage