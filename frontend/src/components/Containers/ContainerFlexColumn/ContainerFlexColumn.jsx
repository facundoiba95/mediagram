import React from 'react'
import { WrapperFlexColumnStyle } from './ContainerFlexColumnStyles'

const ContainerFlexColumn = ({children}) => {
  return (
    <WrapperFlexColumnStyle>
        {children}
    </WrapperFlexColumnStyle>
      )
}

export default ContainerFlexColumn