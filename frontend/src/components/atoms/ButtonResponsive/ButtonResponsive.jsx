<<<<<<< HEAD
import React from 'react'
import { ButtonContainerStyles } from './ButtonResponsiveStyles'

const ButtonResponsive = ({title, isAlternative, handleFunction, icon, id, status}) => {
  return (
    <ButtonContainerStyles data-id={id} isAlternative={isAlternative} onClick={(e) => handleFunction(e)} status={status}>
      <b>{title}</b>
      {icon}
    </ButtonContainerStyles>
    )
}

=======
import React from 'react'
import { ButtonContainerStyles } from './ButtonResponsiveStyles'

const ButtonResponsive = ({title, isAlternative, handleFunction, icon, id, status}) => {
  return (
    <ButtonContainerStyles data-id={id} isAlternative={isAlternative} onClick={(e) => handleFunction(e)} status={status}>
      <b>{title}</b>
      {icon}
    </ButtonContainerStyles>
    )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default ButtonResponsive