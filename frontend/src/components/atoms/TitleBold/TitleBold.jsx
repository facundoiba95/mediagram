import React from 'react'
import { ContainerTitleBoldStyles } from './TitleBoldStyles'

const TitleBold = ({title}) => {
  return (
    <ContainerTitleBoldStyles>
        <h1>{title}</h1>
    </ContainerTitleBoldStyles>
  )
}

export default TitleBold