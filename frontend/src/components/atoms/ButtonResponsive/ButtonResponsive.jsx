import React from 'react'
import { ButtonContainerStyles } from './ButtonResponsiveStyles'

const ButtonResponsive = ({title, isAlternative, handleFunction, icon, id}) => {
  return (
    <ButtonContainerStyles data-id={id} isAlternative={isAlternative} onClick={(e) => handleFunction(e)}>
        {title}
        {icon}
    </ButtonContainerStyles>
    )
}

export default ButtonResponsive