import React, { useContext } from 'react'
import { LogoMediagramTitleStyle, ThumbnailLogoMediagramStyle } from './LogoMediagramStyles'
import { GlobalContext } from '../../../Context/GlobalContext'
import { useNavigate } from 'react-router-dom';

const LogoMediagram = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);
  const navigator = useNavigate();

  const goHome = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
    navigator('/');
  }
  return (
    <>
      <LogoMediagramTitleStyle onClick={goHome}>
        {'Mediagram'}
      </LogoMediagramTitleStyle>
      <ThumbnailLogoMediagramStyle onClick={() => setIsOpenMenu(!isOpenMenu)}>
        {'Mg'}
      </ThumbnailLogoMediagramStyle>
    </>

  )
}

export default LogoMediagram