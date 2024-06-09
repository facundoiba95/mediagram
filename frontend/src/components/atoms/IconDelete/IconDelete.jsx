import React from 'react'
import { ContainerIconDeleteStyles } from './IconDeleteStyles'

const IconDelete = ({handleFunction, data}) => {
  return (
    <ContainerIconDeleteStyles onClick={handleFunction} data-id={data}>
       x
    </ContainerIconDeleteStyles>
  )
}

export default IconDelete