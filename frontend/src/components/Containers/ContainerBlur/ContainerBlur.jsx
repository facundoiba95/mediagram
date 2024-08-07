<<<<<<< HEAD
import React, { useContext } from 'react'
import { ContainerBlurWrapperStyles } from './ContainerBlurStyles'
import { GlobalContext } from '../../../Context/GlobalContext'

const ContainerBlur = ({children}) => {
    const { isOpen } = useContext( GlobalContext );
    
  return (
    <ContainerBlurWrapperStyles isOpen={isOpen}>
      { children }
    </ContainerBlurWrapperStyles>
  )
}

=======
import React, { useContext } from 'react'
import { ContainerBlurWrapperStyles } from './ContainerBlurStyles'
import { GlobalContext } from '../../../Context/GlobalContext'

const ContainerBlur = ({children}) => {
    const { isOpen } = useContext( GlobalContext );
    
  return (
    <ContainerBlurWrapperStyles isOpen={isOpen}>
      { children }
    </ContainerBlurWrapperStyles>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ContainerBlur