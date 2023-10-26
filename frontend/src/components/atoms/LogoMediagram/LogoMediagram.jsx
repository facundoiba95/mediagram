import React from 'react'
import { LogoMediagramTitleStyle, ThumbnailLogoMediagramStyle } from './LogoMediagramStyles'
import { useNavigate } from 'react-router-dom'

const LogoMediagram = () => {
  const navigator = useNavigate();

  return (
    <>
      <LogoMediagramTitleStyle onClick={() => navigator('/')}>
        {'Mediagram'}
      </LogoMediagramTitleStyle>
      <ThumbnailLogoMediagramStyle>
        {'Mg'}
      </ThumbnailLogoMediagramStyle>
    </>

  )
}

export default LogoMediagram