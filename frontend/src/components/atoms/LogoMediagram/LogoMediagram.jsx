import React, { useContext } from 'react'
import { LogoMediagramTitleStyle, ThumbnailLogoMediagramStyle } from './LogoMediagramStyles'
import { GlobalContext } from '../../../Context/GlobalContext'

const LogoMediagram = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);

  return (
    <>
      <LogoMediagramTitleStyle>
        {'Mediagram'}
      </LogoMediagramTitleStyle>
      <ThumbnailLogoMediagramStyle onClick={() => setIsOpenMenu(!isOpenMenu)}>
        {'Mg'}
      </ThumbnailLogoMediagramStyle>
    </>

  )
}

export default LogoMediagram