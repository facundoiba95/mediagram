import React from 'react'
import { ContainerExploreSectionGridStyles } from './ContainerExploreSectionStyles'

const ContainerExploreSection = ({children}) => {
  return (
    <ContainerExploreSectionGridStyles>
        {children}
    </ContainerExploreSectionGridStyles>
  )
}

export default ContainerExploreSection